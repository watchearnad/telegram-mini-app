# 🚀 Setup Guide - Telegram Mini App

## 📋 Environment Variables Setup

### 1. **Local Development (.env file)**
File `.env` sudah dibuat di root project. Anda perlu mengisi nilai-nilai berikut:

```env
# Supabase Configuration
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# API Configuration
VITE_API_URL=http://localhost:3001/api
NODE_ENV=development

# Admin Configuration
ADMIN_KEY=your_super_secret_admin_key_here

# Server Configuration
PORT=3001
```

### 2. **Cara Mendapatkan Supabase Keys:**

#### Step 1: Buat Project Supabase
1. Buka [supabase.com](https://supabase.com)
2. Sign up/Login
3. Klik "New Project"
4. Isi nama project dan password database
5. Tunggu project selesai dibuat

#### Step 2: Ambil Keys
1. Di dashboard Supabase, klik "Settings" → "API"
2. Copy nilai berikut:
   - **Project URL** → `VITE_SUPABASE_URL`
   - **anon public** → `VITE_SUPABASE_ANON_KEY`  
   - **service_role** → `SUPABASE_SERVICE_ROLE_KEY`

#### Step 3: Update .env File
Ganti nilai di file `.env` dengan keys yang sudah dicopy.

### 3. **Production Environment Variables:**

#### Untuk Vercel:
```bash
# Install Vercel CLI
npm i -g vercel

# Set environment variables
vercel env add VITE_SUPABASE_URL
vercel env add VITE_SUPABASE_ANON_KEY
vercel env add SUPABASE_SERVICE_ROLE_KEY
vercel env add VITE_API_URL
vercel env add ADMIN_KEY
```

#### Untuk Netlify:
1. Buka Netlify dashboard
2. Pilih site Anda
3. Go to "Site settings" → "Environment variables"
4. Add semua variables dari `.env`

#### Untuk Railway/Heroku:
```bash
# Railway
railway variables set VITE_SUPABASE_URL=your_value
railway variables set VITE_SUPABASE_ANON_KEY=your_value
# ... dst

# Heroku
heroku config:set VITE_SUPABASE_URL=your_value
heroku config:set VITE_SUPABASE_ANON_KEY=your_value
# ... dst
```

## 🗄️ Database Setup

Database akan otomatis terbuat saat pertama kali aplikasi dijalankan berkat migration files yang sudah dibuat.

## 🚀 Menjalankan Aplikasi

### Development:
```bash
# Install dependencies
npm install

# Start backend server
node server/index.js

# Start frontend (terminal baru)
npm run dev
```

### Production URLs:
- Frontend: `https://your-app.vercel.app`
- Backend: `https://your-api.railway.app`

Update `VITE_API_URL` di production dengan URL backend yang sudah di-deploy.

## 🔧 Testing Environment

Untuk test apakah environment sudah benar:

1. **Test Database Connection:**
   ```bash
   curl http://localhost:3001/api/health
   ```

2. **Test Frontend:**
   Buka `http://localhost:5173` dan cek console browser

## 🔐 Security Notes

- **ADMIN_KEY**: Buat password yang kuat untuk admin access
- **SERVICE_ROLE_KEY**: Jangan expose di frontend, hanya untuk backend
- **ANON_KEY**: Aman untuk frontend, sudah dibatasi RLS policies

## 📱 Bot Telegram Integration

Setelah deploy, update bot Telegram dengan URL production:

```javascript
const keyboard = {
  inline_keyboard: [[{
    text: '🚀 Open Rewards App',
    web_app: { url: 'https://your-deployed-url.com' }
  }]]
};
```

## ❓ Troubleshooting

### Error: "Failed to connect to database"
- Cek SUPABASE_URL dan keys sudah benar
- Pastikan Supabase project sudah aktif

### Error: "CORS error"
- Update VITE_API_URL dengan URL yang benar
- Pastikan backend sudah running

### Error: "Unauthorized"
- Cek ADMIN_KEY sudah diset
- Pastikan Telegram user verification bekerja