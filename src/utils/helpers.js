/**
 * Highlight search term in text
 * Returns HTML string with <mark> tags
 */
export const highlightText = (text, searchTerm) => {
  if (!searchTerm || !text) return text;
  
  const words = searchTerm.split(/\s+/).filter(w => w.length > 1);
  
  let result = text;
  
  // Highlight exact matches
  words.forEach(word => {
    const regex = new RegExp(`(${word})`, 'gi');
    result = result.replace(regex, '<mark class="bg-yellow-300/70 text-gray-900 px-1 rounded">$1</mark>');
  });

  return result;
};

/**
 * Debounce function để giảm số lần gọi function
 * Sử dụng cho search input để tránh filter quá nhiều lần
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Throttle function để giới hạn tần suất thực thi
 */
export const throttle = (func, limit) => {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Check if element is in viewport
 * Useful for lazy loading
 */
export const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
