import { memo } from 'react';
import { highlightText } from '../utils/helpers';

const TableRow = memo(({ item, index, searchTerm }) => {
  return (
    <tr className="glass-hover border-b border-white/10">
      <td className="px-6 py-4 text-white/90 font-medium">{item.stt}</td>
      <td 
        className="px-6 py-4 text-white/90"
        dangerouslySetInnerHTML={{ 
          __html: highlightText(item.question, searchTerm) 
        }}
      />
      <td 
        className="px-6 py-4 text-white font-semibold whitespace-pre-line"
        dangerouslySetInnerHTML={{ 
          __html: highlightText(item.answer, searchTerm) 
        }}
      />
    </tr>
  );
});

TableRow.displayName = 'TableRow';

// Mobile Card Component
const MobileCard = memo(({ item, searchTerm }) => {
  return (
    <div className="glass rounded-xl p-4 mb-4 space-y-3">
      <div className="flex items-center justify-between border-b border-white/10 pb-2">
        <span className="text-purple-300 font-bold text-lg">STT</span>
        <span className="text-white font-bold text-lg">{item.stt}</span>
      </div>
      <div>
        <div className="text-pink-300 font-bold mb-2 text-sm">Câu hỏi:</div>
        <div 
          className="text-white/90 text-sm leading-relaxed"
          dangerouslySetInnerHTML={{ 
            __html: highlightText(item.question, searchTerm) 
          }}
        />
      </div>
      <div>
        <div className="text-yellow-300 font-bold mb-2 text-sm">Đáp án:</div>
        <div 
          className="text-white font-semibold text-sm leading-relaxed whitespace-pre-line"
          dangerouslySetInnerHTML={{ 
            __html: highlightText(item.answer, searchTerm) 
          }}
        />
      </div>
    </div>
  );
});

MobileCard.displayName = 'MobileCard';

const QATable = memo(({ data, searchTerm = '' }) => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Desktop Table View */}
      <div className="hidden md:block glass rounded-2xl overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white/20 backdrop-blur-sm">
              <tr>
                <th className="px-6 py-4 text-left text-white font-bold text-lg w-20">STT</th>
                <th className="px-6 py-4 text-left text-white font-bold text-lg">Câu hỏi</th>
                <th className="px-6 py-4 text-left text-white font-bold text-lg w-80">Đáp án</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <TableRow 
                  key={item.stt} 
                  item={item} 
                  index={index}
                  searchTerm={searchTerm}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden">
        {data.map((item) => (
          <MobileCard 
            key={item.stt}
            item={item}
            searchTerm={searchTerm}
          />
        ))}
      </div>

      <div className="mt-6 text-center text-white/80 font-medium">
        Tổng: {data.length} câu hỏi
      </div>
    </div>
  );
});

QATable.displayName = 'QATable';

export default QATable;
