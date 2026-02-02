import { memo } from 'react';

const HomePage = memo(({ onTabChange }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16 animate-fade-in">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-purple-700 flex items-center justify-center shadow-2xl mb-6 animate-pulse-slow">
            <span className="text-6xl">⚔️</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-2xl">
            Yêu Thú Vấn Đạo
          </h1>
          <div className="text-2xl md:text-3xl bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-transparent font-bold mb-4">
            道可道，非常道 • Tu Tiên Chi Lộ
          </div>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Nơi chia sẻ kinh nghiệm tu luyện, công cụ hỗ trợ và bí kíp trên con đường trưởng sinh
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="glass rounded-3xl p-8 md:p-12 mb-12 shadow-2xl">
        <div className="flex items-center mb-6">
          <span className="text-4xl mr-4">📜</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Về Trang Web</h2>
        </div>
        <div className="space-y-6 text-white/90 text-lg leading-relaxed">
          <p className="flex items-start">
            <span className="text-2xl mr-3 mt-1">🌟</span>
            <span>
              <strong className="text-purple-300">Yêu Thú Vấn Đạo</strong> là trang web được lập nên bởi 
              <strong className="text-pink-300 ml-2">THIEUHOANG deptrai S27</strong>, một tu sĩ đến từ server 27.
            </span>
          </p>
          <p className="flex items-start">
            <span className="text-2xl mr-3 mt-1">⚡</span>
            <span>
              Mục đích của trang là <strong className="text-yellow-300">chia sẻ kinh nghiệm</strong>, 
              công cụ hỗ trợ và những bí kíp quý giá giúp đạo hữu trên con đường tu tiên.
            </span>
          </p>
          <p className="flex items-start">
            <span className="text-2xl mr-3 mt-1">🎮</span>
            <span>
              Từ tra cứu đáp án Bàn Đào, đến các công cụ tự động hóa, mọi thứ đều được thiết kế 
              để giúp đạo hữu <strong className="text-green-300">tiết kiệm thời gian</strong> và 
              <strong className="text-blue-300 ml-2">tu luyện hiệu quả hơn</strong>.
            </span>
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {/* Feature 1 */}
        <div 
          onClick={() => onTabChange('bandao')}
          className="glass rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 cursor-pointer group"
        >
          <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">📚</div>
          <h3 className="text-xl font-bold text-white mb-2">Bàn Đào</h3>
          <p className="text-white/70 text-sm">
            Tra cứu đáp án nhanh chóng với công cụ tìm kiếm thông minh, tô sáng từ khóa
          </p>
        </div>

        {/* Feature 2 */}
        <div 
          onClick={() => onTabChange('tips')}
          className="glass rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 cursor-pointer group"
        >
          <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">💡</div>
          <h3 className="text-xl font-bold text-white mb-2">Tips</h3>
          <p className="text-white/70 text-sm">
            Bí kíp tu luyện, mẹo chơi game và những kinh nghiệm quý báu từ cao thủ
          </p>
        </div>

        {/* Feature 3 */}
        <div 
          onClick={() => onTabChange('tool')}
          className="glass rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 cursor-pointer group"
        >
          <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🛠️</div>
          <h3 className="text-xl font-bold text-white mb-2">Tools</h3>
          <p className="text-white/70 text-sm">
            Công cụ hỗ trợ tự động, script và tiện ích giúp game thủ chơi hiệu quả hơn
          </p>
        </div>

        {/* Feature 4 */}
        <div 
          onClick={() => onTabChange('donate')}
          className="glass rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 cursor-pointer group"
        >
          <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">❤️</div>
          <h3 className="text-xl font-bold text-white mb-2">Donate</h3>
          <p className="text-white/70 text-sm">
            Ủng hộ dự án để tiếp tục phát triển và mang lại nhiều công cụ hữu ích hơn
          </p>
        </div>
      </div>

      {/* Journey Section */}
      <div className="glass rounded-3xl p-8 md:p-12 shadow-2xl">
        <div className="flex items-center mb-8">
          <span className="text-4xl mr-4">🗺️</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Con Đường Tu Tiên</h2>
        </div>
        
        <div className="space-y-6">
          {/* Step 1 */}
          <div className="flex items-start space-x-4 p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl">
              1
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Khởi Đầu - Luyện Khí</h3>
              <p className="text-white/70">
                Bắt đầu với Bàn Đào - tra cứu đáp án nhanh chóng, xây dựng nền tảng tri thức vững chắc
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start space-x-4 p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
              2
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Tiến Bộ - Trúc Cơ</h3>
              <p className="text-white/70">
                Học hỏi Tips & Tricks từ các cao thủ, nâng cao kỹ năng và hiểu biết về game
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start space-x-4 p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl">
              3
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Thành Tựu - Kim Đan</h3>
              <p className="text-white/70">
                Sử dụng Tools để tự động hóa, tối ưu hóa thời gian và đạt hiệu quả cao nhất
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex items-start space-x-4 p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center text-white font-bold text-xl">
              ∞
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Viên Mãn - Phi Thăng</h3>
              <p className="text-white/70">
                Chia sẻ kinh nghiệm, đóng góp cho cộng đồng và cùng nhau tiến bộ
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16">
        <div className="glass rounded-3xl p-12 shadow-2xl">
          <h2 className="text-4xl font-bold text-white mb-4">Bắt Đầu Tu Luyện Ngay!</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Đạo hữu đã sẵn sàng chưa? Hãy khám phá các công cụ và bắt đầu hành trình tu tiên của mình.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => onTabChange('bandao')}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              📚 Vào Bàn Đào
            </button>
            <button
              onClick={() => onTabChange('tool')}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              🛠️ Xem Tools
            </button>
          </div>
        </div>
      </div>

      {/* Quote */}
      <div className="text-center mt-12">
        <blockquote className="text-2xl md:text-3xl text-white/60 italic font-serif">
          "千里之行，始於足下"
        </blockquote>
        <p className="text-white/40 mt-2">
          Hành trình ngàn dặm bắt đầu từ bước chân đầu tiên
        </p>
      </div>
    </div>
  );
});

HomePage.displayName = 'HomePage';

export default HomePage;
