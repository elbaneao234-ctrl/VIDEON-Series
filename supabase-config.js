window.VIDEON_CONFIG = {
  supabaseUrl: 'https://TU_PROYECTO.supabase.co',
  supabaseAnonKey: 'TU_PUBLIC_ANON_KEY'
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
