// Environment configuration with validation
export const config = {
  // Frontend-safe variables (prefixed with VITE_)
  supabase: {
    url: import.meta.env.VITE_SUPABASE_URL,
    anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
  },
  api: {
    baseUrl: import.meta.env.VITE_API_URL || 'http://localhost:3001/api',
  },
  app: {
    isDevelopment: import.meta.env.DEV,
    isProduction: import.meta.env.PROD,
  }
};

// Validate required environment variables
const requiredEnvVars = [
  'VITE_SUPABASE_URL',
  'VITE_SUPABASE_ANON_KEY',
];

const missingEnvVars = requiredEnvVars.filter(
  envVar => !import.meta.env[envVar]
);

if (missingEnvVars.length > 0) {
  console.error('❌ Missing required environment variables:', missingEnvVars);
  console.error('📝 Please check your .env file and ensure all required variables are set.');
}

// Never expose these in frontend!
// SUPABASE_SERVICE_ROLE_KEY - Backend only
// ADMIN_KEY - Backend only