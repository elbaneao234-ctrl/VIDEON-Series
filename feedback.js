(() => {
  const modalId = 'feedback-modal';

  const createModal = () => {
    if (document.getElementById(modalId)) {
      return document.getElementById(modalId);
    }

    const modal = document.createElement('div');
    modal.id = modalId;
    modal.className = 'auth-modal feedback-modal';
    modal.setAttribute('aria-hidden', 'true');
    modal.innerHTML = `
      <section class="auth-modal-content feedback-modal-content" role="dialog" aria-modal="true" aria-labelledby="feedback-title">
        <button class="close-modal" type="button" data-feedback-close aria-label="Cerrar informe">×</button>
        <p class="hero-subtitle">VIDEON · AYUDA</p>
        <h2 id="feedback-title">Enviar informe</h2>
        <p class="feedback-login-message" data-feedback-login-message hidden>
          Inicia sesión para enviar un informe.
          <button class="auth-toggle" type="button" data-auth-action="login" data-feedback-login>Iniciar sesión</button>
        </p>
        <form class="feedback-form" data-feedback-form>
          <fieldset data-feedback-fields>
            <label for="feedback-type">Tipo</label>
            <select id="feedback-type" name="type" required>
              <option value="error">Error</option>
              <option value="series_suggestion">Sugerencia de serie</option>
            </select>

            <label for="feedback-title-input">Título</label>
            <input id="feedback-title-input" name="title" type="text" minlength="3" maxlength="160" required>

            <label for="feedback-description">Descripción</label>
            <textarea id="feedback-description" name="description" minlength="10" maxlength="3000" rows="6" required></textarea>

            <label for="feedback-page-url">Página</label>
            <input id="feedback-page-url" name="page_url" type="url" readonly required>

            <button class="auth-button primary feedback-submit" type="submit">Enviar informe</button>
          </fieldset>
        </form>
        <p class="feedback-message" data-feedback-message role="status" aria-live="polite" hidden></p>
      </section>
    `;
    document.body.appendChild(modal);
    return modal;
  };

  const closeModal = (modal) => {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
  };

  const getSubmissionErrorMessage = (error) => {
    if (error?.code === '42501') {
      return 'Supabase rechazó el informe por permisos. Comprueba que la política RLS permita insertar informes propios.';
    }

    if (error?.code === '23514') {
      return 'El tipo de informe no es válido. Selecciona Error o Sugerencia de serie.';
    }

    if (error?.code === '23502') {
      return 'Falta un dato obligatorio. Revisa el título, la descripción y el tipo.';
    }

    if (error?.code === '42703' || error?.code === 'PGRST204' || error?.code === 'PGRST205') {
      return 'La tabla de informes no coincide con los campos esperados. Revisa la configuración de Supabase.';
    }

    if (!navigator.onLine || error instanceof TypeError) {
      return 'No se pudo conectar con Supabase. Comprueba tu conexión e inténtalo de nuevo.';
    }

    return 'No se pudo enviar el informe. Inténtalo de nuevo.';
  };

  const openModal = async (modal) => {
    const form = modal.querySelector('[data-feedback-form]');
    const fields = modal.querySelector('[data-feedback-fields]');
    const loginMessage = modal.querySelector('[data-feedback-login-message]');
    const message = modal.querySelector('[data-feedback-message]');
    const pageUrl = modal.querySelector('[name="page_url"]');

    form.reset();
    pageUrl.value = window.location.href;
    message.textContent = '';
    message.hidden = true;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    fields.disabled = true;
    loginMessage.hidden = true;
    message.textContent = 'Comprobando sesión…';
    message.hidden = false;

    const auth = window.VIDEON_AUTH;
    let user = null;

    try {
      user = auth ? await auth.getCurrentUser() : null;
    } catch {
      user = null;
    }

    if (!user) {
      fields.disabled = true;
      loginMessage.hidden = false;
      message.textContent = '';
      message.hidden = true;
      return;
    }

    fields.disabled = false;
    message.textContent = '';
    message.hidden = true;
    modal.querySelector('#feedback-type').focus();
  };

  const submitReport = async (event, modal) => {
    event.preventDefault();

    const form = event.currentTarget;
    const submitButton = form.querySelector('.feedback-submit');
    const message = modal.querySelector('[data-feedback-message]');
    const fields = modal.querySelector('[data-feedback-fields]');
    const auth = window.VIDEON_AUTH;
    const client = auth?.getClient();
    if (submitButton.disabled) {
      return;
    }

    submitButton.disabled = true;
    submitButton.textContent = 'Enviando…';
    message.textContent = '';
    message.hidden = true;

    try {
      const user = auth ? await auth.getCurrentUser() : null;

      if (!user) {
        fields.disabled = true;
        modal.querySelector('[data-feedback-login-message]').hidden = false;
        message.textContent = 'Inicia sesión para enviar un informe.';
        message.hidden = false;
        return;
      }

      if (!client || !form.reportValidity()) {
        if (!client) {
          message.textContent = 'No se pudo conectar con el servicio. Inténtalo de nuevo.';
          message.hidden = false;
        }
        return;
      }

      const formData = new FormData(form);
      const title = String(formData.get('title') || '').trim();
      const description = String(formData.get('description') || '').trim();

      if (title.length < 3 || title.length > 160) {
        message.textContent = 'El título debe tener entre 3 y 160 caracteres.';
        message.hidden = false;
        return;
      }

      if (description.length < 10 || description.length > 3000) {
        message.textContent = 'La descripción debe tener entre 10 y 3000 caracteres.';
        message.hidden = false;
        return;
      }

      const type = String(formData.get('type') || '');
      if (type !== 'error' && type !== 'series_suggestion') {
        message.textContent = 'Selecciona un tipo de informe válido.';
        message.hidden = false;
        return;
      }

      const payload = {
        user_id: user.id,
        type,
        title,
        description,
        page_url: window.location.href
      };

      const { error } = await client.from('feedback_reports').insert(payload);

      if (error) {
        throw error;
      }

      form.reset();
      form.elements.page_url.value = window.location.href;
      message.textContent = 'Informe enviado correctamente. Gracias por ayudarnos.';
      message.classList.remove('feedback-message--error');
      message.hidden = false;
    } catch (error) {
      console.error('[VIDEON FEEDBACK] Error al insertar informe:', {
        code: error?.code || null,
        message: error?.message || 'Error de conexión o respuesta inesperada'
      });
      message.textContent = getSubmissionErrorMessage(error);
      message.classList.add('feedback-message--error');
      message.hidden = false;
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = 'Enviar informe';
    }
  };

  document.addEventListener('DOMContentLoaded', () => {
    const modal = createModal();

    document.body.addEventListener('click', async (event) => {
      if (event.target.closest('[data-feedback-open]')) {
        await openModal(modal);
      }

      if (event.target.closest('[data-feedback-close]')) {
        closeModal(modal);
      }

      if (event.target.closest('[data-feedback-login]')) {
        closeModal(modal);
      }

      if (event.target === modal) {
        closeModal(modal);
      }
    });

    modal.querySelector('[data-feedback-form]').addEventListener('submit', (event) => {
      submitReport(event, modal);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && modal.classList.contains('is-open')) {
        closeModal(modal);
      }
    });
  });
})();
