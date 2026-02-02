# 🚀 Hướng Dẫn Deploy Nhanh

## 📋 Trước khi Deploy

1. Build project:
```bash
npm run build
```

2. Kiểm tra build locally:
```bash
npm run preview
```

## 🌐 Deploy lên Vercel (Khuyến nghị)

### Cách 1: Deploy qua CLI
```bash
# Cài Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Cách 2: Deploy qua GitHub
1. Push code lên GitHub
2. Import project tại https://vercel.com/new
3. Vercel tự động detect Vite và deploy

**Build Settings:**
- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`

## 🔷 Deploy lên Netlify

### Cách 1: Drag & Drop
1. Build project: `npm run build`
2. Kéo thả folder `dist` vào https://app.netlify.com/drop

### Cách 2: Netlify CLI
```bash
# Cài Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

**Build Settings:**
- Build Command: `npm run build`
- Publish Directory: `dist`

## 📄 Deploy lên GitHub Pages

1. Install gh-pages:
```bash
npm install -D gh-pages
```

2. Thêm vào `package.json`:
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

3. Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/yeuthuvandao/', // Tên repository
  // ... rest of config
})
```

4. Deploy:
```bash
npm run deploy
```

## 🐳 Deploy với Docker

1. Tạo `Dockerfile`:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 5173
CMD ["npm", "run", "preview"]
```

2. Build & Run:
```bash
docker build -t yeuthuvandao .
docker run -p 5173:5173 yeuthuvandao
```

## ⚙️ Cấu hình cho các Platform

### Vercel (vercel.json)
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install"
}
```

### Netlify (netlify.toml)
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## 🎯 Performance Tips

### 1. Enable Compression
Vercel & Netlify tự động enable gzip/brotli

### 2. CDN
Vercel & Netlify có global CDN built-in

### 3. Cache Headers
Automatic với static assets trong `dist/`

### 4. Analytics
```bash
# Vercel Analytics
npm i @vercel/analytics

# Netlify Analytics
# Enable trong dashboard
```

## 📊 Monitoring

### Google Analytics
Thêm vào `index.html`:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔒 Environment Variables

Tạo file `.env.production`:
```
VITE_API_URL=https://api.example.com
VITE_APP_NAME=Đáp Án Bàn Đào
```

Access trong code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

## ✅ Checklist trước khi Deploy

- [ ] Test production build locally
- [ ] Check responsive design
- [ ] Test search functionality
- [ ] Verify all links work
- [ ] Check console for errors
- [ ] Test on multiple browsers
- [ ] Optimize images (if any)
- [ ] Setup analytics
- [ ] Configure custom domain (optional)

## 🎉 Done!

Website của bạn đã live! 🚀

**Live URLs:**
- Vercel: `https://yeuthuvandao.vercel.app`
- Netlify: `https://yeuthuvandao.netlify.app`
- GitHub Pages: `https://username.github.io/yeuthuvandao`

---

**Need help?** Check documentation:
- Vite: https://vite.dev
- Vercel: https://vercel.com/docs
- Netlify: https://docs.netlify.com
