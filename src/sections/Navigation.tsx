import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: '首页', to: '/' },
  { name: '龙虾产品', to: '/products' },
  { name: '模型服务', to: '/models' },
  { name: '资源生态', to: '/ecosystem' },
  { name: '免费资料', to: '/resources' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 路由变化时关闭移动端菜单并滚动到顶部
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'py-3 px-4 md:px-8'
          : 'py-5 px-4 md:px-8'
          }`}
      >
        <div
          className={`mx-auto transition-all duration-500 ${isScrolled
            ? 'max-w-5xl bg-white/80 backdrop-blur-xl rounded-full shadow-lg border border-white/30 px-6'
            : 'max-w-7xl px-4'
            }`}
        >
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 group"
            >
              <img src="/logo.png" alt="OpenClaw" className="w-10 h-10 rounded-xl shadow-lg group-hover:scale-105 transition-transform" />
              <span className={`font-semibold text-lg text-[#333333] transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-90'}`}>
                OpenClaw 龙虾圈
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors group ${location.pathname === link.to
                    ? 'text-[#4d67ff]'
                    : 'text-[#666666] hover:text-[#4d67ff]'
                    }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#4d67ff] transition-opacity ${location.pathname === link.to ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`} />
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-3">
              <Button
                className="bg-[#4d67ff] hover:bg-[#3a4fcc] text-white rounded-full px-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
                onClick={() => window.open('https://github.com/openclawhere/openclawhere.github.io', '_blank')}
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-[#333333]" />
              ) : (
                <Menu className="w-6 h-6 text-[#333333]" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
      >
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-2xl p-6 transition-all duration-300 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
            }`}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className={`px-4 py-3 rounded-xl transition-colors font-medium ${location.pathname === link.to
                  ? 'text-[#4d67ff] bg-[#4d67ff]/5'
                  : 'text-[#333333] hover:text-[#4d67ff] hover:bg-[#4d67ff]/5'
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <hr className="my-2 border-gray-100" />
            <Button
              className="w-full bg-[#4d67ff] hover:bg-[#3a4fcc] text-white rounded-xl py-6"
              onClick={() => window.open('https://github.com/openclawhere/openclawhere.github.io', '_blank')}
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
