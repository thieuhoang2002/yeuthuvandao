# 🚀 Quick Start Guide

## 📦 Cài Đặt Nhanh (5 phút)

### Bước 1: Prerequisites
Đảm bảo bạn đã cài:
- [Node.js](https://nodejs.org/) (v18 hoặc mới hơn)
- npm (đi kèm Node.js)

Kiểm tra version:
```bash
node --version  # Nên >= v18
npm --version   # Nên >= v9
```

### Bước 2: Cài Dependencies
```bash
cd yeuthuvandao
npm install
```

### Bước 3: Chạy Development Server
```bash
npm run dev
```

Mở trình duyệt: **http://localhost:5173**

🎉 **Done!** Website đã chạy!

---

## 🎯 Commands Cơ Bản

```bash
# Development (có hot reload)
npm run dev

# Build cho production
npm run build

# Preview production build
npm run preview

# Kiểm tra code
npm run lint
```

---

## 📁 Cấu Trúc Quan Trọng

```
yeuthuvandao/
├── src/
│   ├── App.jsx          ← Main component
│   ├── data.js          ← Dữ liệu câu hỏi (EDIT HERE)
│   ├── components/      ← UI components
│   ├── hooks/           ← Custom React hooks
│   └── utils/           ← Helper functions
├── index.html           ← Entry HTML
├── vite.config.js       ← Build config
└── tailwind.config.js   ← Style config
```

---

## ✏️ Chỉnh Sửa Dữ Liệu

### Thêm câu hỏi mới
Mở `src/data.js`:

```javascript
export const qaData = [
  // ... existing data
  { 
    stt: 56, 
    question: "Câu hỏi mới của bạn?", 
    answer: "Đáp án" 
  },
];
```

Lưu file → Website tự động cập nhật! ⚡

---

## 🎨 Tùy Chỉnh Giao Diện

### Đổi màu gradient
Mở `src/index.css`:

```css
@layer base {
  body {
    /* Đổi màu tại đây */
    @apply bg-gradient-to-br from-purple-400 via-pink-500 to-red-500;
  }
}
```

**Màu gợi ý:**
- Xanh dương: `from-blue-400 via-cyan-500 to-teal-500`
- Tím: `from-violet-400 via-purple-500 to-fuchsia-500`
- Cam: `from-orange-400 via-red-500 to-pink-500`

### Đổi tiêu đề
Mở `src/App.jsx`, tìm:

```jsx
<h1 className="...">
  🎮 Đáp Án Bàn Đào  {/* Đổi text này */}
</h1>
```

---

## 🚀 Deploy Lên Internet

### Vercel (Khuyến nghị - Miễn phí)

1. Tạo tài khoản tại [vercel.com](https://vercel.com)
2. Import project từ GitHub
3. Vercel tự động deploy!

**Hoặc dùng CLI:**
```bash
npm i -g vercel
vercel --prod
```

### Netlify (Cũng miễn phí)

1. Build project:
```bash
npm run build
```

2. Kéo thả folder `dist` vào [app.netlify.com/drop](https://app.netlify.com/drop)

---

## ❓ Troubleshooting

### Port 5173 đang sử dụng
```bash
# Vite tự động dùng port khác (5174, 5175...)
# Hoặc kill process:
npx kill-port 5173
```

### npm install bị lỗi
```bash
# Xóa và cài lại
rm -rf node_modules package-lock.json
npm install
```

### Website không hiển thị đúng
```bash
# Clear cache và rebuild
npm run build
npm run preview
```

### Lỗi Tailwind CSS
```bash
# Reinstall Tailwind
npm uninstall tailwindcss
npm install -D tailwindcss@3 postcss autoprefixer
```

---

## 📚 Tài Liệu Chi Tiết

- [README_NEW.md](./README_NEW.md) - Hướng dẫn đầy đủ
- [DEPLOY.md](./DEPLOY.md) - Deploy chi tiết
- [FEATURES.md](./FEATURES.md) - Tính năng mở rộng
- [CHECKLIST.md](./CHECKLIST.md) - Production checklist

---

## 💡 Tips

### Phím tắt trong Dev
- `r` + Enter → Restart server
- `u` + Enter → Show server URL
- `o` + Enter → Mở browser
- `q` + Enter → Quit server
- `h` + Enter → Show help

### Best Practices
✅ Luôn test trước khi deploy
✅ Backup dữ liệu quan trọng
✅ Git commit thường xuyên
✅ Keep dependencies updated

---

## 🆘 Cần Giúp?

**Lỗi thường gặp:**
1. "Cannot find module" → `npm install`
2. Port conflict → Vite tự đổi port
3. Build error → Check `vite.config.js`
4. CSS không load → Check `tailwind.config.js`

**Resources:**
- [Vite Docs](https://vite.dev)
- [React Docs](https://react.dev)
- [Tailwind Docs](https://tailwindcss.com)

---

## ✅ Checklist Nhanh

- [ ] Node.js đã cài (v18+)
- [ ] `npm install` chạy thành công
- [ ] `npm run dev` mở được website
- [ ] Dữ liệu hiển thị đúng
- [ ] Search hoạt động
- [ ] Responsive trên mobile

**Nếu tất cả ✅ → Bạn đã sẵn sàng! 🎉**

---

**Happy Coding! 🚀**

Made with ❤️ by THIEUHOANG deptrai S27
