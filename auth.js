const VIDEON_AUTH = (() => {
  const isSetupReady = () => {
    const config = window.VIDEON_CONFIG || {};
    return Boolean(
      config.supabaseUrl &&
      config.supabaseUrl !== 'https://TU_PROYECTO.supabase.co' &&
      config.supabaseAnonKey &&
      config.supabaseAnonKey !== 'TU_PUBLIC_ANON_KEY'
    );
  };

  const getClient = () => {
    if (!window.VIDEON_SUPABASE || !window.VIDEON_SUPABASE.client) {
      return null;
    }

    return window.VIDEON_SUPABASE.client;
  };

  const getCurrentUser = async () => {
    const client = getClient();

    if (!client) {
      return null;
    }

    const { data, error } = await client.auth.getUser();

    if (error) {
      console.warn('No hay sesión activa:', error.message);
      return null;
    }

    return data?.user || null;
  };

  const renderAccountState = async () => {
    const authStatus = document.querySelector('#auth-status');
    const accountCard = document.querySelector('#account-card');
    const authMessage = document.querySelector('#auth-message');
    const userEmail = document.querySelector('#user-email');
    const profileMeta = document.querySelector('#profile-meta');
    const userButton = document.querySelector('#user-button');
    const logoutButton = document.querySelector('#logout-button');

    if (!authStatus && !accountCard) {
      return;
    }

    const client = getClient();

    if (!client || !isSetupReady()) {
      if (authMessage) {
        authMessage.textContent = 'Configura Supabase en supabase-config.js para activar cuentas.';
      }

      if (authStatus) {
        authStatus.innerHTML = `
          <button class="auth-button secondary" type="button" data-auth-action="login">Iniciar sesión</button>
          <button class="auth-button primary" type="button" data-auth-action="register">Registrarse</button>
        `;
      }

      return;
    }

    const user = await getCurrentUser();

    if (!user) {
      if (authStatus) {
        authStatus.innerHTML = `
          <button class="auth-button secondary" type="button" data-auth-action="login">Iniciar sesión</button>
          <button class="auth-button primary" type="button" data-auth-action="register">Registrarse</button>
        `;
      }

      if (accountCard) {
        accountCard.classList.add('account-card--guest');
      }

      if (userEmail) {
        userEmail.textContent = 'No has iniciado sesión';
      }

      if (profileMeta) {
        profileMeta.textContent = 'Accede con tu cuenta para guardar progreso.';
      }

      if (userButton) {
        userButton.hidden = true;
      }

      if (logoutButton) {
        logoutButton.hidden = true;
      }

      if (authMessage) {
        authMessage.textContent = 'Necesitas iniciar sesión para guardar tu avance.';
      }

      return;
    }

    if (authStatus) {
      authStatus.innerHTML = `
        <div class="user-pill">
          <span class="user-dot"></span>
          <span>${user.email}</span>
        </div>
      `;
    }

    if (accountCard) {
      accountCard.classList.remove('account-card--guest');
    }

    if (userEmail) {
      userEmail.textContent = user.email;
    }

    if (profileMeta) {
      profileMeta.textContent = 'Tu progreso se guarda en tu cuenta de VIDEON.';
    }

    if (userButton) {
      userButton.hidden = false;
      userButton.textContent = user.email;
    }

    if (logoutButton) {
      logoutButton.hidden = false;
    }

    if (authMessage) {
      authMessage.textContent = 'Sesión activa. Tu progreso se sincroniza automáticamente.';
    }
  };

  const openAuthModal = (mode = 'login') => {
    const modal = document.querySelector('#auth-modal');

    if (!modal) {
      return;
    }

    const title = modal.querySelector('#auth-modal-title');
    const submitButton = modal.querySelector('#auth-submit');
    const toggleText = modal.querySelector('#auth-toggle-text');
    const form = modal.querySelector('#auth-form');
    const modeInput = modal.querySelector('#auth-mode');

    if (title) {
      title.textContent = mode === 'login' ? 'Iniciar sesión' : 'Crear cuenta';
    }

    if (submitButton) {
      submitButton.textContent = mode === 'login' ? 'Entrar' : 'Registrarme';
    }

    if (toggleText) {
      toggleText.textContent = mode === 'login' ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?';
    }

    if (modeInput) {
      modeInput.value = mode;
    }

    if (form) {
      form.dataset.mode = mode;
    }

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
  };

  const closeAuthModal = () => {
    const modal = document.querySelector('#auth-modal');

    if (!modal) {
      return;
    }

    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
  };

  const bindAuthButtons = () => {
    document.body.addEventListener('click', async (event) => {
      const target = event.target.closest('[data-auth-action]');

      if (target) {
        const action = target.getAttribute('data-auth-action');
        if (action === 'login') {
          openAuthModal('login');
        }
        if (action === 'register') {
          openAuthModal('register');
        }
      }

      if (event.target.closest('[data-auth-close]')) {
        closeAuthModal();
      }

      if (event.target.closest('#logout-button')) {
        await signOut();
      }
    });

    const form = document.querySelector('#auth-form');
    if (form) {
      form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const email = form.querySelector('#auth-email').value.trim();
        const password = form.querySelector('#auth-password').value.trim();
        const mode = form.dataset.mode || 'login';

        if (!email || !password) {
          alert('Debes introducir correo y contraseña.');
          return;
        }

        if (mode === 'register') {
          await signUp({ email, password });
        } else {
          await signIn({ email, password });
        }
      });
    }

    const toggle = document.querySelector('#auth-toggle');
    if (toggle) {
      toggle.addEventListener('click', () => {
        const form = document.querySelector('#auth-form');
        const currentMode = form?.dataset.mode === 'register' ? 'login' : 'register';
        openAuthModal(currentMode);
      });
    }

    const modal = document.querySelector('#auth-modal');
    if (modal) {
      modal.addEventListener('click', (event) => {
        if (event.target === modal) {
          closeAuthModal();
        }
      });
    }
  };

  const signUp = async ({ email, password }) => {
    const client = getClient();

    if (!client || !isSetupReady()) {
      alert('Primero configura Supabase en supabase-config.js.');
      return;
    }

    const { data, error } = await client.auth.signUp({ email, password });

    if (error) {
      alert(error.message);
      return;
    }

    if (data?.user) {
      alert('Cuenta creada correctamente. Revisa tu correo si Supabase lo requiere.');
      closeAuthModal();
      await renderAccountState();
    }
  };

  const signIn = async ({ email, password }) => {
    const client = getClient();

    if (!client || !isSetupReady()) {
      alert('Primero configura Supabase en supabase-config.js.');
      return;
    }

    const { data, error } = await client.auth.signInWithPassword({ email, password });

    if (error) {
      alert(error.message);
      return;
    }

    if (data?.user) {
      alert('Sesión iniciada correctamente.');
      closeAuthModal();
      await renderAccountState();
      if (window.VIDEON_PROGRESS && typeof window.VIDEON_PROGRESS.loadContinueWatching === 'function') {
        await window.VIDEON_PROGRESS.loadContinueWatching();
      }
    }
  };

  const signOut = async () => {
    const client = getClient();

    if (!client) {
      return;
    }

    const { error } = await client.auth.signOut();

    if (error) {
      alert(error.message);
      return;
    }

    await renderAccountState();
    if (window.VIDEON_PROGRESS && typeof window.VIDEON_PROGRESS.loadContinueWatching === 'function') {
      await window.VIDEON_PROGRESS.loadContinueWatching();
    }
  };

  document.addEventListener('DOMContentLoaded', async () => {
    bindAuthButtons();
    await renderAccountState();
  });

  const api = {
    getClient,
    getCurrentUser,
    renderAccountState,
    signIn,
    signUp,
    signOut,
    openAuthModal,
    closeAuthModal,
    isSetupReady
  };

  window.VIDEON_AUTH = api;
  return api;
})();
