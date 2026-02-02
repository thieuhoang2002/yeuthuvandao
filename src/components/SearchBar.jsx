import { useState, useMemo, memo } from 'react';

const SearchBar = memo(({ value, onChange, onClear }) => {
  return (
    <div className="w-full max-w-2xl mx-auto mb-6">
      <div className="glass rounded-2xl p-4 relative">
        <div className="flex items-center gap-3">
          <svg className="w-6 h-6 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder="Tìm kiếm câu hỏi..."
            className="input-glass flex-1 rounded-xl px-4 py-3 text-white placeholder-white/50 text-lg"
            autoComplete="off"
          />
          {value && (
            <button
              onClick={onClear}
              className="text-white/80 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
});

SearchBar.displayName = 'SearchBar';

export default SearchBar;
