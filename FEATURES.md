# 🎯 Các Tính Năng Có Thể Mở Rộng

## 🚀 Ready to Use (Đã Tạo Sẵn)

### Custom Hooks
File: `src/hooks/useCustomHooks.js`

1. **useClickOutside** - Click outside detection
2. **useDebounce** - Debounce values
3. **useIsMobile** - Mobile detection
4. **useLocalStorage** - Persist data
5. **useScrollPosition** - Track scroll

### Utility Functions
File: `src/utils/helpers.js`

1. **debounce** - Function debouncing
2. **throttle** - Function throttling
3. **highlightText** - Highlight search terms
4. **normalizeVietnamese** - Better Vietnamese search
5. **isInViewport** - Lazy loading support

### Components
1. **LoadingSkeleton** - Loading state
2. **SearchBar** - Optimized search
3. **SuggestionList** - Smart suggestions
4. **QATable** - Performance table

## 💡 Có Thể Thêm

### 1. Dark Mode 🌙
```jsx
// Add to App.jsx
const [darkMode, setDarkMode] = useState(false);

// Toggle button
<button onClick={() => setDarkMode(!darkMode)}>
  {darkMode ? '☀️' : '🌙'}
</button>

// Update index.css
.dark {
  @apply bg-gradient-to-br from-slate-800 via-slate-900 to-black;
}
```

### 2. Export to Excel 📊
```bash
npm install xlsx
```
```jsx
import * as XLSX from 'xlsx';

const exportToExcel = () => {
  const ws = XLSX.utils.json_to_sheet(filteredData);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Questions");
  XLSX.writeFile(wb, "dap-an-ban-dao.xlsx");
};
```

### 3. Print Feature 🖨️
```jsx
const handlePrint = () => {
  window.print();
};

// Add print styles in index.css
@media print {
  body {
    background: white !important;
  }
  .no-print {
    display: none !important;
  }
}
```

### 4. Share to Social Media 📱
```jsx
const shareToFacebook = () => {
  const url = window.location.href;
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`);
};

const copyLink = () => {
  navigator.clipboard.writeText(window.location.href);
  alert('Link đã được copy!');
};
```

### 5. Advanced Search 🔍
```jsx
// Filter by category, difficulty, etc.
const [filters, setFilters] = useState({
  category: 'all',
  difficulty: 'all',
});

// Multi-field search
const advancedFilter = (item) => {
  return (
    item.question.includes(searchTerm) &&
    (filters.category === 'all' || item.category === filters.category)
  );
};
```

### 6. Favorites System ⭐
```jsx
import { useLocalStorage } from './hooks/useCustomHooks';

const [favorites, setFavorites] = useLocalStorage('favorites', []);

const toggleFavorite = (item) => {
  setFavorites(prev => 
    prev.includes(item.stt) 
      ? prev.filter(id => id !== item.stt)
      : [...prev, item.stt]
  );
};
```

### 7. Statistics Dashboard 📈
```jsx
const stats = useMemo(() => ({
  total: qaData.length,
  searched: filteredData.length,
  categories: [...new Set(qaData.map(q => q.category))].length,
}), [filteredData]);

<div className="glass p-4 rounded-xl">
  <h3>Thống kê</h3>
  <p>Tổng: {stats.total}</p>
  <p>Đang hiển thị: {stats.searched}</p>
</div>
```

### 8. Pagination 📄
```jsx
const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 20;

const paginatedData = useMemo(() => {
  const start = (currentPage - 1) * itemsPerPage;
  return filteredData.slice(start, start + itemsPerPage);
}, [filteredData, currentPage]);

const totalPages = Math.ceil(filteredData.length / itemsPerPage);
```

### 9. Virtual Scrolling 📜
```bash
npm install react-window
```
```jsx
import { FixedSizeList } from 'react-window';

<FixedSizeList
  height={600}
  itemCount={filteredData.length}
  itemSize={50}
  width="100%"
>
  {({ index, style }) => (
    <div style={style}>
      <TableRow item={filteredData[index]} />
    </div>
  )}
</FixedSizeList>
```

### 10. Voice Search 🎤
```jsx
const [isListening, setIsListening] = useState(false);

const startVoiceSearch = () => {
  const recognition = new webkitSpeechRecognition();
  recognition.lang = 'vi-VN';
  recognition.onresult = (event) => {
    setSearchValue(event.results[0][0].transcript);
  };
  recognition.start();
  setIsListening(true);
};
```

### 11. PWA (Progressive Web App) 📱
```bash
npm install vite-plugin-pwa -D
```
```javascript
// vite.config.js
import { VitePWA } from 'vite-plugin-pwa';

plugins: [
  VitePWA({
    registerType: 'autoUpdate',
    manifest: {
      name: 'Đáp Án Bàn Đào',
      short_name: 'Bàn Đào',
      theme_color: '#9333ea',
      icons: [/* ... */]
    }
  })
]
```

### 12. Keyboard Shortcuts ⌨️
```jsx
useEffect(() => {
  const handleKeyPress = (e) => {
    if (e.ctrlKey && e.key === 'k') {
      e.preventDefault();
      searchInputRef.current?.focus();
    }
    if (e.key === 'Escape') {
      setSearchValue('');
    }
  };

  window.addEventListener('keydown', handleKeyPress);
  return () => window.removeEventListener('keydown', handleKeyPress);
}, []);
```

### 13. Animations with Framer Motion 🎬
```bash
npm install framer-motion
```
```jsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  <QATable data={filteredData} />
</motion.div>
```

### 14. Analytics Integration 📊
```jsx
// Google Analytics
useEffect(() => {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'search', {
      search_term: searchValue
    });
  }
}, [searchValue]);
```

### 15. Error Boundary 🛡️
```jsx
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div className="glass p-8">Có lỗi xảy ra!</div>;
    }
    return this.props.children;
  }
}
```

## 🎨 UI Enhancements

### Smooth Scroll to Top Button
```jsx
const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setVisible(window.pageYOffset > 300);
    });
  }, []);

  return visible && (
    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      ↑
    </button>
  );
};
```

### Toast Notifications
```bash
npm install react-hot-toast
```
```jsx
import toast, { Toaster } from 'react-hot-toast';

<Toaster position="top-right" />

// Use
toast.success('Đã copy link!');
toast.error('Có lỗi xảy ra!');
```

## 📦 Recommended Packages

- `react-hot-toast` - Beautiful notifications
- `framer-motion` - Smooth animations
- `react-window` - Virtual scrolling
- `xlsx` - Excel export
- `react-icons` - Icon library
- `vite-plugin-pwa` - PWA support
- `vite-plugin-compression` - Gzip/Brotli

## 🎯 Priority Recommendations

1. **High Priority**
   - ✅ Dark Mode (easy + popular)
   - ✅ Export to Excel (useful)
   - ✅ Favorites System (engaging)

2. **Medium Priority**
   - Pagination (if data grows)
   - Statistics Dashboard (nice to have)
   - PWA (offline support)

3. **Low Priority**
   - Voice Search (nice demo)
   - Virtual Scrolling (only if 1000+ items)
   - Advanced filters (depends on data structure)

## 💡 Tips

- Test performance before/after each feature
- Keep bundle size under 200KB
- Mobile-first approach
- Accessibility (a11y) important
- Progressive enhancement

---

**All features are optional!** Current version is already production-ready. 🚀
