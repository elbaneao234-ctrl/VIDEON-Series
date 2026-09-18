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
  }) => {
    const client = getClient();

    if (!progressTableAvailable) {
      console.error('[VIDEON PROGRESS] error: watch_progress no está disponible');
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

    const payload = {
      user_id: user.id,
      episode_id: episodeId,
      progress_seconds: Number(positionSeconds || 0),
      duration: Number(durationSeconds || 0),
      completed: Boolean(completed),
      updated_at: updatedAt || new Date().toISOString()
    };

    const { data: existing, error: lookupError } = await client
      .from('watch_progress')
      .select('id')
      .eq('user_id', user.id)
      .eq('episode_id', episodeId)
      .maybeSingle();

    console.log('[VIDEON DEBUG] consulta previa watch_progress:', {
      data: existing,
      error: lookupError,
      code: lookupError?.code,
      message: lookupError?.message,
      details: lookupError?.details,
      hint: lookupError?.hint
    });

    if (lookupError) {
      if (isMissingProgressTableError(lookupError)) {
        progressTableAvailable = false;
        console.error('[VIDEON PROGRESS] error: watch_progress no existe');
        return null;
      }

      console.error('Error buscando progreso:', lookupError);
      console.error('[VIDEON PROGRESS] error:', lookupError);
      return null;
    }

    console.log('[VIDEON DEBUG] operación watch_progress:', {
      operation: existing?.id ? 'update' : 'insert',
      payload
    });

    const query = existing?.id
      ? client.from('watch_progress').update(payload).eq('id', existing.id)
      : client.from('watch_progress').insert(payload);

    const { data, error } = await query.select();

    console.log('[VIDEON DEBUG] respuesta watch_progress:', {
      payload,
      data,
      error,
      code: error?.code,
      message: error?.message,
      details: error?.details,
      hint: error?.hint
    });

    if (error) {
      if (isMissingProgressTableError(error)) {
        progressTableAvailable = false;
        console.error('[VIDEON PROGRESS] error: watch_progress no existe');
        return null;
      }

      console.error('Error guardando progreso:', error);
      console.error('[VIDEON PROGRESS] error:', error);
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

  const getEpisodeProgress = async (episodeId) => {
    const client = getClient();

    if (!progressTableAvailable) {
      return null;
    }

    const user = await window.VIDEON_AUTH.getCurrentUser();

    if (!client || !user || !episodeId) {
      return null;
    }

    const { data, error } = await client
      .from('watch_progress')
      .select('*')
      .eq('user_id', user.id)
      .eq('episode_id', episodeId)
      .maybeSingle();

    if (error && error.code !== 'PGRST116') {
      if (isMissingProgressTableError(error)) {
        progressTableAvailable = false;
        return null;
      }

      console.error('Error leyendo episodio concreto:', error);
      return null;
    }

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
