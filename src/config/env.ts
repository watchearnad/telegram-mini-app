// Environment configuration with validation
export const config = {
  // Frontend-safe variables (prefixed with VITE_)
  supabase: {
    url: import.meta.env.VITE_SUPABASE_URL || 'https://eydtezqkgmubhuzfslwa.supabase.co',
    anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5ZHRlenFrZ211Ymh1emZzbHdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcwOTY0OTksImV4cCI6MjA3MjY3MjQ5OX0.7lKt_pH5QGOqTv6pJZg7IPkjLSVHdSootai6_3qHqMA',
  },
  api: {
    baseUrl: import.meta.env.VITE_API_URL || 'http://localhost:3001/api',
  },
  app: {
    isDevelopment: import.meta.env.DEV,
    isProduction: import.meta.env.PROD,
  }
};

// Debug: Log all environment variables
console.log('🔍 Environment Variables Debug:');
console.log('VITE_SUPABASE_URL:', import.meta.env.VITE_SUPABASE_URL);
console.log('VITE_SUPABASE_ANON_KEY:', import.meta.env.VITE_SUPABASE_ANON_KEY ? 'SET' : 'NOT SET');
console.log('VITE_API_URL:', import.meta.env.VITE_API_URL);
