const VIDEON_PROGRESS = (() => {
  const STORAGE_KEY = 'videon-progress-cache';

  const getSessionIdentity = () => {
    const identity = window.VIDEON_AUTH?.getSessionIdentity?.();
    return {
      userId: identity?.userId || null,
      generation: Number(identity?.generation) || 0
    };
  };

  // Acepta tanto la forma de auth.js ({ userId, generation }) como la de una
  // petición ({ userId, sessionGeneration }).
  const isIdentityCurrent = (owner) => {
    const userId = owner?.userId || null;
    const generation = Number(owner?.sessionGeneration ?? owner?.generation ?? 0);

    if (!userId) {
      return false;
    }

    const current = getSessionIdentity();
    return current.userId === userId && current.generation === generation;
  };

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

  const getCacheKey = (userId) => (userId ? `${STORAGE_KEY}:${userId}` : null);

  const getLocalProgressCache = (userId) => {
    const key = getCacheKey(userId);
    if (!key) {
      return {};
    }

    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : {};
    } catch (error) {
      return {};
    }
  };

  const saveLocalProgressCache = (userId, items) => {
    const key = getCacheKey(userId);
    if (!key) {
      return;
    }

    try {
      localStorage.setItem(key, JSON.stringify(items));
    } catch (error) {
      console.warn('No se pudo guardar caché local:', error);
    }
  };

  // La clave global anterior no se volverá a leer: se elimina para que ninguna
  // cuenta herede posiciones de otra sesión. No afecta a Supabase.
  const clearLegacyProgressCache = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.warn('No se pudo invalidar la caché local anterior:', error);
    }
  };

  const playerControls = {
    activateEpisode: null,
    markActiveEpisodeCompleted: null
  };

  let videoSessionUnsubscribe = null;

  const saveVideoProgress = async (payload, expectedUserId, expectedGeneration) => {
    const client = window.VIDEON_DB;

    if (!client) {
      console.warn('[VIDEON PROGRESS] error: VIDEON_DB no está disponible');
      return null;
    }

    let identity = getSessionIdentity();

    // Compatibilidad con llamadores externos que no pasan la identidad:
    // se captura aquí, en el momento de crear la escritura.
    if (!expectedUserId && !identity.userId && window.VIDEON_AUTH?.getCurrentUser) {
      try {
        const user = await window.VIDEON_AUTH.getCurrentUser();
        if (user) {
          identity = { userId: user.id, generation: identity.generation };
        }
      } catch (error) {
        console.error('[VIDEON PROGRESS] error:', error);
        return null;
      }
    }

    const owner = {
      userId: expectedUserId || identity.userId,
      sessionGeneration: Number(expectedGeneration) || identity.generation
    };

    if (!owner.userId) {
      console.warn('[VIDEON PROGRESS] error: no hay usuario autenticado');
      return null;
    }

    if (!isIdentityCurrent(owner)) {
      console.error('[VIDEON PROGRESS] error: la sesión actual no coincide con el propietario de la petición');
      return null;
    }

    console.log('[VIDEON PROGRESS] guardando:', payload);

    try {
      const result = await client.upsertProgress(payload, owner.userId, owner.sessionGeneration);

      // Una respuesta antigua no debe actualizar el caché ni el estado visual
      // de una sesión nueva.
      if (!isIdentityCurrent(owner)) {
        console.warn('[VIDEON PROGRESS] escritura descartada por cambio de sesión:', payload.episodeId);
        return null;
      }

      if (result) {
        const cache = getLocalProgressCache(owner.userId);
        cache[payload.episodeId] = {
          ...payload,
          updated_at: payload.updatedAt || new Date().toISOString()
        };
        saveLocalProgressCache(owner.userId, cache);
        console.log('[VIDEON PROGRESS] guardado correctamente');
      }

      return result;
    } catch (error) {
      console.error('[VIDEON PROGRESS] error:', error);
      return null;
    }
  };

  const getVideoProgressFromCache = (episodeId, userId) => {
    const ownerId = userId || getSessionIdentity().userId;
    const cache = getLocalProgressCache(ownerId);
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

  const markEpisodeCardCompleted = (episodeId) => {
    const card = [...document.querySelectorAll('.video-card')]
      .find((item) => item.dataset.episodeId === episodeId);
    const thumbnail = card?.querySelector('.thumbnail');

    if (!card || !thumbnail) {
      return;
    }

    let status = thumbnail.querySelector('.episode-status');
    if (!status) {
      status = document.createElement('span');
      status.className = 'episode-status';
      thumbnail.appendChild(status);
    }

    card.classList.remove('is-in-progress');
    card.classList.add('is-completed');
    status.textContent = '✓ Visto';
    status.hidden = false;

    const progressBar = thumbnail.querySelector('.episode-progress');
    if (progressBar) {
      progressBar.hidden = true;
    }
  };

  const bindVideoProgressTracking = () => {
    const modal = document.querySelector('#video-modal');
    const videoPlayer = document.querySelector('#video-player');
    const videoGrid = document.querySelector('#video-grid');

    if (!modal || !videoPlayer || !videoGrid) {
      return;
    }

    if (videoSessionUnsubscribe) {
      videoSessionUnsubscribe();
      videoSessionUnsubscribe = null;
    }

    clearLegacyProgressCache();

    let sessionIdentity = getSessionIdentity();

    const SAVE_INTERVAL_MS = 5000;
    const MAX_WRITE_ATTEMPTS = 4;
    const RETRY_DELAYS_MS = [5000, 10000, 20000];

    let progressTimer = null;
    let progressTimerAt = 0;
    let lastSavedSeconds = 0;
    let lastSyncAt = 0;
    let activeEpisode = null;
    let closingEpisode = false;
    let resumeListener = null;

    const pendingPeriodic = new Map();
    const requestQueue = [];
    const pendingCompletions = new Set();
    const completedEpisodes = new Set();
    let draining = false;

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

    // Una única captura de identidad por activación. `seed` es la identidad ya
    // capturada en activateEpisode: solo se completa el userId si auth.js aún no
    // ha publicado la sesión inicial, conservando siempre la misma generación.
    const resolveOwner = async (seed) => {
      const owner = {
        userId: seed?.userId || null,
        sessionGeneration: Number(seed?.sessionGeneration ?? seed?.generation) || 0
      };

      if (!owner.userId && window.VIDEON_AUTH?.getCurrentUser) {
        try {
          const user = await window.VIDEON_AUTH.getCurrentUser();
          if (user) {
            owner.userId = user.id;
          }
        } catch (error) {
          console.warn('[VIDEON PROGRESS] no se pudo resolver la sesión:', error);
        }
      }

      return owner;
    };

    // Estados de lectura. 'failed' nunca se convierte en 'ready-empty'.
    const READ_PENDING = 'pending';
    const READ_READY_WITH_PROGRESS = 'ready-with-progress';
    const READ_READY_EMPTY = 'ready-empty';
    const READ_FAILED = 'failed';

    const createReadState = (owner) => ({
      status: READ_PENDING,
      progress: null,
      userId: owner.userId,
      sessionGeneration: owner.sessionGeneration
    });

    // La lectura nunca rechaza: el fallo es un resultado explícito. El propietario
    // se captura al iniciar la lectura, no se toma de la sesión al terminar.
    const loadEpisodeProgress = async (episode, owner) => {
      const state = episode.readState;

      if (!isIdentityCurrent(owner) || !owner.userId) {
        state.status = READ_FAILED;
        return state;
      }

      try {
        const progress = await window.VIDEON_DB.getEpisodeProgress(
          episode.episodeId,
          owner.userId,
          owner.sessionGeneration
        );

        if (!isIdentityCurrent(owner)) {
          state.status = READ_FAILED;
          return state;
        }

        state.progress = progress || null;
        state.status = progress ? READ_READY_WITH_PROGRESS : READ_READY_EMPTY;
      } catch (error) {
        console.error('[VIDEON PROGRESS] error leyendo progreso:', error);
        state.status = READ_FAILED;
      }

      return state;
    };

    const showReadError = (episode) => {
      if (activeEpisode !== episode || !modal.classList.contains('is-open')) {
        return;
      }

      const message = document.querySelector('#video-action-message');
      if (message) {
        message.textContent = 'No se pudo leer tu progreso. Se conservará el último progreso guardado.';
      }
    };

    const applyVideoReadResult = (episode, state) => {
      if (state.status === READ_FAILED || !isIdentityCurrent(episode)) {
        showReadError(episode);
        return state;
      }

      const progress = state.progress;

      // Registrar el estado confirmado aunque el episodio ya no esté activo,
      // siempre que la sesión que originó la lectura siga siendo válida.
      if (progress?.completed) {
        episode.completed = true;
        completedEpisodes.add(episode.episodeId);
      }

      if (activeEpisode !== episode || !isIdentityCurrent(episode)) {
        return state;
      }

      const cached = getVideoProgressFromCache(episode.episodeId, episode.userId);
      const resumeTime = progress?.progress_seconds || cached?.positionSeconds || 0;

      if (resumeTime > 0) {
        const applyResume = () => {
          if (activeEpisode !== episode || !isIdentityCurrent(episode)) {
            return;
          }
          if (resumeTime < videoPlayer.duration) {
            videoPlayer.currentTime = resumeTime;
          }
        };

        if (videoPlayer.readyState >= 1) {
          applyResume();
        } else {
          if (resumeListener) {
            videoPlayer.removeEventListener('loadedmetadata', resumeListener);
          }
          resumeListener = () => {
            resumeListener = null;
            applyResume();
          };
          videoPlayer.addEventListener('loadedmetadata', resumeListener, { once: true });
        }
      }

      return state;
    };

    const applyIframeReadResult = async (episode, state) => {
      if (state.status === READ_FAILED || !isIdentityCurrent(episode)) {
        showReadError(episode);
        return state;
      }

      const progress = state.progress;

      if (progress?.completed) {
        episode.completed = true;
        completedEpisodes.add(episode.episodeId);
        return state;
      }

      // Solo una consulta correcta sin fila permite inicializar el episodio nuevo.
      // Nunca se crea una fila artificial 0/0 tras un error de lectura.
      if (state.status === READ_READY_EMPTY) {
        await saveVideoProgress({
          episodeId: episode.episodeId,
          positionSeconds: 0,
          durationSeconds: 0,
          completed: false,
          updatedAt: new Date().toISOString()
        }, episode.userId, episode.sessionGeneration);
      }

      return state;
    };

    const activateEpisode = (episode) => {
      const card = episode?.dataset ? episode : null;
      const episodeDetails = card ? getEpisodeFromCard(card) : episode;

      if (!episodeDetails?.episodeId) {
        return;
      }

      closingEpisode = false;
      if (resumeListener) {
        videoPlayer.removeEventListener('loadedmetadata', resumeListener);
        resumeListener = null;
      }
      document.querySelectorAll('.video-card').forEach((item) => item.classList.remove('is-active'));
      card?.classList.add('is-active');

      const identity = getSessionIdentity();
      const activationOwner = {
        userId: identity.userId,
        sessionGeneration: Number(identity.generation) || 0
      };

      const episodeToActivate = {
        ...episodeDetails,
        card,
        completed: Boolean(episodeDetails.completed) || completedEpisodes.has(episodeDetails.episodeId),
        userId: activationOwner.userId,
        sessionGeneration: activationOwner.sessionGeneration
      };
      activeEpisode = episodeToActivate;
      lastSavedSeconds = 0;

      // El readState y la consulta comparten exactamente la misma captura.
      const readState = createReadState(activationOwner);
      episodeToActivate.readState = readState;

      // Una sola promesa: resuelve siempre con el estado de lectura final y
      // nunca rechaza, de modo que ningún consumidor deje un rechazo sin gestionar.
      episodeToActivate.progressReady = resolveOwner(activationOwner).then((owner) => {
        // Si la generación cambió durante la preparación, la lectura se descarta.
        if (!isIdentityCurrent(owner) || !owner.userId) {
          readState.status = READ_FAILED;
          return readState;
        }

        // La sesión inicial puede resolverse de forma asíncrona: sincronizar la
        // identidad del episodio antes de lanzar la consulta y sus escrituras.
        episodeToActivate.userId = owner.userId;
        episodeToActivate.sessionGeneration = owner.sessionGeneration;
        readState.userId = owner.userId;
        readState.sessionGeneration = owner.sessionGeneration;

        return loadEpisodeProgress(episodeToActivate, owner);
      }).then((state) => {
        if (episodeToActivate.type === 'iframe') {
          return applyIframeReadResult(episodeToActivate, state);
        }
        return applyVideoReadResult(episodeToActivate, state);
      }).catch((error) => {
        console.error('[VIDEON PROGRESS] error preparando la lectura:', error);
        if (isIdentityCurrent(episodeToActivate)) {
          readState.status = READ_FAILED;
          showReadError(episodeToActivate);
        }
        return readState;
      });

      console.log('[VIDEON PROGRESS] episodio activo:', activeEpisode.episodeId);
    };

    const isWriteBlocked = (episodeId) => pendingCompletions.has(episodeId) || completedEpisodes.has(episodeId);

    const scheduleFlush = () => {
      const now = Date.now();
      let wakeAt = null;

      if (pendingPeriodic.size) {
        wakeAt = lastSyncAt + SAVE_INTERVAL_MS;
      }

      requestQueue.forEach((request) => {
        if (wakeAt === null || request.nextAttemptAt < wakeAt) {
          wakeAt = request.nextAttemptAt;
        }
      });

      if (wakeAt === null) {
        if (progressTimer) {
          clearTimeout(progressTimer);
          progressTimer = null;
          progressTimerAt = 0;
        }
        return;
      }

      // Un reintento lejano de A no debe retrasar una escritura de B que ya tiene su plazo.
      if (progressTimer && progressTimerAt <= wakeAt) {
        return;
      }

      if (progressTimer) {
        clearTimeout(progressTimer);
      }

      progressTimerAt = wakeAt;
      progressTimer = setTimeout(() => {
        progressTimer = null;
        progressTimerAt = 0;

        if (pendingPeriodic.size && Date.now() >= lastSyncAt + SAVE_INTERVAL_MS) {
          pendingPeriodic.forEach((request) => requestQueue.push(request));
          pendingPeriodic.clear();
        }

        drain().catch(reportDrainError);
      }, Math.max(0, wakeAt - now));
    };

    const reportDrainError = (error) => {
      console.error('[VIDEON PROGRESS] error:', error);
      draining = false;
      scheduleFlush();
    };

    const resolveWaiters = (request, result) => {
      request.waiters.forEach((resolve) => resolve(result));
      request.waiters = [];
    };

    const discardRequest = (request) => {
      const episodeId = request.episode.episodeId;

      if (request.payload.completed
        && !requestQueue.some((item) => item !== request
          && item.episode.episodeId === episodeId && item.payload.completed)) {
        pendingCompletions.delete(episodeId);
      }

      resolveWaiters(request, false);
    };

    const refreshCardsForSession = async (identity) => {
      if (!identity.userId || !window.VIDEON_DB?.getProgress) {
        return;
      }

      try {
        const items = await window.VIDEON_DB.getProgress();

        // La lectura puede terminar después de otro cambio de sesión.
        if (!isIdentityCurrent(identity)) {
          return;
        }

        applyEpisodeProgressToCards(items);
      } catch (error) {
        console.warn('[VIDEON PROGRESS] no se pudo repintar el progreso tras el cambio de sesión:', error);
      }
    };

    const resetSessionState = (identity) => {
      if (progressTimer) {
        clearTimeout(progressTimer);
        progressTimer = null;
        progressTimerAt = 0;
      }

      pendingPeriodic.forEach((request) => discardRequest(request));
      pendingPeriodic.clear();
      requestQueue.slice().forEach((request) => discardRequest(request));
      requestQueue.length = 0;

      pendingCompletions.clear();
      completedEpisodes.clear();

      if (resumeListener) {
        videoPlayer.removeEventListener('loadedmetadata', resumeListener);
        resumeListener = null;
      }

      activeEpisode = null;
      closingEpisode = false;
      lastSavedSeconds = 0;
      lastSyncAt = 0;

      const actionMessage = document.querySelector('#video-action-message');
      if (actionMessage) {
        actionMessage.textContent = '';
      }

      // No se toca `draining`: una escritura ya en vuelo debe terminar y
      // descartarse por cambio de generación sin permitir otra simultánea.
      document.querySelectorAll('.video-card').forEach((item) => item.classList.remove('is-active'));
      applyEpisodeProgressToCards([]);
      clearLegacyProgressCache();
      refreshCardsForSession(identity);
    };

    const handleSessionChange = (nextIdentity) => {
      const incoming = {
        userId: nextIdentity?.userId || null,
        generation: Number(nextIdentity?.generation) || 0
      };
      const changed = incoming.userId !== sessionIdentity.userId
        || incoming.generation !== sessionIdentity.generation;

      sessionIdentity = incoming;

      if (!changed) {
        return;
      }

      resetSessionState(incoming);
    };

    const drain = async () => {
      if (draining) {
        return;
      }

      draining = true;

      try {
        while (requestQueue.length) {
          const now = Date.now();
          const index = requestQueue.findIndex((request) => request.nextAttemptAt <= now);
          if (index < 0) {
            break;
          }

          const [request] = requestQueue.splice(index, 1);
          const episodeId = request.episode.episodeId;

          if (!isIdentityCurrent(request)) {
            console.warn('[VIDEON PROGRESS] petición descartada por cambio de sesión:', episodeId);
            discardRequest(request);
            continue;
          }

          if (!request.payload.completed && isWriteBlocked(episodeId)) {
            resolveWaiters(request, true);
            continue;
          }

          request.attempts += 1;
          if (request.periodic && request.attempts === 1) {
            lastSyncAt = Date.now();
          }

          let saved = false;
          try {
            saved = Boolean(await saveVideoProgress(
              request.payload,
              request.userId,
              request.sessionGeneration
            ));
          } catch (error) {
            console.error('[VIDEON PROGRESS] error:', error);
          }

          // La sesión puede haber cambiado mientras la petición estaba en vuelo.
          // En ese caso no se toca el estado visual ni la cola de la sesión nueva.
          if (!isIdentityCurrent(request)) {
            console.warn('[VIDEON PROGRESS] respuesta descartada por cambio de sesión:', episodeId);
            discardRequest(request);
            continue;
          }

          if (saved) {
            if (request.payload.completed) {
              request.episode.completed = true;
              pendingCompletions.delete(episodeId);
              completedEpisodes.add(episodeId);

              try {
                markEpisodeCardCompleted(episodeId);
              } catch (error) {
                console.error('[VIDEON PROGRESS] error:', error);
              }
            } else if (completedEpisodes.has(episodeId)
              && !requestQueue.some((item) => item.episode.episodeId === episodeId && item.payload.completed)) {
              // Una lectura confirmó la finalización mientras esta escritura estaba en vuelo:
              // restaurar completed:true de inmediato para no perder el estado.
              pendingCompletions.add(episodeId);
              requestQueue.unshift({
                episode: request.episode,
                payload: { ...request.payload, completed: true, updatedAt: new Date().toISOString() },
                waiters: [],
                attempts: 0,
                nextAttemptAt: 0,
                periodic: false,
                userId: request.userId,
                sessionGeneration: request.sessionGeneration
              });
            }

            if (request.episode === activeEpisode) {
              lastSavedSeconds = request.payload.positionSeconds;
            }

            resolveWaiters(request, true);
            continue;
          }

          if (request.attempts < MAX_WRITE_ATTEMPTS) {
            // Reintento progresivo por petición: conservamos payload y waiters, y no
            // bloqueamos el resto de la cola mientras llega su momento de ejecución.
            request.nextAttemptAt = Date.now() + RETRY_DELAYS_MS[request.attempts - 1];
            requestQueue.push(request);
            continue;
          }

          console.error('[VIDEON PROGRESS] guardado descartado tras agotar intentos:', episodeId, request.payload);
          discardRequest(request);
        }
      } finally {
        draining = false;
        scheduleFlush();
      }
    };

    const queuePeriodicWrite = (episode, payload) => new Promise((resolve) => {
      if (!isIdentityCurrent(episode)) {
        resolve(false);
        return;
      }

      if (isWriteBlocked(episode.episodeId)) {
        resolve(true);
        return;
      }

      // Una petición huérfana de otra generación nunca debe absorber waiters nuevos.
      const staleIndex = requestQueue.findIndex((item) => item.episode.episodeId === episode.episodeId
        && !isIdentityCurrent(item));
      if (staleIndex >= 0) {
        discardRequest(requestQueue.splice(staleIndex, 1)[0]);
      }

      const existing = requestQueue.find((item) => item.episode.episodeId === episode.episodeId);
      if (existing) {
        existing.waiters.push(resolve);
        existing.userId = episode.userId;
        existing.sessionGeneration = episode.sessionGeneration;
        if (!existing.payload.completed) {
          existing.payload = payload;
        }
        // No reiniciar attempts ni nextAttemptAt: cada timeupdate no debe renovar
        // el presupuesto de reintentos de una petición que ya está fallando.
        return;
      }

      let pending = pendingPeriodic.get(episode.episodeId);
      if (pending && !isIdentityCurrent(pending)) {
        pendingPeriodic.delete(episode.episodeId);
        discardRequest(pending);
        pending = null;
      }

      if (pending) {
        pending.payload = payload;
        pending.waiters.push(resolve);
        pending.userId = episode.userId;
        pending.sessionGeneration = episode.sessionGeneration;
      } else {
        pendingPeriodic.set(episode.episodeId, {
          episode,
          payload,
          waiters: [resolve],
          attempts: 0,
          nextAttemptAt: 0,
          periodic: true,
          userId: episode.userId,
          sessionGeneration: episode.sessionGeneration
        });
      }

      scheduleFlush();
    });

    const queueForceWrite = (episode, payload) => new Promise((resolve) => {
      const episodeId = episode.episodeId;

      if (!isIdentityCurrent(episode)) {
        resolve(false);
        return;
      }

      if (!payload.completed && isWriteBlocked(episodeId)) {
        resolve(true);
        return;
      }

      const waiters = [resolve];

      if (payload.completed) {
        pendingCompletions.add(episodeId);
      }

      const pending = pendingPeriodic.get(episodeId);
      if (pending) {
        if (isIdentityCurrent(pending)) {
          waiters.push(...pending.waiters);
        } else {
          discardRequest(pending);
        }
        pendingPeriodic.delete(episodeId);
      }

      const index = requestQueue.findIndex((item) => item.episode.episodeId === episodeId);
      if (index >= 0) {
        const [existing] = requestQueue.splice(index, 1);

        if (isIdentityCurrent(existing)) {
          existing.payload = payload;
          existing.waiters.push(...waiters);
          existing.userId = episode.userId;
          existing.sessionGeneration = episode.sessionGeneration;
          // Una escritura forzada es una acción nueva del usuario: presupuesto propio.
          existing.attempts = 0;
          existing.nextAttemptAt = 0;
          existing.periodic = false;
          requestQueue.unshift(existing);
        } else {
          discardRequest(existing);
          requestQueue.unshift({
            episode,
            payload,
            waiters,
            attempts: 0,
            nextAttemptAt: 0,
            periodic: false,
            userId: episode.userId,
            sessionGeneration: episode.sessionGeneration
          });
        }
      } else {
        requestQueue.unshift({
          episode,
          payload,
          waiters,
          attempts: 0,
          nextAttemptAt: 0,
          periodic: false,
          userId: episode.userId,
          sessionGeneration: episode.sessionGeneration
        });
      }

      drain().catch(reportDrainError);
    });

    const syncProgress = async (
      force = false,
      markCompleted = false,
      episodeToSync = activeEpisode,
      allowThreshold = false,
      allowInactive = false
    ) => {
      if (!episodeToSync
        || (!allowInactive && activeEpisode !== episodeToSync)
        || !isIdentityCurrent(episodeToSync)
        || (episodeToSync.completed && !markCompleted)) {
        return;
      }

      const isIframe = episodeToSync.type === 'iframe';

      // Capturar la posición antes de cualquier await: al cerrar, script.js
      // vacía el src del vídeo y currentTime pasaría a 0. Un iframe NUNCA debe
      // heredar currentTime/duration de un vídeo HTML5 reproducido antes.
      const currentTime = isIframe ? 0 : Number(videoPlayer.currentTime || 0);
      const duration = isIframe ? 0 : Number(videoPlayer.duration || 0);
      const percentage = duration ? Math.min((currentTime / duration) * 100, 100) : 0;
      const completed = markCompleted || (allowThreshold && !isIframe && percentage >= 90);

      const payload = {
        episodeId: episodeToSync.episodeId,
        positionSeconds: isIframe ? 0 : Math.floor(currentTime),
        durationSeconds: isIframe ? 0 : Math.floor(duration),
        completed,
        updatedAt: new Date().toISOString()
      };

      if (!force && !completed && Math.abs(lastSavedSeconds - payload.positionSeconds) < 1) {
        return;
      }

      if (!isIframe && !allowInactive && videoPlayer.hidden) {
        return;
      }

      if (episodeToSync.progressReady) {
        // La promesa resuelve con el estado de lectura; nunca rechaza.
        const readState = await episodeToSync.progressReady;

        // La lectura puede terminar después de un cambio de sesión.
        if (!isIdentityCurrent(episodeToSync)) {
          return;
        }

        if (!allowInactive
          && (activeEpisode !== episodeToSync || (!isIframe && videoPlayer.hidden))) {
          return;
        }

        // Un fallo de lectura nunca autoriza una escritura completed:false:
        // no sabemos si Supabase ya tiene un progreso completado.
        if (!payload.completed && (!readState || readState.status === READ_FAILED)) {
          console.warn('[VIDEON PROGRESS] escritura incompleta bloqueada: lectura fallida');
          return;
        }

        if (!payload.completed
          && readState?.status === READ_READY_WITH_PROGRESS
          && readState.progress?.completed) {
          return;
        }
      }

      // Revalidar tras el await: la generación puede haber cambiado mientras leíamos.
      if (!isIdentityCurrent(episodeToSync)) {
        return;
      }

      if (isIframe) {
        if (!force) {
          return;
        }
        // Las escrituras directas de iframe quedan fuera del coordinador, como en fases anteriores.
        return Boolean(await saveVideoProgress(payload, episodeToSync.userId, episodeToSync.sessionGeneration));
      }

      if (force || completed) {
        return await queueForceWrite(episodeToSync, payload);
      }

      return await queuePeriodicWrite(episodeToSync, payload);
    };

    const markActiveEpisodeCompleted = async () => {
      const episodeToComplete = activeEpisode;
      if (!episodeToComplete) {
        return { success: false, reason: 'no-active-episode' };
      }

      let user;
      try {
        user = await window.VIDEON_AUTH?.getCurrentUser();
      } catch {
        return { success: false, reason: 'save-failed' };
      }

      if (!user) {
        return { success: false, reason: 'unauthenticated' };
      }

      if (episodeToComplete.progressReady) {
        await episodeToComplete.progressReady;
      }

      if (activeEpisode !== episodeToComplete) {
        return { success: false, reason: 'episode-changed' };
      }

      if (!isIdentityCurrent(episodeToComplete)) {
        return { success: false, reason: 'session-changed' };
      }

      const isIframe = episodeToComplete.type === 'iframe';
      const payload = {
        episodeId: episodeToComplete.episodeId,
        positionSeconds: isIframe ? 0 : Math.floor(Number(videoPlayer.currentTime || 0)),
        durationSeconds: isIframe ? 0 : Math.floor(Number(videoPlayer.duration || 0)),
        completed: true,
        updatedAt: new Date().toISOString()
      };

      const result = isIframe
        ? await saveVideoProgress(payload, episodeToComplete.userId, episodeToComplete.sessionGeneration)
        : await queueForceWrite(episodeToComplete, payload);

      if (!result || !isIdentityCurrent(episodeToComplete)) {
        return { success: false, reason: result ? 'session-changed' : 'save-failed' };
      }

      episodeToComplete.completed = true;
      markEpisodeCardCompleted(episodeToComplete.episodeId);
      return { success: true, episodeId: episodeToComplete.episodeId };
    };

    playerControls.activateEpisode = activateEpisode;
    playerControls.markActiveEpisodeCompleted = markActiveEpisodeCompleted;

    videoSessionUnsubscribe = window.VIDEON_AUTH?.onSessionChange?.(handleSessionChange) || null;

    videoPlayer.addEventListener('timeupdate', () => {
      const episodeToSync = activeEpisode;
      syncProgress(false, false, episodeToSync, true);
    });

    videoPlayer.addEventListener('pause', () => {
      if (!closingEpisode) {
        syncProgress(true);
      }
    });
    videoPlayer.addEventListener('ended', () => syncProgress(true, true));

    const saveBeforeClose = async () => {
      if (!activeEpisode || closingEpisode) {
        return;
      }

      const episodeToClose = activeEpisode;
      closingEpisode = true;

      try {
        // El guardado NO bloquea el cierre: script.js cierra el modal de inmediato.
        // allowInactive evita que el cierre descarte el guardado legítimo mientras
        // progressReady sigue pendiente; la identidad sigue siendo obligatoria.
        await syncProgress(true, false, episodeToClose, false, true);

        if (activeEpisode === episodeToClose) {
          activeEpisode = null;
          lastSavedSeconds = 0;
        }
      } catch (error) {
        console.error('[VIDEON PROGRESS] error:', error);
      } finally {
        closingEpisode = false;
      }
    };

    const closeModalButton = modal.querySelector('.close-modal');

    if (closeModalButton) {
      closeModalButton.addEventListener('click', () => { saveBeforeClose(); }, true);
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

        // La identidad se captura en el momento del clic, no al ejecutar la escritura.
        const identity = getSessionIdentity();
        const owner = { userId: identity.userId, sessionGeneration: identity.generation };

        if (!owner.userId && window.VIDEON_AUTH?.getCurrentUser) {
          try {
            const currentUser = await window.VIDEON_AUTH.getCurrentUser();
            if (currentUser) {
              owner.userId = currentUser.id;
            }
          } catch (error) {
            console.error('[VIDEON PROGRESS] error:', error);
          }
        }

        if (!isIdentityCurrent(owner)) {
          return;
        }

        const result = await client.upsertProgress({
          episodeId: item.episode_id,
          positionSeconds: Number(item.progress_seconds || 0),
          durationSeconds: Number(item.duration || 0),
          completed: true,
          updatedAt: new Date().toISOString()
        }, owner.userId, owner.sessionGeneration);

        if (result && isIdentityCurrent(owner)) {
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
    getVideoProgressFromCache,
    activateEpisode: (episode) => playerControls.activateEpisode?.(episode),
    markActiveEpisodeCompleted: () => playerControls.markActiveEpisodeCompleted?.()
  };

  window.VIDEON_PROGRESS = api;
  return api;
})();
