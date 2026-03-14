import { useState } from 'react';
import { Brain, Heart, Eye, Cpu, Sparkles, ChevronRight } from 'lucide-react';

const techFeatures = [
  {
    id: 'llm',
    icon: Brain,
    title: '大模型驱动',
    subtitle: 'LLM Powered',
    description: '集成GPT、豆包、通义等顶尖AI大模型，实现自然语言理解和智能对话',
    stats: [
      { value: '9', label: '款产品' },
      { value: 'GPT-4o', label: '顶级模型' },
      { value: '多模态', label: '交互方式' },
    ],
    products: ['华为智能憨憨', '字节跳动显眼包', '跃然创新BubblePal', 'Mixi Romy'],
    color: 'from-blue-500 to-indigo-600',
  },
  {
    id: 'emotion',
    icon: Heart,
    title: '情感计算',
    subtitle: 'Emotion AI',
    description: '通过声音、表情、行为识别用户情绪，提供情感反馈和陪伴',
    stats: [
      { value: '8', label: '款产品' },
      { value: '95%', label: '识别准确率' },
      { value: '实时', label: '情感反馈' },
    ],
    products: ['萌友智能Ropet', '珞博智能Fuzozo', '日本卡西欧Moflin', 'GROOVE X LOVOT'],
    color: 'from-pink-500 to-rose-600',
  },
  {
    id: 'multimodal',
    icon: Eye,
    title: '多模态交互',
    subtitle: 'Multimodal',
    description: '融合语音、视觉、触觉多种交互方式，打造沉浸式体验',
    stats: [
      { value: '8', label: '款产品' },
      { value: '360°', label: '环境感知' },
      { value: '3种+', label: '交互模式' },
    ],
    products: ['小米CyberDog', '宇树科技Unitree', '云深处绝影', '三星Ballie'],
    color: 'from-purple-500 to-violet-600',
  },
  {
    id: 'memory',
    icon: Cpu,
    title: '长期记忆',
    subtitle: 'Long-term Memory',
    description: '记住用户习惯和偏好，随时间推移形成独特个性',
    stats: [
      { value: '7', label: '款产品' },
      { value: '无限', label: '记忆容量' },
      { value: '个性', label: '养成系统' },
    ],
    products: ['跃然创新CocoMate', '萌友智能Ropet', '珞博智能Fuzozo', '万代拓麻歌子'],
    color: 'from-amber-500 to-orange-600',
  },
  {
    id: 'bionic',
    icon: Sparkles,
    title: '仿生设计',
    subtitle: 'Bionic Design',
    description: '逼真的外观和动作，提供温暖触感和自然互动体验',
    stats: [
      { value: '8', label: '款产品' },
      { value: '真实', label: '毛发质感' },
      { value: '自然', label: '动作反馈' },
    ],
    products: ['日本Moflin', 'GROOVE X LOVOT', 'Ageless Innovation', '索尼AIBO'],
    color: 'from-emerald-500 to-teal-600',
  },
];

export default function TechFeatures() {
  const [activeFeature, setActiveFeature] = useState(techFeatures[0]);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#4d67ff]/10 text-[#4d67ff] text-sm font-medium mb-4">
            核心技术
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#333333] mb-4">
            先进<span className="text-gradient">科技</span>
          </h2>
          <p className="text-[#666666] max-w-2xl mx-auto">
            五大核心技术特点，定义AI电子宠物的未来
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Feature List */}
          <div className="space-y-4">
            {techFeatures.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = activeFeature.id === feature.id;
              
              return (
                <div
                  key={feature.id}
                  onClick={() => setActiveFeature(feature)}
                  className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r ' + feature.color + ' text-white shadow-xl scale-[1.02]'
                      : 'bg-[#f8f9ff] hover:bg-white hover:shadow-lg border border-transparent hover:border-gray-100'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        isActive ? 'bg-white/20' : 'bg-gradient-to-br ' + feature.color + ' text-white'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className={`text-xl font-semibold ${isActive ? 'text-white' : 'text-[#333333]'}`}>
                          {feature.title}
                        </h3>
                        <span className={`text-xs ${isActive ? 'text-white/70' : 'text-[#999999]'}`}>
                          {feature.subtitle}
                        </span>
                      </div>
                      <p className={`text-sm ${isActive ? 'text-white/80' : 'text-[#666666]'}`}>
                        {feature.description}
                      </p>
                    </div>
                    <ChevronRight
                      className={`w-5 h-5 flex-shrink-0 transition-transform ${
                        isActive ? 'text-white rotate-90' : 'text-[#cccccc]'
                      }`}
                    />
                  </div>

                  {/* Index Number */}
                  <div
                    className={`absolute top-4 right-4 text-6xl font-bold opacity-10 ${
                      isActive ? 'text-white' : 'text-[#4d67ff]'
                    }`}
                  >
                    0{index + 1}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right - Feature Detail */}
          <div className="lg:sticky lg:top-32">
            <div className="bg-gradient-to-br from-[#f8f9ff] to-white rounded-3xl p-8 shadow-xl border border-gray-100">
              {/* Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${activeFeature.color} flex items-center justify-center shadow-lg`}>
                  <activeFeature.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#333333]">{activeFeature.title}</h3>
                  <p className="text-[#666666]">{activeFeature.subtitle}</p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {activeFeature.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-white rounded-xl shadow-sm"
                  >
                    <div className={`text-2xl font-bold bg-gradient-to-r ${activeFeature.color} bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-[#666666] mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Description */}
              <p className="text-[#666666] mb-8 leading-relaxed">
                {activeFeature.description}。这项技术让AI电子宠物能够更好地理解和响应用户需求，
                提供更加个性化和贴心的陪伴体验。
              </p>

              {/* Products */}
              <div>
                <h4 className="font-semibold text-[#333333] mb-4">代表产品</h4>
                <div className="flex flex-wrap gap-2">
                  {activeFeature.products.map((product) => (
                    <span
                      key={product}
                      className="px-4 py-2 bg-white rounded-full text-sm text-[#666666] shadow-sm border border-gray-100 hover:border-[#4d67ff] hover:text-[#4d67ff] transition-colors cursor-pointer"
                    >
                      {product}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
