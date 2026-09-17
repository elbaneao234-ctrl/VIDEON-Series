const VIDEON_DB = (() => {
  const getClient = () => {
    if (!window.VIDEON_SUPABASE || !window.VIDEON_SUPABASE.client) {
      return null;
    }

    return window.VIDEON_SUPABASE.client;
  };

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
    series,
    season,
    episode,
    positionSeconds,
    durationSeconds,
    percentage,
    completed,
    lastPlayedAt
  }) => {
    const client = getClient();
    const user = await window.VIDEON_AUTH.getCurrentUser();

    if (!client || !user) {
      return null;
    }

    const payload = {
      user_id: user.id,
      episode_id: episodeId,
      series,
      season,
      episode,
      position_seconds: Number(positionSeconds || 0),
      duration_seconds: Number(durationSeconds || 0),
      percentage: Number(percentage || 0),
      completed: Boolean(completed),
      last_played_at: lastPlayedAt || new Date().toISOString()
    };

    const { data, error } = await client.from('watch_progress').upsert(payload, {
      onConflict: 'user_id,episode_id'
    }).select();

    if (error) {
      console.error('Error guardando progreso:', error);
      return null;
    }

    return data?.[0] || null;
  };

  const getProgress = async () => {
    const client = getClient();
    const user = await window.VIDEON_AUTH.getCurrentUser();

    if (!client || !user) {
      return [];
    }

    const { data, error } = await client
      .from('watch_progress')
      .select('*')
      .eq('user_id', user.id)
      .order('last_played_at', { ascending: false });

    if (error) {
      console.error('Error leyendo progreso:', error);
      return [];
    }

    return data || [];
  };

  const getEpisodeProgress = async (episodeId) => {
    const client = getClient();
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
