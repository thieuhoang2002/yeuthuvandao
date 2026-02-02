import { useState, useMemo, useCallback } from 'react';
import SearchBar from './components/SearchBar';
import SuggestionList from './components/SuggestionList';
import QATable from './components/QATable';
import { qaData } from './data';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Tối ưu: Memoize filtered data
  const filteredData = useMemo(() => {
    if (!searchValue.trim()) return qaData;
    
    const lowerSearch = searchValue.toLowerCase();
    return qaData.filter(item =>
      item.question.toLowerCase().includes(lowerSearch) ||
      item.answer.toLowerCase().includes(lowerSearch)
    );
  }, [searchValue]);

  // Tối ưu: Memoize suggestions
  const suggestions = useMemo(() => {
    if (!searchValue.trim()) return [];
    return filteredData.slice(0, 10);
  }, [searchValue, filteredData]);

  const handleSearchChange = useCallback((e) => {
    setSearchValue(e.target.value);
    setShowSuggestions(true);
  }, []);

  const handleClearSearch = useCallback(() => {
    setSearchValue('');
    setShowSuggestions(false);
  }, []);

  const handleSelectSuggestion = useCallback((item) => {
    setSearchValue(item.question);
    setShowSuggestions(false);
  }, []);

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="container mx-auto py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-2xl">
            🎮 Đáp Án Bàn Đào
          </h1>
          <p className="text-xl text-white/90 font-medium drop-shadow-lg">
            From THIEUHOANG deptrai S27
          </p>
        </div>

        {/* Search Bar */}
        <SearchBar
          value={searchValue}
          onChange={handleSearchChange}
          onClear={handleClearSearch}
        />

        {/* Suggestions */}
        <SuggestionList
          suggestions={suggestions}
          onSelect={handleSelectSuggestion}
          isVisible={showSuggestions && searchValue.trim()}
        />

        {/* QA Table */}
        <QATable data={filteredData} />
      </div>
    </div>
  );
}

export default App;
