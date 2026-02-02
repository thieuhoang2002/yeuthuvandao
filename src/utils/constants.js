/**
 * Application Constants
 */

// UI Configuration
export const UI_CONFIG = {
  MAX_SUGGESTIONS: 10,
  SEARCH_DEBOUNCE_MS: 300,
  ANIMATION_DURATION_MS: 300,
};

// Theme Colors (Glassmorphism)
export const THEME = {
  gradients: {
    primary: 'from-purple-400 via-pink-500 to-red-500',
    secondary: 'from-blue-400 via-cyan-500 to-teal-500',
    dark: 'from-slate-800 via-slate-900 to-black',
  },
  glass: {
    light: 'bg-white/10 backdrop-blur-md border border-white/20',
    medium: 'bg-white/20 backdrop-blur-lg border border-white/30',
    dark: 'bg-black/20 backdrop-blur-md border border-white/10',
  },
};

// Breakpoints (match with Tailwind)
export const BREAKPOINTS = {
  mobile: 640,
  tablet: 768,
  laptop: 1024,
  desktop: 1280,
};

// Feature Flags
export const FEATURES = {
  enableAnalytics: false,
  enableVirtualization: false, // For very large datasets
  enableDarkMode: false,
};

// SEO Configuration
export const SEO = {
  title: '🎮 Đáp Án Bàn Đào - THIEUHOANG S27',
  description: 'Tra cứu đáp án bàn đào nhanh chóng với giao diện Glassmorphism hiện đại',
  keywords: 'đáp án bàn đào, tra cứu câu hỏi, game, THIEUHOANG, S27',
  author: 'THIEUHOANG deptrai S27',
};

// Performance Budget
export const PERFORMANCE = {
  maxBundleSizeKB: 500,
  maxChunkSizeKB: 200,
  targetLighthouseScore: 95,
};
