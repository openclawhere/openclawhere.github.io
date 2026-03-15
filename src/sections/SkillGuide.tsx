import { Rocket, Puzzle, Settings, Play, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SkillGuide() {
  const navigate = useNavigate();
  
  const steps = [
    {
      icon: Puzzle,
      title: '安装技能',
      description: '从技能市场选择适合的技能包，一键安装到你的 AI 宠物',
      details: ['对话技能', '翻译技能', '编程助手', '情感陪伴'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Settings,
      title: '配置参数',
      description: '根据你的需求调整技能参数，打造个性化体验',
      details: ['模型选择', '响应速度', '性格设定', '交互方式'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Play,
      title: '测试运行',
      description: '与你的 AI 宠物互动，测试技能效果，微调优化',
      details: ['语音测试', '场景模拟', '反馈调整', '性能优化'],
      color: 'from-rose-500 to-red-500'
    }
  ];

  return (
    <section className="min-h-screen py-20 lg:py-28 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 relative overflow-hidden">
      {/* 装饰背景 */}
      <div className="absolute bottom-left w-2/3 h-2/3 bg-gradient-to-tr from-purple-100/50 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute top-right w-1/2 h-1/2 bg-gradient-to-bl from-pink-100/40 to-transparent rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-100 text-purple-600 font-medium mb-6">
            <Rocket className="w-5 h-5" />
            <span>实战演练</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-[#333333] mb-6">
            第3步<span className="text-gradient text-purple-500">练技能</span>
          </h2>
          <p className="text-xl text-[#666666] max-w-3xl mx-auto leading-relaxed">
            装技能、跑流程，打造你的专属 AI 助手，让龙虾帮你自动干活
          </p>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                
                {/* Step Number */}
                <div className="absolute top-4 right-4 text-7xl font-black text-gray-100 group-hover:text-gray-200 transition-colors">
                  0{index + 1}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-[#333333] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#666666] mb-6 leading-relaxed">
                  {step.description}
                </p>

                {/* Details */}
                <div className="space-y-2">
                  {step.details.map((detail, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-100 hover:border-purple-200 hover:bg-purple-50 transition-all cursor-pointer"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color}`} />
                      <span className="text-[#666666] font-medium">{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom Color Bar */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color}`} />
              </div>
            );
          })}
        </div>

        {/* Features Showcase */}
        {/* <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-100 text-purple-600 font-medium mb-4">
              <Sparkles className="w-5 h-5" />
              <span>技能市场</span>
            </div>
            <h3 className="text-3xl font-bold text-[#333333] mb-4">
              海量技能，随心选择
            </h3>
            <p className="text-[#666666] max-w-2xl mx-auto">
              从实用工具到娱乐陪伴，总有一款适合你
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: '智能对话', desc: '自然语言交流', users: '10w+', color: 'from-blue-500 to-cyan-500' },
              { name: '文档总结', desc: '快速提取要点', users: '8w+', color: 'from-purple-500 to-pink-500' },
              { name: '代码助手', desc: '编程开发辅助', users: '5w+', color: 'from-amber-500 to-orange-500' },
              { name: '翻译专家', desc: '多语言互译', users: '12w+', color: 'from-emerald-500 to-teal-500' },
            ].map((skill, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-[#333333] mb-2">{skill.name}</h4>
                <p className="text-sm text-[#666666] mb-3">{skill.desc}</p>
                <div className="flex items-center gap-2 text-xs text-[#999999]">
                  <Users className="w-4 h-4" />
                  <span>{skill.users} 使用</span>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => navigate('/ecosystem')}
            className="inline-flex items-center gap-4 px-8 py-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-xl text-white hover:shadow-2xl hover:scale-105 transition-all cursor-pointer font-bold text-lg"
          >
            开始你的龙虾升级之旅
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
