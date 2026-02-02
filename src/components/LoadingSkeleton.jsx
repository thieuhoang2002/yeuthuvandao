import { memo } from 'react';

const LoadingSkeleton = memo(() => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="glass rounded-2xl overflow-hidden shadow-2xl animate-pulse">
        {/* Table Header Skeleton */}
        <div className="bg-white/20 backdrop-blur-sm p-4">
          <div className="flex gap-4">
            <div className="w-20 h-6 bg-white/30 rounded"></div>
            <div className="flex-1 h-6 bg-white/30 rounded"></div>
            <div className="w-80 h-6 bg-white/30 rounded"></div>
          </div>
        </div>

        {/* Table Body Skeleton */}
        <div className="divide-y divide-white/10">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="p-4 flex gap-4">
              <div className="w-20 h-5 bg-white/20 rounded"></div>
              <div className="flex-1 h-5 bg-white/20 rounded"></div>
              <div className="w-80 h-5 bg-white/20 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

LoadingSkeleton.displayName = 'LoadingSkeleton';

export default LoadingSkeleton;
