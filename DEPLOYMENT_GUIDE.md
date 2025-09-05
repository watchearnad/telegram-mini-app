# 🚀 Deployment Guide - Vercel

## 📋 Step-by-Step Deployment

### 1. **Persiapan Sebelum Deploy**

Pastikan file `.env` sudah diisi dengan Supabase keys:
```env
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiI...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiI...
ADMIN_KEY=your_strong_password_123
```

### 2. **Deploy ke Vercel**

#### Option A: Via Vercel CLI (Recommended)
```bash
# Method 1: Global install
npm install -g vercel
vercel login
vercel

# Method 2: Using npx (if global install fails)
npx vercel login
npx vercel

# Method 3: Alternative login
vercel login

# Deploy project
vercel

# Set environment variables
vercel env add VITE_SUPABASE_URL
vercel env add VITE_SUPABASE_ANON_KEY
vercel env add VITE_API_URL

# Deploy to production
vercel --prod
```

#### Option B: Via GitHub + Vercel Dashboard
1. Push code ke GitHub repository
2. Connect repository di [vercel.com](https://vercel.com)
3. Add environment variables di dashboard
4. Deploy otomatis

### 3. **Set Environment Variables di Vercel**

Di Vercel Dashboard → Project → Settings → Environment Variables:

```
VITE_SUPABASE_URL = https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiI...
VITE_API_URL = https://your-backend.railway.app/api
```

### 4. **Deploy Backend (Railway)**

Backend perlu di-deploy terpisah:

```bash
# Install Railway CLI
npm i -g @railway/cli

# Login & deploy backend
railway login
railway init
railway up

# Set backend environment variables
railway variables set SUPABASE_SERVICE_ROLE_KEY=xxx
railway variables set ADMIN_KEY=xxx
railway variables set VITE_SUPABASE_URL=xxx
```

### 5. **Update API URL**

Setelah backend deployed, update `VITE_API_URL` di Vercel:
```
VITE_API_URL = https://your-backend.railway.app/api
```

### 6. **Test Deployment**

1. **Frontend**: `https://your-app.vercel.app`
2. **Backend**: `https://your-backend.railway.app/api/health`
3. **Database**: Check Supabase dashboard

### 7. **Setup Bot Telegram**

Setelah deploy berhasil, update bot Telegram:

```javascript
const keyboard = {
  inline_keyboard: [[{
    text: '🚀 Open Rewards App',
    web_app: { url: 'https://your-app.vercel.app' }
  }]]
};
```

## 🔧 Troubleshooting

### Build Error:
```bash
# Clear cache dan rebuild
rm -rf node_modules dist
npm install
npm run build
```

### Environment Variables Error:
- Pastikan semua variables sudah diset di Vercel
- Check spelling dan format
- Redeploy setelah update variables

### CORS Error:
- Update `VITE_API_URL` dengan URL backend yang benar
- Pastikan backend sudah running

## ✅ Checklist Deployment

- [ ] Supabase project created & keys copied
- [ ] Frontend deployed to Vercel
- [ ] Backend deployed to Railway/Heroku
- [ ] Environment variables set correctly
- [ ] API endpoints working
- [ ] Telegram bot updated with new URL
- [ ] Test all features (ads, referral, withdrawal)

## 🎉 Selesai!

Setelah semua langkah selesai, mini-app Anda siap digunakan di Telegram!

**URLs:**
- Frontend: `https://your-app.vercel.app`
- Backend: `https://your-backend.railway.app`
- Admin: `https://your-backend.railway.app/admin`