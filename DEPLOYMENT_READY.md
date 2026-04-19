# Pre-Deployment Checklist for Render

## ✅ Code Quality
- [ ] No console errors: `npm run lint`
- [ ] All pages accessible via navigation
- [ ] Countdown timer displays correctly
- [ ] Photos load from `/public/data/`
- [ ] Audio files play: speech.m4a, song 1.m4a, song 2.m4a
- [ ] Video plays: video.mp4
- [ ] Locked pages show lock message before countdown ends
- [ ] Crackers animation triggers after countdown

## ✅ Assets Included
- [ ] 44 images in `public/data/img (X).jpg` (excluding img (25).jpg)
- [ ] `public/data/speech.m4a` exists
- [ ] `public/data/song 1.m4a` exists
- [ ] `public/data/song 2.m4a` exists
- [ ] `public/data/video.mp4` exists
- [ ] All files committed to git

## ✅ Configuration Files
- [ ] `render.yaml` properly configured with:
  - buildCommand: `npm install && npm run build`
  - staticSite: `dist`
  - autoDeployOnPush: `true`
- [ ] `package.json` has all dependencies
- [ ] `vite.config.js` has React plugin
- [ ] `.gitignore` excludes node_modules and dist
- [ ] `public/` folder in git

## ✅ Countdown Settings
- [ ] Target date: April 20, 2026
- [ ] Target time: 00:00:00 (midnight UTC)
- [ ] Timer uses worldtimeapi.org for accuracy
- [ ] Reveal text: "Priyadharshini" and "enn aval"
- [ ] Crackers animation enabled

## ✅ Testing Locally
```bash
# Test build
npm run build

# Test preview
npm run preview

# Verify dist folder created
ls -la dist/

# Check dist contains index.html
cat dist/index.html
```

## ✅ Git Repository
- [ ] Repository initialized: `git init`
- [ ] Remote added: `git remote add origin https://github.com/YOUR_USERNAME/birthday-wishes.git`
- [ ] All files committed: `git add . && git commit -m "Ready for deployment"`
- [ ] Pushed to main branch: `git push -u origin main`
- [ ] Branch name is `main` (not master)

## ✅ Render Account
- [ ] Render.com account created
- [ ] GitHub connected to Render
- [ ] Render.yaml file at project root

## Deployment Steps

1. **Build locally** to verify:
```bash
npm run build
```

2. **Push to GitHub**:
```bash
git push origin main
```

3. **Deploy on Render**:
   - Visit render.com
   - New Web Service
   - Connect GitHub repository
   - Click "Create Web Service"

4. **Monitor deployment**:
   - Render shows real-time build logs
   - Build takes 2-3 minutes
   - You'll get a live URL when ready

## Expected Result

✅ App live at: `https://birthday-wishes-XXXX.onrender.com`
✅ All images load
✅ Audio plays
✅ Video plays
✅ Countdown works with server time
✅ Pages locked until April 20

## Troubleshooting on Render

If deployment fails, check:
1. **Build logs** in Render dashboard
2. **Package.json** has all dependencies
3. **All files committed** to git (not just locally)
4. **No TypeScript errors**: `npm run lint`
5. **dist folder builds**: `npm run build`

---

Once deployed, Render automatically redeploys on each `git push` to main!
