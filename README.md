# 🚀 Telegram Mini-App with Ad Reward System

A modern Telegram mini-app built with React, TypeScript, and Tailwind CSS that allows users to earn cryptocurrency by watching advertisements and completing tasks.

## ✨ Features

- **Watch Ads**: Earn $0.003 per 16-second advertisement
- **Task System**: Complete follow tasks for additional rewards
- **Daily Lucky Draw**: Win random rewards up to $0.020
- **Referral Program**: Get 10% commission from friends' earnings
- **Withdrawal System**: Cash out to DANA or GoPay
- **Real-time Balance**: Server-side balance management
- **Admin Panel**: Manage withdrawals and users

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: Supabase (PostgreSQL)
- **Icons**: Lucide React
- **Build Tool**: Vite

## 🚀 Quick Start

### 1. Clone Repository
```bash
git clone https://github.com/yourusername/telegram-mini-app.git
cd telegram-mini-app
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
Copy `.env.example` to `.env` and fill in your Supabase credentials:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
ADMIN_KEY=your_admin_password
```

### 4. Start Development
```bash
# Start backend
node server/index.js

# Start frontend (new terminal)
npm run dev
```

## 📱 Telegram Bot Integration

Update your Telegram bot with the deployed URL:

```javascript
const keyboard = {
  inline_keyboard: [[{
    text: '🚀 Open Rewards App',
    web_app: { url: 'https://your-app.vercel.app' }
  }]]
};
```

## 🚀 Deployment

### Frontend (Vercel)
```bash
vercel login
vercel
vercel --prod
```

### Backend (Railway)
```bash
railway login
railway init
railway up
```

## 📊 Database Schema

- **users** - User profiles and balances
- **tasks** - Available tasks and rewards
- **user_tasks** - Completed tasks tracking
- **withdrawals** - Withdrawal requests
- **referrals** - Referral relationships
- **transactions** - Transaction history

## 🔐 Security Features

- Telegram user verification
- Server-side task validation
- Balance protection
- Admin authentication
- Transaction logging

## 📄 License

MIT License - see LICENSE file for details

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📞 Support

For support, email support@yourapp.com or join our Telegram group.