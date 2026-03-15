import { AlertTriangle, Crosshair, Zap, Rocket } from 'lucide-react';

const guideSteps = [
  {
    step: '0',
    title: '先劝退！',
    description: '安装都不会，别玩！别买付费安装服务，纯交智商税。',
    icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
    color: 'from-red-500/20 to-orange-500/20',
    borderColor: 'border-red-500/30'
  },
  {
    step: '1',
    title: '选龙虾！',
    description: '什么水平选什么款，别硬上。根据需求选择最适合你的硬件款式。',
    icon: <Crosshair className="w-8 h-8 text-blue-500" />,
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-blue-500/30'
  },
  {
    step: '2',
    title: '喂饲料！',
    description: '选对模型 / Token，别乱烧钱。合理配置本地或云端大语言模型。',
    icon: <Zap className="w-8 h-8 text-yellow-500" />,
    color: 'from-yellow-500/20 to-amber-500/20',
    borderColor: 'border-yellow-500/30'
  },
  {
    step: '3',
    title: '练技能！',
    description: '装技能、跑流程，让龙虾帮你干活。打造你的专属 AI 助手。',
    icon: <Rocket className="w-8 h-8 text-purple-500" />,
    color: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'border-purple-500/30'
  }
];

export default function SiteGuide() {
  return (
    <section className="py-20 relative overflow-hidden bg-white/50 backdrop-blur-sm">
      {/* 装饰背景元素 */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-purple-100/30 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            <span className="text-gradient">新手入坑指南</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            从零开始了解如何玩转 AI 电子宠物，避开坑人陷阱，快速上手。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {guideSteps.map((item, index) => (
            <div 
              key={index}
              className={`relative glass rounded-3xl p-8 hover-lift transition-all duration-300 border ${item.borderColor} bg-gradient-to-b ${item.color} flex flex-col items-center text-center group`}
            >
              {/* 步骤编号背景 */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/50 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-sm opacity-50 group-hover:opacity-100 transition-opacity border border-white/40">
                <span className="text-3xl font-black text-gray-300 group-hover:text-gray-900 transition-colors">
                  {item.step}
                </span>
              </div>

              <div className="w-20 h-20 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6">
                {item.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
