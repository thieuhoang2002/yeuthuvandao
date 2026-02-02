import { memo } from 'react';

const Header = memo(({ activeTab, onTabChange }) => {
  const navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'bandao', label: 'Bàn Đào', href: '#bandao' },
    { id: 'tips', label: 'Tips', href: '#tips' },
    { id: 'tool', label: 'Tool', href: '#tool' },
    { id: 'donate', label: 'Donate', href: '#donate' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-header backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">🌸</span>
            </div>
            <span className="text-white font-bold text-xl hidden sm:block">
              Yêu Thú Vấn Đạo
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  onTabChange(item.id);
                }}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === item.id
                    ? 'bg-white/20 text-white shadow-lg'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden pb-4 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                onTabChange(item.id);
              }}
              className={`block px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeTab === item.id
                  ? 'bg-white/20 text-white'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
