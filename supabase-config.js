window.VIDEON_CONFIG = {
  supabaseUrl: 'https://xsirzfqcfqkvyrvdzajm.supabase.co',
  supabaseAnonKey: 'sb_publishable_9GwNFMhZaCW1vEuc4syKlg_AVYmrnuW'
};

window.VIDEON_SUPABASE = window.VIDEON_SUPABASE || {};
window.VIDEON_SUPABASE.client = window.supabase
  ? window.supabase.createClient(
      window.VIDEON_CONFIG.supabaseUrl,
      window.VIDEON_CONFIG.supabaseAnonKey,
      {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
          detectSessionInUrl: true
        }
      }
    )
  : null;
