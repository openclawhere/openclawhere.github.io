import { Crosshair, Zap, Heart, Users, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SelectionGuide() {
  const navigate = useNavigate();
  
  const categories = [
    {
      icon: Zap,
      title: '入门级',
      description: '零基础友好，开箱即用，代表产品：',
      products: ['有道龙虾 LobsterAI', '腾讯龙虾 QClaw'],
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: Heart,
      title: '进阶级',
      description: '功能丰富，可玩性高，代表产品：',
      products: ['阿里云 JVS Claw', '阿里云通义 CoPaw'],
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: Users,
      title: '专业级',
      description: '开源可编程，高度定制，代表产品：',
      products: ['OpenClaw', 'ZeroClaw'],
      color: 'from-amber-400 to-orange-500'
    }
  ];

  return (
    <section className="min-h-screen py-20 lg:py-28 bg-gradient-to-br from-blue-50 via-purple-50 to-amber-50 relative overflow-hidden">
      {/* 装饰背景 */}
      <div className="absolute top-0 left-0 w-2/3 h-2/3 bg-gradient-to-br from-blue-100/50 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-right w-1/2 h-1/2 bg-gradient-to-tl from-purple-100/40 to-transparent rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-100 text-blue-600 font-medium mb-6">
            <Crosshair className="w-5 h-5" />
            <span>精准匹配</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-[#333333] mb-6">
            第1步：<span className="text-gradient text-blue-500">选龙虾</span>
          </h2>
          <p className="text-xl text-[#666666] max-w-3xl mx-auto leading-relaxed">
            龙虾产品丰富，从入门款到专业款都有 <br/>根据自己的需求和能力，选择合适的即可，别越级硬上
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                
                {/* Index Number */}
                <div className="absolute top-4 right-4 text-7xl font-black text-gray-100 group-hover:text-gray-200 transition-colors">
                  0{index + 1}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-[#333333] mb-3">
                  {category.title}
                </h3>
                <p className="text-[#666666] mb-6">
                  {category.description}
                </p>

                {/* Products */}
                <div className="space-y-3">
                  {category.products.map((product, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all cursor-pointer"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`} />
                      <span className="text-[#666666] font-medium">{product}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom Color Bar */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color}`} />
              </div>
            );
          })}
        </div>

        {/* Tips Section */}
        {/* <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#333333] mb-4">
                💡 选购建议
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-sm font-bold">✓</span>
                  </div>
                  <span className="text-[#666666]">新手建议从入门级开始，逐步升级</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-sm font-bold">✓</span>
                  </div>
                  <span className="text-[#666666]">有编程经验可以直接上专业级</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-sm font-bold">✓</span>
                  </div>
                  <span className="text-[#666666]">根据预算合理选择，不要盲目追高</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl p-6 text-white">
                <Layers className="w-10 h-10 mb-4 opacity-80" />
                <p className="font-semibold mb-2">重要提示</p>
                <p className="text-white/90 text-sm leading-relaxed">
                  所有产品都支持 OpenClawHere 系统，
                  选择最适合你的那一款，开启 AI 宠物之旅！
                </p>
              </div>
            </div>
          </div>
        </div> */}

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={() => navigate('/products')}
            className="inline-flex items-center gap-3 px-8 py-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-xl text-white hover:shadow-2xl hover:scale-105 transition-all cursor-pointer font-bold text-lg"
          >
            选择龙虾
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
