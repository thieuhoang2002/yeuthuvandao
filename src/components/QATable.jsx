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

const QATable = memo(({ data, searchTerm = '' }) => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="glass rounded-2xl overflow-hidden shadow-2xl">
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
      <div className="mt-6 text-center text-white/80 font-medium">
        Tổng: {data.length} câu hỏi
      </div>
    </div>
  );
});

QATable.displayName = 'QATable';

export default QATable;
