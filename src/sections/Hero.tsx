import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useDocumentMeta } from '@/hooks/use-document-meta';

// Pre-compute particle positions at module level to avoid impure calls during render
const PARTICLES = Array.from({ length: 20 }, () => ({
  left: Math.random() * 100,
  top: Math.random() * 100,
  delay: Math.random() * 4,
  duration: 4 + Math.random() * 4,
}));

export default function Hero() {
  useDocumentMeta({
    title: '首页',
    description: 'OpenClaw 龙虾圈，汇聚生态产品、云端服务、技能社区和学习资料，一站式解决养虾难题，让人人都能轻松养虾！',
  });
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      setMousePosition({ x, y });
    };

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove, { passive: true });
    }
    return () => {
      if (hero) {
        hero.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  useEffect(() => {
    if (imageRef.current) {
      const rotateY = mousePosition.x * 15;
      const rotateX = -mousePosition.y * 15;
      imageRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
  }, [mousePosition]);



  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#f8f9ff] to-[#f0f0f0]"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div
          className="absolute w-[800px] h-[800px] rounded-full opacity-30 animate-pulse-soft"
          style={{
            background: 'radial-gradient(circle, rgba(77, 103, 255, 0.3) 0%, transparent 70%)',
            top: '-20%',
            right: '-10%',
            animationDuration: '6s',
          }}
        />
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-20 animate-pulse-soft"
          style={{
            background: 'radial-gradient(circle, rgba(107, 130, 255, 0.3) 0%, transparent 70%)',
            bottom: '-10%',
            left: '-5%',
            animationDuration: '8s',
            animationDelay: '2s',
          }}
        />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(77, 103, 255, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(77, 103, 255, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Floating Particles */}
        {PARTICLES.map((p, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-[#4d67ff]/20 animate-float"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#4d67ff]/20 shadow-sm animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-[#4d67ff] animate-pulse" />
              <span className="text-sm font-medium text-[#4d67ff]">OpenClaw龙虾圈 · 31+ 开源产品与云端服务</span>
            </div> */}

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#333333] leading-tight animate-slide-up">
              OpenClaw Here!
              <span className="block text-gradient mt-2">全民养虾, 一站到底</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-[#666666] max-w-xl mx-auto lg:mx-0 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              汇聚 OpenClaw 生态产品、云端服务、技能社区和学习资料，
              <br />
              一站式解决养虾难题，让人人都能轻松养虾，快乐养虾！
            </p>

            {/* Stats */}
            {/* <div className="flex flex-wrap justify-center lg:justify-start gap-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#4d67ff]/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-[#4d67ff]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#333333]">31+</div>
                  <div className="text-sm text-[#666666]">产品</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#4d67ff]/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-[#4d67ff]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#333333]">4大</div>
                  <div className="text-sm text-[#666666]">分类</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#4d67ff]/10 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-[#4d67ff]" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#333333]">215K+</div>
                  <div className="text-sm text-[#666666]">GitHub Stars</div>
                </div>
              </div>
            </div> */}

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <Button
                size="lg"
                className="bg-[#4d67ff] hover:bg-[#3a4fcc] text-white rounded-full px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group"
                onClick={() => navigate('/resources')}
              >
                开启免费养虾
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-6 text-base border-[#cccccc] text-[#666666] hover:bg-white hover:border-[#4d67ff] hover:text-[#4d67ff] transition-all"
                onClick={() => navigate('/products')}
              >
                <Play className="w-5 h-5 mr-2" />
                智能选虾
              </Button>
            </div>
          </div>

          {/* Right Content - 3D Robot Image */}
          <div className="relative flex items-center justify-center">
            {/* Glow Effect */}
            <div className="absolute w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] rounded-full bg-gradient-to-r from-[#4d67ff]/20 to-[#6b82ff]/20 blur-3xl animate-pulse-soft" />

            {/* Robot Image */}
            <div
              ref={imageRef}
              className="relative z-10 w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] transition-transform duration-200 ease-out"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <img
                src="/hero-robot-dog.png"
                alt="AI Robot Dog"
                className="w-full h-full object-contain animate-float drop-shadow-2xl"
              />
            </div>

            {/* Floating Cards */}
            <div
              className="absolute top-10 left-0 glass rounded-2xl p-4 shadow-lg animate-float"
              style={{ animationDelay: '0.5s' }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 text-lg">✓</span>
                </div>
                <div>
                  <div className="text-sm font-medium text-[#333333]">智能</div>
                  <div className="text-xs text-[#666666]">7x24h在线</div>
                </div>
              </div>
            </div>

            <div
              className="absolute bottom-20 right-0 glass rounded-2xl p-4 shadow-lg animate-float"
              style={{ animationDelay: '1s' }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#4d67ff]/10 flex items-center justify-center">
                  <span className="text-[#4d67ff] text-lg">🧠</span>
                </div>
                <div>
                  <div className="text-sm font-medium text-[#333333]">AI驱动</div>
                  <div className="text-xs text-[#666666]">持续进化</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f0f0f0] to-transparent" />
    </section>
  );
}
