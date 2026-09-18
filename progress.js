const VIDEON_PROGRESS = (() => {
  const STORAGE_KEY = 'videon-progress-cache';

  const generateEpisodeId = (series, season, episode) => {
    const safeSeries = String(series || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    const safeSeason = String(season || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    const safeEpisode = String(episode || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    return `${safeSeries}-${safeSeason}-${safeEpisode}`;
  };

  window.generateEpisodeId = generateEpisodeId;

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
      console.warn('[VIDEON PROGRESS] error: VIDEON_DB no está disponible');
      return null;
    }

    let user;

    try {
      user = await window.VIDEON_AUTH.getCurrentUser();
    } catch (error) {
      console.error('[VIDEON PROGRESS] error:', error);
      return null;
    }

    if (!user) {
      console.warn('[VIDEON PROGRESS] error: no hay usuario autenticado');
      return null;
    }

    const cache = getLocalProgressCache();
    cache[payload.episodeId] = {
      ...payload,
      updated_at: payload.updatedAt || new Date().toISOString()
    };
    saveLocalProgressCache(cache);

    console.log('[VIDEON PROGRESS] guardando:', payload);

    try {
      const result = await client.upsertProgress(payload);
      if (result) {
        console.log('[VIDEON PROGRESS] guardado correctamente');
      }
      return result;
    } catch (error) {
      console.error('[VIDEON PROGRESS] error:', error);
      return null;
    }
  };

  const getVideoProgressFromCache = (episodeId) => {
    const cache = getLocalProgressCache();
    return cache[episodeId] || null;
  };

  const getEpisodeDetails = (episodeId) => {
    for (const catalog of Object.values(window.catalogData || {})) {
      for (const season of catalog.seasons || []) {
        for (const video of season.videos || []) {
          const title = video[1] || 'Episodio';
          if (generateEpisodeId(catalog.title, season.title, title) === episodeId) {
            return {
              series: catalog.title,
              season: season.title,
              episode: title,
              cover: video[3],
              type: video[4] || 'video'
            };
          }
        }
      }
    }

    return {
      series: 'VIDEON',
      season: 'Temporada',
      episode: episodeId,
      cover: 'img/Portada-Mushoku.jpg',
      type: 'video'
    };
  };

  const applyEpisodeProgressToCards = (items) => {
    const videoGrid = document.querySelector('#video-grid');

    if (!videoGrid) {
      return;
    }

    const progressByEpisode = new Map(
      items.map((item) => [item.episode_id, item])
    );

    videoGrid.querySelectorAll('.video-card').forEach((card) => {
      const thumbnail = card.querySelector('.thumbnail');

      if (!thumbnail) {
        return;
      }

      let status = thumbnail.querySelector('.episode-status');
      let progressBar = thumbnail.querySelector('.episode-progress');

      if (!status) {
        status = document.createElement('span');
        status.className = 'episode-status';
        thumbnail.appendChild(status);
      }

      if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.className = 'episode-progress';

        const progressFill = document.createElement('span');
        progressBar.appendChild(progressFill);
        thumbnail.appendChild(progressBar);
      }

      const progressFill = progressBar.querySelector('span');
      const progress = progressByEpisode.get(card.dataset.episodeId);
      const duration = Number(progress?.duration || 0);
      const progressSeconds = Number(progress?.progress_seconds || 0);
      const isCompleted = progress?.completed === true;
      const percentage = duration > 0
        ? Math.min((progressSeconds / duration) * 100, 100)
        : 0;
      const hasLocalProgress = !isCompleted && duration > 0 && progressSeconds > 0;
      const hasIframeProgress = !isCompleted && progress && duration === 0;

      card.classList.remove('is-completed', 'is-in-progress');
      status.hidden = true;
      status.textContent = '';
      progressBar.hidden = true;

      if (progressFill) {
        progressFill.style.width = '0%';
      }

      if (isCompleted) {
        card.classList.add('is-completed');
        status.textContent = '✓ Visto';
        status.hidden = false;
      } else if (hasLocalProgress) {
        card.classList.add('is-in-progress');
        progressBar.hidden = false;

        if (progressFill) {
          progressFill.style.width = `${percentage}%`;
        }
      } else if (hasIframeProgress) {
        card.classList.add('is-in-progress');
      }
    });
  };

  const bindVideoProgressTracking = () => {
    const modal = document.querySelector('#video-modal');
    const videoPlayer = document.querySelector('#video-player');
    const videoGrid = document.querySelector('#video-grid');

    if (!modal || !videoPlayer || !videoGrid) {
      return;
    }

    const closeModalButton = modal.querySelector('.close-modal');

    let progressTimer = null;
    let lastSavedSeconds = 0;
    let activeEpisode = null;

    const getEpisodeFromCard = (card) => {
      const title = card.dataset.title || card.querySelector('h3')?.textContent?.trim() || 'Episodio';
      const { selectedCatalog, selectedSeason } = getCurrentVideoMeta();
      const episodeId = card.dataset.episodeId || generateEpisodeId(
        selectedCatalog?.title || 'VIDEON',
        selectedSeason?.title || 'Temporada',
        title
      );

      card.dataset.episodeId = episodeId;
      card.dataset.series = selectedCatalog?.title || 'VIDEON';
      card.dataset.season = selectedSeason?.title || 'Temporada';

      return {
        card,
        type: card.dataset.type || 'video',
        title,
        series: selectedCatalog?.title || 'VIDEON',
        season: selectedSeason?.title || 'Temporada',
        episodeId
      };
    };

    const activateEpisode = (card) => {
      document.querySelectorAll('.video-card').forEach((item) => item.classList.remove('is-active'));
      card.classList.add('is-active');
      activeEpisode = getEpisodeFromCard(card);
      lastSavedSeconds = 0;

      console.log('[VIDEON PROGRESS] episodio activo:', activeEpisode.episodeId);

      if (activeEpisode.type === 'iframe') {
        activeEpisode.progressReady = window.VIDEON_DB.getEpisodeProgress(activeEpisode.episodeId).then((progress) => {
          activeEpisode.completed = Boolean(progress?.completed);

          if (!activeEpisode.completed) {
            return saveVideoProgress({
              episodeId: activeEpisode.episodeId,
              positionSeconds: Number(progress?.progress_seconds || 0),
              durationSeconds: Number(progress?.duration || 0),
              completed: false,
              updatedAt: new Date().toISOString()
            });
          }
          return null;
        }).catch((error) => {
          console.warn('[VIDEON PROGRESS] error leyendo progreso iframe:', error);
          activeEpisode.completed = false;
        });
        return;
      }

      const cached = getVideoProgressFromCache(activeEpisode.episodeId);
      window.VIDEON_DB.getEpisodeProgress(activeEpisode.episodeId).then((progress) => {
        const resumeTime = progress?.progress_seconds || cached?.positionSeconds || 0;
        if (resumeTime > 0) {
          videoPlayer.addEventListener('loadedmetadata', () => {
            if (resumeTime < videoPlayer.duration) {
              videoPlayer.currentTime = resumeTime;
            }
          }, { once: true });
        }
      }).catch((error) => {
        console.warn('[VIDEON PROGRESS] error leyendo progreso:', error);
      });
    };

    const syncProgress = async (force = false) => {
      if (!activeEpisode) {
        return;
      }

      if (activeEpisode.type === 'iframe') {
        if (force) {
          if (activeEpisode.progressReady) {
            await activeEpisode.progressReady;
          }

          if (!activeEpisode.completed) {
            await saveVideoProgress({
              episodeId: activeEpisode.episodeId,
              positionSeconds: 0,
              durationSeconds: 0,
              completed: false,
              updatedAt: new Date().toISOString()
            });
          }
        }
        return;
      }

      if (videoPlayer.hidden) {
        return;
      }

      const currentTime = Number(videoPlayer.currentTime || 0);
      const duration = Number(videoPlayer.duration || 0);
      const percentage = duration ? Math.min((currentTime / duration) * 100, 100) : 0;

      const payload = {
        episodeId: activeEpisode.episodeId,
        positionSeconds: Math.floor(currentTime),
        durationSeconds: Math.floor(duration),
        completed: percentage >= 90,
        updatedAt: new Date().toISOString()
      };

      if (force || Math.abs(lastSavedSeconds - payload.positionSeconds) >= 1 || payload.completed) {
        await saveVideoProgress(payload);
        lastSavedSeconds = payload.positionSeconds;
      }
    };

    videoGrid.addEventListener('click', (event) => {
      const card = event.target.closest('.video-card');
      if (card) {
        activateEpisode(card);
      }
    }, true);

    videoGrid.addEventListener('keydown', (event) => {
      const card = event.target.closest('.video-card');
      if (card && (event.key === 'Enter' || event.key === ' ')) {
        activateEpisode(card);
      }
    }, true);

    videoPlayer.addEventListener('timeupdate', () => {
      if (progressTimer) {
        clearTimeout(progressTimer);
      }

      progressTimer = setTimeout(syncProgress, 2000);
    });

    videoPlayer.addEventListener('pause', () => syncProgress(true));
    videoPlayer.addEventListener('ended', () => syncProgress(true));

    const saveBeforeClose = async () => {
      if (activeEpisode) {
        await syncProgress(true);
        activeEpisode = null;
        lastSavedSeconds = 0;
      }
    };

    if (closeModalButton) {
      closeModalButton.addEventListener('click', saveBeforeClose, true);
    }

    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        saveBeforeClose();
      }
    }, true);

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        saveBeforeClose();
      }
    }, true);

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
    const enrichedItems = items.map((item) => {
      const details = getEpisodeDetails(item.episode_id);
      const duration = Number(item.duration || 0);
      const progressSeconds = Number(item.progress_seconds || 0);
      const percentage = duration ? Math.min((progressSeconds / duration) * 100, 100) : 0;
      return { ...item, ...details, percentage };
    });
    const pending = enrichedItems.filter((item) => {
      if (item.completed) {
        return false;
      }

      return item.type === 'iframe' || (item.percentage > 0 && item.percentage < 90);
    });

    if (!pending.length) {
      profile.innerHTML = '<p class="empty-state">No tienes episodios en progreso.</p>';
      return;
    }

    const cards = pending.slice(0, 5).map((item) => {
      const percentage = Math.min(100, Math.max(0, Number(item.percentage || 0)));
      return `
        <article class="continue-card">
          <img src="${item.cover}" alt="${item.series}" />
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
              <button class="continue-button" type="button" data-mark-watched="${encodeURIComponent(item.episode_id)}">Marcar como visto</button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    profile.innerHTML = cards;

    profile.querySelectorAll('[data-continue-episode]').forEach((button) => {
      button.addEventListener('click', async () => {
        const id = decodeURIComponent(button.getAttribute('data-continue-episode'));
        const item = enrichedItems.find((entry) => entry.episode_id === id);

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

    profile.querySelectorAll('[data-mark-watched]').forEach((button) => {
      button.addEventListener('click', async () => {
        const id = decodeURIComponent(button.getAttribute('data-mark-watched'));
        const item = enrichedItems.find((entry) => entry.episode_id === id);

        if (!item) {
          return;
        }

        const result = await client.upsertProgress({
          episodeId: item.episode_id,
          positionSeconds: Number(item.progress_seconds || 0),
          durationSeconds: Number(item.duration || 0),
          completed: true,
          updatedAt: new Date().toISOString()
        });

        if (result) {
          await loadContinueWatching();
          await renderProfile();
        }
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

    const progress = (await client.getProgress()).map((item) => {
      const details = getEpisodeDetails(item.episode_id);
      const duration = Number(item.duration || 0);
      const progressSeconds = Number(item.progress_seconds || 0);
      return {
        ...item,
        ...details,
        percentage: duration ? Math.min((progressSeconds / duration) * 100, 100) : 0
      };
    });
    const seen = progress.filter((item) => item.completed);
    const pending = progress.filter((item) => !item.completed && (item.type === 'iframe' || item.percentage > 0));

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

    const videoGrid = document.querySelector('#video-grid');
    if (videoGrid && window.VIDEON_DB && window.VIDEON_AUTH) {
      try {
        const user = await window.VIDEON_AUTH.getCurrentUser();
        if (user) {
          const items = await window.VIDEON_DB.getProgress();
          applyEpisodeProgressToCards(items);
        }
      } catch (error) {
        // El estado visual es opcional; el resto del perfil debe continuar cargando.
      }
    }

    await loadContinueWatching();
    await renderProfile();
  });

  const api = {
    loadContinueWatching,
    renderProfile,
    bindVideoProgressTracking,
    applyEpisodeProgressToCards,
    generateEpisodeId,
    saveVideoProgress,
    getVideoProgressFromCache
  };

  window.VIDEON_PROGRESS = api;
  return api;
})();
