import { memo } from 'react';

const Footer = memo(({ onTabChange }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 glass-header backdrop-blur-xl border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 flex items-center">
              <span className="mr-2">🌸</span>
              Yêu Thú Vấn Đạo
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Tra cứu đáp án bàn đào nhanh chóng và chính xác. 
              Công cụ hỗ trợ tu tiên giả tìm kiếm thông tin hiệu quả.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Liên Kết Nhanh</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => onTabChange('home')}
                  className="text-white/70 hover:text-white transition-colors text-sm text-left w-full"
                >
                  🏠 Trang Chủ
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onTabChange('bandao')}
                  className="text-white/70 hover:text-white transition-colors text-sm text-left w-full"
                >
                  📚 Bàn Đào
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onTabChange('tips')}
                  className="text-white/70 hover:text-white transition-colors text-sm text-left w-full"
                >
                  💡 Tips & Tricks
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onTabChange('tool')}
                  className="text-white/70 hover:text-white transition-colors text-sm text-left w-full"
                >
                  🛠️ Công Cụ
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Liên Hệ</h3>
            <div className="space-y-2">
              <button 
                onClick={() => onTabChange('donate')}
                className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:shadow-lg transition-all duration-300"
              >
                ❤️ Ủng Hộ Dự Án
              </button>
              <p className="text-white/70 text-sm mt-4">
                Mọi đóng góp đều giúp dự án phát triển tốt hơn!
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-white/60 text-sm">
            © {currentYear} Yêu Thú Vấn Đạo. Made with 💜 by THIEUHOANG deptrai S27
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
