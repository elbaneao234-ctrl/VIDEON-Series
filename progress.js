const VIDEON_PROGRESS = (() => {
  const STORAGE_KEY = 'videon-progress-cache';

  const generateEpisodeId = (series, season, episode) => {
    const safeSeries = String(series || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    const safeSeason = String(season || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    const safeEpisode = String(episode || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    return `${safeSeries}-${safeSeason}-${safeEpisode}`;
  };

  const getCurrentVideoMeta = () => {
    const params = new URLSearchParams(window.location.search);
    const catalogKey = params.get('catalogo') || 'aventuras';
    const seasonIndex = Number(params.get('temporada') || 0);
    const selectedCatalog = window.catalogData?.[catalogKey] || window.catalogData?.aventuras;
    const selectedSeason = selectedCatalog?.seasons?.[seasonIndex] || selectedCatalog?.seasons?.[0];
    return { catalogKey, seasonIndex, selectedCatalog, selectedSeason };
  };

  const getLocalProgressCache = () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (error) {
      return {};
    }
  };

  const saveLocalProgressCache = (items) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
      console.warn('No se pudo guardar caché local:', error);
    }
  };

  const saveVideoProgress = async (payload) => {
    const client = window.VIDEON_DB;

    if (!client) {
      return null;
    }

    const user = await window.VIDEON_AUTH.getCurrentUser();

    if (!user) {
      return null;
    }

    const cache = getLocalProgressCache();
    cache[payload.episodeId] = {
      ...payload,
      last_played_at: payload.lastPlayedAt || new Date().toISOString()
    };
    saveLocalProgressCache(cache);

    return client.upsertProgress(payload);
  };

  const getVideoProgressFromCache = (episodeId) => {
    const cache = getLocalProgressCache();
    return cache[episodeId] || null;
  };

  const bindVideoProgressTracking = () => {
    const modal = document.querySelector('#video-modal');
    const videoPlayer = document.querySelector('#video-player');
    const videoFrame = document.querySelector('#video-frame');

    if (!modal || !videoPlayer) {
      return;
    }

    let progressTimer = null;
    let lastSavedSeconds = 0;
    let lastVolume = 1;

    const syncProgress = async () => {
      const card = document.querySelector('.video-card.is-active');
      const episodeData = card ? card.dataset : null;
      const currentVideo = episodeData?.video || '';

      if (!currentVideo) {
        return;
      }

      const currentTime = Number(videoPlayer.currentTime || 0);
      const duration = Number(videoPlayer.duration || 0);
      const percentage = duration ? Math.min((currentTime / duration) * 100, 100) : 0;

      const { catalogKey, selectedCatalog, selectedSeason } = getCurrentVideoMeta();
      const identity = {
        series: selectedCatalog?.title || 'VIDEON',
        season: selectedSeason?.title || 'Temporada',
        episode: episodeData?.title || 'Episodio',
        episodeId: episodeData?.episodeId || generateEpisodeId(selectedCatalog?.title || 'VIDEON', selectedSeason?.title || 'Temporada', episodeData?.title || 'Episodio')
      };

      const payload = {
        episodeId: identity.episodeId,
        series: identity.series,
        season: identity.season,
        episode: identity.episode,
        positionSeconds: Math.floor(currentTime),
        durationSeconds: Math.floor(duration),
        percentage,
        completed: percentage >= 90,
        lastPlayedAt: new Date().toISOString()
      };

      if (Math.abs(lastSavedSeconds - payload.positionSeconds) >= 5 || payload.completed) {
        await saveVideoProgress(payload);
        lastSavedSeconds = payload.positionSeconds;
      }
    };

    const handlePlayerEvents = () => {
      const card = document.querySelector('.video-card.is-active');
      if (!card) {
        return;
      }

      const { video, title, type } = card.dataset;
      const { catalogKey, selectedCatalog, selectedSeason } = getCurrentVideoMeta();
      const episodeId = card.dataset.episodeId || generateEpisodeId(selectedCatalog?.title || 'VIDEON', selectedSeason?.title || 'Temporada', title || 'Episodio');
      card.dataset.episodeId = episodeId;

      if (type === 'iframe') {
        return;
      }

      videoPlayer.addEventListener('timeupdate', async () => {
        const currentTime = Number(videoPlayer.currentTime || 0);
        const duration = Number(videoPlayer.duration || 0);
        const percentage = duration ? Math.min((currentTime / duration) * 100, 100) : 0;

        if (percentage >= 90) {
          await saveVideoProgress({
            episodeId,
            series: selectedCatalog?.title || 'VIDEON',
            season: selectedSeason?.title || 'Temporada',
            episode: title || 'Episodio',
            positionSeconds: Math.floor(currentTime),
            durationSeconds: Math.floor(duration),
            percentage,
            completed: true,
            lastPlayedAt: new Date().toISOString()
          });
        }

        if (progressTimer) {
          clearTimeout(progressTimer);
        }

        progressTimer = setTimeout(syncProgress, 2000);
      });

      videoPlayer.addEventListener('pause', async () => {
        await syncProgress();
      });

      videoPlayer.addEventListener('ended', async () => {
        await saveVideoProgress({
          episodeId,
          series: selectedCatalog?.title || 'VIDEON',
          season: selectedSeason?.title || 'Temporada',
          episode: title || 'Episodio',
          positionSeconds: Number(videoPlayer.duration || 0),
          durationSeconds: Number(videoPlayer.duration || 0),
          percentage: 100,
          completed: true,
          lastPlayedAt: new Date().toISOString()
        });
      });
    };

    const originalOpenVideo = window.openVideo;
    if (typeof originalOpenVideo === 'function') {
      window.openVideo = async (card) => {
        const episodeId = card.dataset.episodeId || generateEpisodeId(
          card.dataset.series || 'VIDEON',
          card.dataset.season || 'Temporada',
          card.dataset.title || 'Episodio'
        );

        card.dataset.episodeId = episodeId;
        document.querySelectorAll('.video-card').forEach((item) => item.classList.remove('is-active'));
        card.classList.add('is-active');

        const progress = await window.VIDEON_DB.getEpisodeProgress(episodeId);
        const cached = getVideoProgressFromCache(episodeId);
        const resumeTime = progress?.position_seconds || cached?.positionSeconds || 0;

        if (card.dataset.type === 'iframe') {
          if (videoFrame) {
            videoFrame.src = card.dataset.video;
          }
          return;
        }

        if (videoPlayer) {
          videoPlayer.src = card.dataset.video;
          videoPlayer.currentTime = resumeTime;
          videoPlayer.play().catch(() => {});
        }
      };
    }

    document.body.addEventListener('click', async (event) => {
      const card = event.target.closest('.video-card');
      if (!card) {
        return;
      }

      const { video, title, type } = card.dataset;
      const { selectedCatalog, selectedSeason } = getCurrentVideoMeta();
      const episodeId = card.dataset.episodeId || generateEpisodeId(selectedCatalog?.title || 'VIDEON', selectedSeason?.title || 'Temporada', title || 'Episodio');
      card.dataset.episodeId = episodeId;
      card.dataset.series = selectedCatalog?.title || 'VIDEON';
      card.dataset.season = selectedSeason?.title || 'Temporada';

      document.querySelectorAll('.video-card').forEach((item) => item.classList.remove('is-active'));
      card.classList.add('is-active');

      if (type === 'iframe') {
        return;
      }

      const progress = await window.VIDEON_DB.getEpisodeProgress(episodeId);
      const cached = getVideoProgressFromCache(episodeId);
      const resumeTime = progress?.position_seconds || cached?.positionSeconds || 0;

      videoPlayer.addEventListener('loadedmetadata', () => {
        if (resumeTime > 0 && resumeTime < videoPlayer.duration) {
          videoPlayer.currentTime = resumeTime;
        }
      }, { once: true });
    });

    handlePlayerEvents();
  };

  const loadContinueWatching = async () => {
    const profile = document.querySelector('#continue-watching');
    if (!profile) {
      return;
    }

    const client = window.VIDEON_DB;

    if (!client || !window.VIDEON_AUTH || !window.VIDEON_AUTH.isSetupReady()) {
      profile.innerHTML = '<p class="empty-state">Inicia sesión para ver tu progreso.</p>';
      return;
    }

    const user = await window.VIDEON_AUTH.getCurrentUser();

    if (!user) {
      profile.innerHTML = '<p class="empty-state">Inicia sesión para ver tu progreso.</p>';
      return;
    }

    const items = await client.getProgress();
    const pending = items.filter((item) => !item.completed && item.percentage > 0 && item.percentage < 90);

    if (!pending.length) {
      profile.innerHTML = '<p class="empty-state">No tienes episodios en progreso.</p>';
      return;
    }

    const cards = pending.slice(0, 5).map((item) => {
      const percentage = Math.min(100, Math.max(0, Number(item.percentage || 0)));
      const cover = `img/Portada-${item.series === 'Death Note' ? 'DeathNote' : item.series === 'Inazuma Eleven' ? 'Inazuma' : 'Mushoku'}.jpg`;

      return `
        <article class="continue-card">
          <img src="${cover}" alt="${item.series}" />
          <div class="continue-card__body">
            <div class="continue-card__meta">
              <span>${item.series}</span>
              <span>${item.season}</span>
            </div>
            <h3>${item.episode}</h3>
            <div class="progress-bar"><span style="width:${percentage}%"></span></div>
            <div class="continue-card__footer">
              <small>${Math.round(percentage)}%</small>
              <button class="continue-button" type="button" data-continue-episode="${encodeURIComponent(item.episode_id)}">Continuar</button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    profile.innerHTML = cards;

    profile.querySelectorAll('[data-continue-episode]').forEach((button) => {
      button.addEventListener('click', async () => {
        const id = decodeURIComponent(button.getAttribute('data-continue-episode'));
        const item = items.find((entry) => entry.episode_id === id);

        if (!item) {
          return;
        }

        const targetCatalog = Object.keys(window.catalogData || {}).find((key) => {
          const catalog = window.catalogData[key];
          return catalog?.title === item.series;
        }) || 'aventuras';

        const seasonIndex = Object.values(window.catalogData?.[targetCatalog]?.seasons || {}).findIndex((season) => season.title === item.season);
        const targetUrl = `temporadas.html?catalogo=${targetCatalog}&temporada=${seasonIndex >= 0 ? seasonIndex : 0}`;
        window.location.href = targetUrl;
      });
    });
  };

  const renderProfile = async () => {
    const container = document.querySelector('#profile-content');

    if (!container) {
      return;
    }

    const client = window.VIDEON_DB;
    if (!client || !window.VIDEON_AUTH || !window.VIDEON_AUTH.isSetupReady()) {
      container.innerHTML = '<p class="empty-state">Activa Supabase para ver tu perfil.</p>';
      return;
    }

    const user = await window.VIDEON_AUTH.getCurrentUser();
    if (!user) {
      container.innerHTML = '<p class="empty-state">No has iniciado sesión.</p>';
      return;
    }

    const progress = await client.getProgress();
    const seen = progress.filter((item) => item.completed);
    const pending = progress.filter((item) => !item.completed && item.percentage > 0);

    container.innerHTML = `
      <div class="profile-grid">
        <div class="profile-box">
          <span class="mini-label">Usuario</span>
          <h3>${user.email}</h3>
        </div>
        <div class="profile-box">
          <span class="mini-label">Vistos</span>
          <h3>${seen.length}</h3>
        </div>
        <div class="profile-box">
          <span class="mini-label">En progreso</span>
          <h3>${pending.length}</h3>
        </div>
        <div class="profile-box">
          <span class="mini-label">Último episodio</span>
          <h3>${progress[0]?.episode || 'Sin registros'}</h3>
        </div>
      </div>
      <div class="profile-list">
        <h4>Episodios vistos</h4>
        ${seen.length ? seen.map((item) => `<div class="profile-row"><span>${item.series}</span><strong>${item.episode}</strong><small>${Math.round(item.percentage || 100)}%</small></div>`).join('') : '<p class="empty-state">Todavía no has marcado episodios como vistos.</p>'}
      </div>
    `;
  };

  document.addEventListener('DOMContentLoaded', async () => {
    bindVideoProgressTracking();
    await loadContinueWatching();
    await renderProfile();
  });

  const api = {
    loadContinueWatching,
    renderProfile,
    bindVideoProgressTracking,
    generateEpisodeId,
    saveVideoProgress,
    getVideoProgressFromCache
  };

  window.VIDEON_PROGRESS = api;
  return api;
})();
