const VIDEON_DB = (() => {
  let progressTableAvailable = true;

  const getClient = () => {
    if (!window.VIDEON_SUPABASE || !window.VIDEON_SUPABASE.client) {
      return null;
    }

    return window.VIDEON_SUPABASE.client;
  };

  const isMissingProgressTableError = (error) => error?.code === 'PGRST205';

  const ensureProfile = async () => {
    const client = getClient();

    if (!client || !window.VIDEON_AUTH || !window.VIDEON_AUTH.isSetupReady()) {
      return null;
    }

    const user = await window.VIDEON_AUTH.getCurrentUser();

    if (!user) {
      return null;
    }

    const { data, error } = await client.from('profiles').select('id').eq('id', user.id).maybeSingle();

    if (error && error.code !== 'PGRST116') {
      console.error('Error al comprobar perfil:', error);
      return null;
    }

    if (!data) {
      const { error: insertError } = await client.from('profiles').insert({
        id: user.id,
        email: user.email
      });

      if (insertError) {
        console.error('Error al crear perfil:', insertError);
        return null;
      }
    }

    return user;
  };

  const upsertProgress = async ({
    episodeId,
    positionSeconds,
    durationSeconds,
    completed,
    updatedAt
  }, expectedUserId, expectedGeneration) => {
    const client = getClient();

    if (!progressTableAvailable) {
      console.error('[VIDEON PROGRESS] error: watch_progress no está disponible');
      return null;
    }

    // La identidad debe venir explícitamente de la petición original. Nunca se
    // infiere de la sesión actual como valor por defecto: eso permitiría que una
    // escritura antigua se guardara bajo otra cuenta tras un cambio de sesión.
    if (!expectedUserId) {
      console.error('[VIDEON PROGRESS] error: se requiere expectedUserId para guardar');
      return null;
    }

    let user;

    try {
      user = await window.VIDEON_AUTH.getCurrentUser();
    } catch (error) {
      console.error('[VIDEON PROGRESS] error:', error);
      return null;
    }

    if (!client || !user) {
      console.error('[VIDEON PROGRESS] error: cliente o usuario no disponible');
      return null;
    }

    if (user.id !== expectedUserId) {
      console.error('[VIDEON PROGRESS] error: la sesión actual no coincide con el propietario de la petición');
      return null;
    }

    // La generación distingue dos sesiones del mismo usuario. No se persiste:
    // solo se valida contra auth.js inmediatamente antes de iniciar el upsert.
    if (expectedGeneration) {
      const session = window.VIDEON_AUTH?.getSessionIdentity?.();

      if (session?.generation && session.generation !== expectedGeneration) {
        console.error('[VIDEON PROGRESS] error: la generación de sesión no coincide con la petición');
        return null;
      }
    }

    const payload = {
      user_id: expectedUserId,
      episode_id: episodeId,
      progress_seconds: Number(positionSeconds || 0),
      duration: Number(durationSeconds || 0),
      completed: Boolean(completed),
      updated_at: updatedAt || new Date().toISOString()
    };

    const { data, error } = await client
      .from('watch_progress')
      .upsert(payload, { onConflict: 'user_id,episode_id' })
      .select();

    if (error) {
      if (isMissingProgressTableError(error)) {
        progressTableAvailable = false;
        console.error('[VIDEON PROGRESS] error: watch_progress no existe');
        return null;
      }

      console.error('Error guardando progreso:', error);
      return null;
    }

    console.log('[VIDEON PROGRESS] guardado correctamente');
    return data?.[0] || null;
  };

  const getProgress = async () => {
    const client = getClient();

    if (!progressTableAvailable) {
      return [];
    }

    const user = await window.VIDEON_AUTH.getCurrentUser();

    if (!client || !user) {
      return [];
    }

    const { data, error } = await client
      .from('watch_progress')
      .select('*')
      .eq('user_id', user.id)
      .order('updated_at', { ascending: false });

    if (error) {
      if (isMissingProgressTableError(error)) {
        progressTableAvailable = false;
        return [];
      }

      console.error('Error leyendo progreso:', error);
      return [];
    }

    return data || [];
  };

  // Construye errores identificables: null queda reservado exclusivamente para
  // "consulta correcta sin fila".
  const createProgressReadError = (code, message, cause) => {
    const error = new Error(message);
    error.name = 'ProgressReadError';
    error.code = code;
    if (cause) {
      error.cause = cause;
    }
    return error;
  };

  // Contrato de getEpisodeProgress():
  //   fila encontrada     -> la fila
  //   consulta sin fila   -> null
  //   cualquier fallo     -> lanza ProgressReadError con un code reconocible
  // La identidad del propietario es obligatoria: se capturó al iniciar la lectura.
  const getEpisodeProgress = async (episodeId, expectedUserId, expectedGeneration) => {
    const client = getClient();

    if (expectedUserId === undefined || expectedUserId === null || expectedUserId === '') {
      throw createProgressReadError(
        'PROGRESS_IDENTITY_MISMATCH',
        '[VIDEON PROGRESS] se requiere expectedUserId para leer el progreso'
      );
    }

    const expectedGen = Number(expectedGeneration);

    if (expectedGeneration === undefined || expectedGeneration === null || !Number.isFinite(expectedGen)) {
      throw createProgressReadError(
        'PROGRESS_IDENTITY_MISMATCH',
        '[VIDEON PROGRESS] se requiere expectedGeneration para leer el progreso'
      );
    }

    if (!client) {
      throw createProgressReadError(
        'PROGRESS_SESSION_ERROR',
        '[VIDEON PROGRESS] no hay cliente de Supabase para leer el progreso'
      );
    }

    if (!progressTableAvailable) {
      throw createProgressReadError(
        'PROGRESS_TABLE_MISSING',
        '[VIDEON PROGRESS] watch_progress no está disponible'
      );
    }

    if (!episodeId) {
      throw createProgressReadError(
        'PROGRESS_READ_ERROR',
        '[VIDEON PROGRESS] se requiere episodeId para leer el progreso'
      );
    }

    // No usar VIDEON_AUTH.getCurrentUser(): convierte silenciosamente cualquier
    // error de autenticación en "sin sesión". getSession() distingue ambos casos.
    let sessionResult;
    try {
      sessionResult = await client.auth.getSession();
    } catch (cause) {
      throw createProgressReadError(
        'PROGRESS_SESSION_ERROR',
        '[VIDEON PROGRESS] error al resolver la sesión',
        cause
      );
    }

    if (sessionResult?.error) {
      throw createProgressReadError(
        'PROGRESS_SESSION_ERROR',
        '[VIDEON PROGRESS] error al resolver la sesión',
        sessionResult.error
      );
    }

    const user = sessionResult?.data?.session?.user || null;

    if (!user) {
      throw createProgressReadError(
        'PROGRESS_NO_SESSION',
        '[VIDEON PROGRESS] no hay sesión autenticada'
      );
    }

    // Misma protección que en upsertProgress(): una lectura originada por otra
    // sesión no debe observar los datos de la cuenta actual.
    if (user.id !== expectedUserId) {
      throw createProgressReadError(
        'PROGRESS_IDENTITY_MISMATCH',
        '[VIDEON PROGRESS] el usuario de Supabase no coincide con el propietario de la lectura'
      );
    }

    const sessionIdentity = window.VIDEON_AUTH?.getSessionIdentity?.();

    if (!sessionIdentity
      || !sessionIdentity.userId
      || sessionIdentity.generation === undefined
      || sessionIdentity.generation === null
      || !Number.isFinite(Number(sessionIdentity.generation))) {
      throw createProgressReadError(
        'PROGRESS_SESSION_ERROR',
        '[VIDEON PROGRESS] getSessionIdentity() no devolvió una identidad válida'
      );
    }

    if (sessionIdentity.userId !== expectedUserId) {
      throw createProgressReadError(
        'PROGRESS_IDENTITY_MISMATCH',
        '[VIDEON PROGRESS] la identidad actual no coincide con el propietario de la lectura'
      );
    }

    // Comparación explícita: la generación 0 también debe validarse.
    if (Number(sessionIdentity.generation) !== expectedGen) {
      throw createProgressReadError(
        'PROGRESS_IDENTITY_MISMATCH',
        '[VIDEON PROGRESS] la generación de sesión no coincide con la lectura'
      );
    }

    const { data, error } = await client
      .from('watch_progress')
      .select('*')
      .eq('user_id', user.id)
      .eq('episode_id', episodeId)
      .maybeSingle();

    if (error) {
      if (isMissingProgressTableError(error)) {
        progressTableAvailable = false;
      }

      console.error('Error leyendo progreso del episodio:', error);
      throw createProgressReadError(
        isMissingProgressTableError(error) ? 'PROGRESS_TABLE_MISSING' : 'PROGRESS_READ_ERROR',
        '[VIDEON PROGRESS] error en la consulta de progreso',
        error
      );
    }

    // maybeSingle(): null significa exclusivamente "consulta correcta sin fila".
    return data || null;
  };

  const getUserStats = async () => {
    const progress = await getProgress();

    return {
      inProgress: progress.filter((item) => !item.completed).length,
      completed: progress.filter((item) => item.completed).length,
      total: progress.length
    };
  };

  const api = {
    ensureProfile,
    upsertProgress,
    getProgress,
    getEpisodeProgress,
    getUserStats
  };

  window.VIDEON_DB = api;
  return api;
})();
