import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TrendingUp, Users, Cpu, DollarSign, Globe, Lightbulb } from 'lucide-react';
import { useDocumentMeta } from '@/hooks/use-document-meta';

const trends = [
  {
    icon: Cpu,
    title: '技术趋势',
    items: [
      '大模型成为标配：GPT、豆包、通义等AI大模型深度集成',
      '多模态交互普及：语音+视觉+触觉融合',
      '情感计算升级：从简单响应到情绪识别与反馈',
      '长期记忆系统：个性化陪伴，性格养成',
    ],
    color: 'blue',
  },
  {
    icon: Lightbulb,
    title: '产品形态',
    items: [
      '毛绒化/仿生设计：温暖触感，降低机器感',
      '轻量化/便携化：口袋宠物，随身陪伴',
      '模块化/开源：可扩展，满足DIY需求',
    ],
    color: 'amber',
  },
  {
    icon: Globe,
    title: '市场格局',
    items: [
      '国内：初创公司活跃，产品迭代快，价格亲民',
      '国外：日本在情感陪伴领域领先，美国技术实力强',
      '传统玩具企业加速AI转型',
    ],
    color: 'emerald',
  },
  {
    icon: Users,
    title: '应用场景',
    items: [
      '儿童教育：AI+IP，寓教于乐',
      '情感陪伴：独居人群，老年人，宠物替代',
      '家庭服务：智能家居控制，安防监控',
      '工业应用：巡检，物流，特种作业',
    ],
    color: 'purple',
  },
  {
    icon: DollarSign,
    title: '价格趋势',
    items: [
      '入门级产品(300-500元)成为主流',
      '高端产品(万元级)面向专业市场',
      '订阅服务模式出现(如LOVOT月费)',
    ],
    color: 'rose',
  },
];

const stats = [
  { value: 56, suffix: '+', label: '产品数量', icon: Cpu },
  { value: 5, suffix: '', label: '产品类别', icon: Lightbulb },
  { value: 30, suffix: '+', label: '国内品牌', icon: TrendingUp },
  { value: 20, suffix: '+', label: '国际品牌', icon: Globe },
];

export default function MarketTrends() {
  useDocumentMeta({
    title: '养虾学堂 - AI 智能体学习资源',
    description: '汇总全网 AI 智能体学习资料，精选优质教程，从小白到大师，免费引导科学部署，打破信息差，杜绝智商税！',
  });
  const [animatedStats, setAnimatedStats] = useState<number[]>(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            // Animate stats
            stats.forEach((stat, index) => {
              const duration = 2000;
              const steps = 60;
              const increment = stat.value / steps;
              let current = 0;
              const timer = setInterval(() => {
                current += increment;
                if (current >= stat.value) {
                  current = stat.value;
                  clearInterval(timer);
                }
                setAnimatedStats((prev) => {
                  const newStats = [...prev];
                  newStats[index] = Math.floor(current);
                  return newStats;
                });
              }, duration / steps);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string }> = {
      blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
      amber: { bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-200' },
      emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-200' },
      purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200' },
      rose: { bg: 'bg-rose-50', text: 'text-rose-600', border: 'border-rose-200' },
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="trends" ref={sectionRef} className="py-20 lg:py-28 bg-[#f0f0f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          {/* <span className="inline-block px-4 py-1.5 rounded-full bg-[#4d67ff]/10 text-[#4d67ff] text-sm font-medium mb-4">
            市场洞察
          </span> */}
          <h2 className="text-3xl lg:text-4xl font-bold text-[#333333] mb-4">
            从小白到<span className="text-gradient">大师</span>，不花钱也能养好虾
          </h2>
          <p className="text-[#666666] max-w-2xl mx-auto">
            汇总全网养虾资料，精选优质教程，打破信息差，杜绝智商税！
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-[#4d67ff]/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#4d67ff]" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-[#333333] mb-1">
                  {animatedStats[index]}
                  {stat.suffix}
                </div>
                <div className="text-sm text-[#666666]">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Trends Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trends.map((trend, index) => {
            const Icon = trend.icon;
            const colors = getColorClasses(trend.color);

            return (
              <div
                key={trend.title}
                className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border-2 ${colors.border}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center mb-5`}>
                  <Icon className={`w-7 h-7 ${colors.text}`} />
                </div>

                <h3 className="text-xl font-bold text-[#333333] mb-4">{trend.title}</h3>

                <ul className="space-y-3">
                  {trend.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <span className={`w-1.5 h-1.5 rounded-full ${colors.text.replace('text', 'bg')} mt-2 flex-shrink-0`} />
                      <span className="text-sm text-[#666666] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-[#4d67ff] to-[#6b82ff] rounded-2xl shadow-xl">
            <div className="text-left">
              <div className="text-white font-semibold text-lg">想要了解更多产品详情？</div>
              <div className="text-white/80 text-sm">使用智能导购找到最适合你的AI宠物</div>
            </div>
            <button
              onClick={() => navigate('/ecosystem')}
              className="px-6 py-3 bg-white text-[#4d67ff] rounded-xl font-semibold hover:bg-white/90 transition-colors"
            >
              开始筛选
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
