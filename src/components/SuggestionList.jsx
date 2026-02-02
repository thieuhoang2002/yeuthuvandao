import { memo } from 'react';

const SuggestionList = memo(({ suggestions, onSelect, isVisible }) => {
  if (!isVisible || suggestions.length === 0) return null;

  return (
    <div className="w-full max-w-2xl mx-auto mb-4">
      <div className="glass rounded-2xl overflow-hidden shadow-2xl">
        <div className="max-h-64 overflow-y-auto">
          {suggestions.map((item) => (
            <button
              key={item.stt}
              onClick={() => onSelect(item)}
              className="w-full text-left px-6 py-3 text-white/90 hover:bg-white/10 transition-colors border-b border-white/10 last:border-b-0"
            >
              {item.question}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
});

SuggestionList.displayName = 'SuggestionList';

export default SuggestionList;
