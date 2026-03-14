import { Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#333333] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Newsletter */}
        <div>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <h4 className="font-semibold text-xl mb-2">关注 OpenClaw 龙虾圈</h4>
              <p className="text-gray-400">获取最新养龙虾教程和技术资料，走在 AI 养殖最前沿</p>
            </div>
            <div className="flex gap-6">
              <div className="text-center">
                <div className="w-28 h-28 rounded-xl overflow-hidden bg-white p-1.5">
                  <img src="/qr-wechat.png" alt="微信公众号" className="w-full h-full object-cover rounded-lg" />
                </div>
                <p className="text-gray-400 text-sm mt-2">微信公众号</p>
              </div>
              <div className="text-center">
                <div className="w-28 h-28 rounded-xl overflow-hidden bg-white p-1.5">
                  <img src="/qr-douyin.png" alt="抖音" className="w-full h-full object-cover rounded-lg" />
                </div>
                <p className="text-gray-400 text-sm mt-2">抖音</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 OpenClaw龙虾圈. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              {/* <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a> */}
              {/* <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                隐私政策
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                使用条款
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
