# Render Deployment Guide

## Quick Start

Follow these steps to deploy the Birthday Wishes app to Render:

### Step 1: Push Code to GitHub
```bash
git init
git add .
git commit -m "Initial commit: Birthday Wishes app"
git remote add origin https://github.com/YOUR_USERNAME/birthday-wishes.git
git push -u origin main
```

### Step 2: Deploy on Render
1. Go to [render.com](https://render.com)
2. Sign up or log in
3. Click **New +** > **Web Service**
4. Select **Deploy existing code from a repository**
5. Connect your GitHub account and select the `birthday-wishes` repository
6. Fill in the form:
   - **Name**: `birthday-wishes`
   - **Environment**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: Leave empty (static site)
   - **Publish Directory**: `dist`
7. Click **Create Web Service**

### Step 3: Configure Environment (Optional)
- No environment variables needed for this project
- Timer automatically fetches from worldtimeapi.org

## Key Points

✅ **What's Ready:**
- Vite build system configured
- React + React Router setup
- Countdown timer uses public API (no backend needed)
- All assets in `public/` folder will be deployed
- Static site mode enabled in render.yaml

✅ **Build Details:**
- Build command: `npm install && npm run build`
- Output folder: `dist/`
- Static files served directly by Render
- No server needed

✅ **Timer Accuracy:**
- Fetches server time from worldtimeapi.org
- Works on Render without backend
- Can't be cheated by changing system clock
- Falls back to local time if API unavailable

## Troubleshooting

### Build Fails
- Check all dependencies in package.json are included
- Ensure render.yaml is in root directory
- Verify no TypeScript errors: `npm run lint`

### Images Don't Load
- Ensure all images in `public/data/` are committed to GitHub
- Render will copy entire `public/` folder to deployment

### Countdown Shows Wrong Time
- Timer uses worldtimeapi.org for accuracy
- Check browser console for any API fetch errors
- Falls back to local time automatically if API fails

### Audio Files Not Playing
- Verify `speech.m4a`, `song 1.m4a`, `song 2.m4a` are in `public/data/`
- Check file names match exactly (case-sensitive on Linux servers)

## Deployment Status

After deployment, Render will:
1. Clone repository
2. Install dependencies
3. Build: `npm install && npm run build`
4. Create static site from `dist/` folder
5. Serve on unique URL

Your app will be live at: `https://birthday-wishes-xxx.onrender.com`

## Update After Deployment

To update after deployment:
```bash
git add .
git commit -m "Update message"
git push origin main
```

Render will automatically rebuild and redeploy!

## Performance Notes

- Build time: ~2-3 minutes
- Static site loads very fast
- Images optimized by Vite
- No cold start issues

---

**Need Help?** Check Render docs: https://render.com/docs
