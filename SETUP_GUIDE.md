# Birthday Wishes Website - Quick Start Guide 🎉

## ✅ Project Setup Complete!

Your birthday website is ready! Here's everything you need to know.

---

## 🚀 Getting Started

### 1. **Run Locally** (Development Mode)

```bash
cd e:\BD\birthday-wishes
npm run dev
```

This will start a development server at `http://localhost:5173` (or another port if 5173 is busy).

### 2. **Build for Production**

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### 3. **Preview Production Build**

```bash
npm run preview
```

This shows you how your site will look when deployed.

---

## 📸 How to Add Your Media

### Photos (Birthday Gallery)

1. Add your photos to: `public/data/photos/`
2. Supported formats: JPG, PNG, WEBP
3. The website will automatically detect and display them

**Example:**
```
public/data/photos/
├── memory1.jpg
├── sunset.png
├── beach.webp
└── us-together.jpg
```

### Videos

1. Add videos to: `public/data/videos/`
2. Supported formats: MP4, WebM, OGG
3. Keep file sizes reasonable (50MB - 200MB per video)

**Example:**
```
public/data/videos/
├── our-story.mp4
├── travel-vlog.webm
└── unforgettable-moments.mp4
```

### Voice Messages

1. Add voice files to: `public/data/voice/`
2. Supported formats: MP3, WAV, OGG, M4A
3. Recommended: 1-3 minutes each for better experience

**Example:**
```
public/data/voice/
├── message-from-my-heart.mp3
├── birthday-wish.wav
└── midnight-thoughts.m4a
```

---

## 🎨 Customizing the Website

### Change the Countdown Date

Edit `src/pages/CountdownPage.jsx` (line ~15):

```javascript
// Change this line:
const birthdayDate = new Date('2026-04-20T00:00:00').getTime();

// To your date (format: YYYY-MM-DDTHH:MM:SS)
const birthdayDate = new Date('2026-04-20T00:00:00').getTime();
```

### Change Colors

Edit `src/styles/global.css` (lines 2-10):

```css
:root {
  --primary-color: #ff1493;      /* Deep Pink */
  --secondary-color: #ff69b4;    /* Hot Pink */
  --accent-color: #00d4ff;       /* Cyan */
  /* ... more colors ... */
}
```

### Edit Personal Messages

- **My Wish Letter**: Edit `src/pages/MyWish.jsx`
- **Thank You Page**: Edit `src/pages/ThankYouPage.jsx`
- **Navigation**: Edit `src/components/Navigation.jsx`

---

## 🌐 Deployment Options

### Option 1: Deploy to Vercel ⭐ (Recommended - Easiest)

**Method A: Using Git**
1. Create a GitHub account if you don't have one
2. Push your project to GitHub
3. Go to https://vercel.com
4. Click "Import Project"
5. Select your GitHub repository
6. Click "Deploy"
7. Done! Your site is live!

**Method B: Using Vercel CLI**
```bash
npm install -g vercel
vercel
```

### Option 2: Deploy to Render

1. Go to https://render.com
2. Create an account
3. Click "New +" → "Web Service"
4. Connect your GitHub repository
5. Set these values:
   - **Name**: birthday-wishes
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm run preview`
   - **Publish Directory**: `dist`
6. Click "Create Web Service"
7. Wait 5-10 minutes for deployment

### Option 3: Deploy to GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
# "deploy": "npm run build && gh-pages -d dist"

npm run deploy
```

---

## 🔒 Security Features (Already Enabled)

✅ **Screenshot Prevention** - Blocks print screen
✅ **Screen Recording Prevention** - Detects recording attempts
✅ **Right-Click Disabled** - Context menu is blocked
✅ **Copy Protection** - Text can't be selected or copied
✅ **Developer Tools Locked** - F12/DevTools are disabled
✅ **Privacy Focused** - No external tracking or data collection

---

## 📋 Website Pages Overview

### 1. **Countdown Page** (Home)
- Live countdown timer to April 20, 2026
- Beautiful animations
- Shows "It's Your Birthday!" when date arrives

### 2. **Wish Board**
- Others can submit wishes and blessings
- Like button for each wish
- All wishes displayed in cards

### 3. **My Wish** (Personal Letter)
- Your personal handwritten-style letter
- Floating heart animations
- Heartfelt message to her

### 4. **Photos Gallery**
- Display 4-5+ photos
- Card layout with hover effects
- Click to view full size

### 5. **Videos Gallery**
- Video thumbnails with play button
- Duration displayed
- Placeholder for video player

### 6. **Voice Messages**
- Audio player for each message
- Play/pause controls
- Progress bar
- Sound wave animations

### 7. **Thank You Page**
- Gratitude message
- 8 reasons why you're thankful
- Beautiful animated layout
- Floating hearts background

---

## 🛠️ Troubleshooting

### "npm: command not found"
- Node.js is not installed
- Download from: https://nodejs.org/
- Choose LTS version
- Restart your terminal after installation

### Port 5173 is already in use
```bash
npm run dev -- --port 3000
```
(Or any other port number)

### Build fails
1. Delete `node_modules` folder
2. Delete `package-lock.json`
3. Run `npm install` again
4. Run `npm run build` again

### Media files not showing
- Check file paths are correct
- Ensure files are in: `public/data/[photos|videos|voice]/`
- Try refreshing the page
- Clear browser cache

---

## 📚 Project Files Reference

```
birthday-wishes/
├── src/
│   ├── pages/
│   │   ├── CountdownPage.jsx           ← Countdown timer
│   │   ├── WishBoard.jsx               ← Wish submissions
│   │   ├── MyWish.jsx                  ← Personal letter
│   │   ├── PhotosPage.jsx              ← Photo gallery
│   │   ├── VideosPage.jsx              ← Video gallery
│   │   ├── VoicePage.jsx               ← Voice messages
│   │   └── ThankYouPage.jsx            ← Thank you page
│   ├── components/
│   │   └── Navigation.jsx              ← Top navigation
│   ├── styles/
│   │   └── global.css                  ← All styles
│   ├── utils/
│   │   └── security.js                 ← Security functions
│   ├── App.jsx                         ← Main app
│   └── main.jsx                        ← Entry point
├── public/
│   └── data/
│       ├── photos/                     ← Add photos here
│       ├── videos/                     ← Add videos here
│       └── voice/                      ← Add voice here
├── vercel.json                         ← Vercel config
├── render.yaml                         ← Render config
├── package.json                        ← Dependencies
├── vite.config.js                      ← Vite config
└── README.md                           ← Documentation
```

---

## 🎯 Next Steps

1. **Add Media Files**
   - Prepare your photos, videos, and voice messages
   - Copy them to `public/data/` folders

2. **Customize Messages**
   - Edit personal wishes and thank you messages
   - Update colors if desired

3. **Test Locally**
   ```bash
   npm run dev
   ```

4. **Build & Deploy**
   - Choose deployment option (Vercel recommended)
   - Follow deployment steps above
   - Share the link with your girlfriend! 💝

---

## 💡 Tips for Best Experience

- Use high-quality photos (but compressed)
- Keep videos under 3 minutes
- Voice messages should be 30 seconds to 3 minutes
- Test on mobile devices before sharing
- Add heartfelt personal messages in edit pages
- Use the dark theme (already optimized)

---

## ❤️ Important Notes

- ✅ All data is stored locally in browser
- ✅ No personal information is collected
- ✅ No external tracking or analytics
- ✅ Website is fully private and secure
- ✅ Mobile responsive
- ✅ Works offline (after first load)

---

## 🆘 Need Help?

Check the main [README.md](./README.md) for more information.

---

**Set everything up your own way and surprise her with this beautiful website! 💕🎉**

Good luck! This is going to be unforgettable! ✨
