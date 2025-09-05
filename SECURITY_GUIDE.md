# 🔐 Security Guide - Environment Variables

## ⚠️ PENTING: Keamanan Environment Variables

### ❌ **JANGAN PERNAH:**
- Commit file `.env` ke Git/GitHub
- Share file `.env` di chat/email
- Upload `.env` ke hosting manual
- Hardcode secrets di source code

### ✅ **YANG AMAN:**

## 1. **Local Development**
```bash
# File .env di root project (sudah di .gitignore)
VITE_SUPABASE_URL=https://xxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGci...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGci...
ADMIN_KEY=password_super_kuat_123
```

## 2. **Production Deployment**

### **Vercel (Recommended):**
```bash
# Install Vercel CLI
npm i -g vercel

# Set environment variables securely
vercel env add VITE_SUPABASE_URL
vercel env add VITE_SUPABASE_ANON_KEY
vercel env add SUPABASE_SERVICE_ROLE_KEY
vercel env add ADMIN_KEY

# Deploy
vercel --prod
```

### **Netlify:**
1. Build project: `npm run build`
2. Drag & drop folder `dist` ke Netlify
3. Site Settings → Environment Variables
4. Add semua variables satu per satu

### **Railway (Backend):**
```bash
# Install Railway CLI
npm i -g @railway/cli

# Login & deploy
railway login
railway link
railway variables set SUPABASE_SERVICE_ROLE_KEY=xxx
railway variables set ADMIN_KEY=xxx
railway up
```

## 3. **Environment Separation**

### **Frontend (.env variables dengan VITE_):**
```env
VITE_SUPABASE_URL=xxx          # ✅ Safe for frontend
VITE_SUPABASE_ANON_KEY=xxx     # ✅ Safe for frontend  
VITE_API_URL=xxx               # ✅ Safe for frontend
```

### **Backend (Server-only variables):**
```env
SUPABASE_SERVICE_ROLE_KEY=xxx  # ❌ NEVER expose to frontend
ADMIN_KEY=xxx                  # ❌ NEVER expose to frontend
```

## 4. **Security Best Practices**

### **Strong Admin Key:**
```bash
# Generate strong password
openssl rand -base64 32
# atau gunakan: https://passwordsgenerator.net/
```

### **Supabase Security:**
- Enable Row Level Security (RLS) ✅ Already configured
- Use anon key for frontend ✅ 
- Use service_role key only for backend ✅
- Never expose service_role key to client ✅

### **Production URLs:**
```env
# Frontend
VITE_API_URL=https://your-backend.railway.app/api

# Backend  
SUPABASE_URL=https://xxx.supabase.co
```

## 5. **Verification Checklist**

### ✅ **Before Deploy:**
- [ ] `.env` file in `.gitignore`
- [ ] No secrets in source code
- [ ] Strong admin password
- [ ] Separate frontend/backend variables
- [ ] Production URLs configured

### ✅ **After Deploy:**
- [ ] Test API endpoints
- [ ] Verify database connection
- [ ] Test Telegram integration
- [ ] Check admin access
- [ ] Monitor error logs

## 6. **Emergency Response**

### **If Secrets Leaked:**
1. **Immediately** regenerate all keys
2. Update Supabase project keys
3. Change admin password
4. Redeploy with new secrets
5. Check access logs

### **Supabase Key Rotation:**
1. Dashboard → Settings → API
2. Click "Reset" on compromised key
3. Update all deployments
4. Test all functionality

## 📞 **Need Help?**
- Supabase docs: https://supabase.com/docs
- Vercel docs: https://vercel.com/docs
- Railway docs: https://docs.railway.app

**Remember: Security is not optional! 🔒**