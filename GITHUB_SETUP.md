# 📚 GitHub Repository Setup Guide

## ⚠️ Git Not Available in WebContainer

Since Git is not available in this environment, you have these options:

## Option 1: Manual Upload (Easiest)

1. **Download Project Files:**
   - Use the download button in the file explorer
   - Or copy all files manually

2. **Create GitHub Repository:**
   - Go to [github.com](https://github.com)
   - Click "New" → "New repository"
   - Name: `telegram-mini-app`
   - **Don't** check "Add README" (we have one)
   - Click "Create repository"

3. **Upload Files:**
   - Click "uploading an existing file"
   - Drag and drop all project files
   - Commit message: "Initial commit"
   - Click "Commit changes"

## Option 2: Use GitHub Desktop

1. Download [GitHub Desktop](https://desktop.github.com/)
2. Clone your empty repository
3. Copy project files to the cloned folder
4. Commit and push via GitHub Desktop

## Option 3: Command Line (Local Machine)

```bash
# Initialize git repository
git init

# Add all files
git add .

# Initial commit
git commit -m "Initial commit: Telegram Mini-App with Ad Reward System"

# Add GitHub remote (replace USERNAME with your GitHub username)
git remote add origin https://github.com/USERNAME/telegram-mini-app.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## After Upload to GitHub:

### Connect to Vercel:
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import from GitHub
4. Select your `telegram-mini-app` repository
5. Add environment variables:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
   - `VITE_API_URL`
   - `ADMIN_KEY`
6. Deploy!

### Auto-Deploy Setup:
- Future commits will auto-deploy
- Environment variables persist
- Production URL will be stable

## 📁 Files to Include:

### 2. **Connect Local ke GitHub**
Setelah repository dibuat, GitHub akan menampilkan instruksi. Gunakan yang ini:

```bash
# Add remote origin (ganti dengan URL repository Anda)
git remote add origin https://github.com/USERNAME/telegram-mini-app.git

# Push ke GitHub
git branch -M main
git push -u origin main
```

### 3. **Contoh Lengkap**
```bash
# Jika belum init git (sudah dilakukan otomatis)
git init

# Add semua file (sudah dilakukan otomatis)
git add .

# Commit (sudah dilakukan otomatis)
git commit -m "Initial commit: Telegram Mini-App with Ad Reward System"

# Add remote (ganti USERNAME dengan username GitHub Anda)
git remote add origin https://github.com/USERNAME/telegram-mini-app.git

# Push ke GitHub
git branch -M main
git push -u origin main
```

### 4. **Jika Diminta Login**
```bash
# Set username dan email
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Atau gunakan GitHub CLI
gh auth login
```

### 5. **Setelah Push Berhasil**
1. Refresh halaman GitHub repository
2. Semua file akan muncul di repository
3. Copy URL repository untuk Vercel deployment

## 🔗 **Deploy ke Vercel dari GitHub**

### Option A: Via Vercel Dashboard
1. Buka [vercel.com](https://vercel.com)
2. Klik **"New Project"**
3. **"Import Git Repository"**
4. Pilih repository yang baru dibuat
5. Add environment variables
6. Deploy

### Option B: Via CLI
```bash
# Connect GitHub repo
vercel --prod

# Set environment variables
vercel env add VITE_SUPABASE_URL
vercel env add VITE_SUPABASE_ANON_KEY
vercel env add VITE_API_URL
```

## ✅ **Checklist**
- [ ] Repository dibuat di GitHub
- [ ] Local code di-push ke GitHub
- [ ] Repository terlihat di GitHub
- [ ] Siap untuk deployment ke Vercel
- [ ] Environment variables disiapkan

## 🚨 **Troubleshooting**

### Error: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/USERNAME/telegram-mini-app.git
```

### Error: "Permission denied"
- Pastikan username/password GitHub benar
- Atau gunakan Personal Access Token
- Atau setup SSH key

### Error: "Repository not found"
- Pastikan URL repository benar
- Pastikan repository sudah dibuat di GitHub
- Check spelling username dan repository name

Setelah push berhasil, Anda bisa deploy ke Vercel dengan mudah! 🎉