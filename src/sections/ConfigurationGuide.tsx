import { Zap, Cloud, Database, Coins, TrendingUp, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ConfigurationGuide() {
  const navigate = useNavigate();
  
  const options = [
    {
      icon: Database,
      title: '本地模型',
      description: '隐私安全，一次性投入',
      pros: ['数据不出本地', '无需持续付费', '响应速度快'],
      cons: ['需要硬件支持', '配置较复杂', '效果不如云端模型'],
      recommendation: '适合有技术基础的用户',
      color: 'from-yellow-500 to-amber-600'
    },
    {
      icon: Cloud,
      title: '云端 API',
      description: '开箱即用，按需付费',
      pros: ['无需本地部署', '模型选择多样', '按量计费灵活'],
      cons: ['需要网络连接', '长期使用成本高'],
      recommendation: '适合新手和轻度用户',
      color: 'from-amber-500 to-orange-600'
    }
  ];

//   const models = [
//     { name: 'GPT-4o', provider: 'OpenAI', type: '云端', cost: '$0.01/1K tokens' },
//     { name: '豆包', provider: '字节', type: '云端', cost: '¥0.008/1K tokens' },
//     { name: '通义千问', provider: '阿里', type: '云端', cost: '¥0.005/1K tokens' },
//     { name: 'Llama 3', provider: 'Meta', type: '本地', cost: '免费' },
//   ];

  return (
    <section className="min-h-screen py-20 lg:py-28 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 relative overflow-hidden">
      {/* 装饰背景 */}
      <div className="absolute bottom-right w-2/3 h-2/3 bg-gradient-to-bl from-amber-100/50 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute top-left w-1/2 h-1/2 bg-gradient-to-br from-yellow-100/40 to-transparent rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-100 text-amber-600 font-medium mb-6">
            <Zap className="w-5 h-5" />
            <span>经济实惠</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-[#333333] mb-6">
            第2步：<span className="text-gradient text-amber-500">选饲料</span>
          </h2>
          <p className="text-xl text-[#666666] max-w-3xl mx-auto leading-relaxed">
            龙虾要吃饲料（Token），选对模型，别乱烧钱<br/>合理配置本地或云端大语言模型，让龙虾更聪明
          </p>
        </div>

        {/* Main Comparison */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {options.map((option, index) => {
            const Icon = option.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                {/* Background Accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${option.color} opacity-10 rounded-bl-full`} />
                
                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${option.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#333333]">{option.title}</h3>
                    <p className="text-[#666666]">{option.description}</p>
                  </div>
                </div>

                {/* Pros & Cons */}
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-3 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-xs">✓</span>
                      优点
                    </h4>
                    <ul className="space-y-2">
                      {option.pros.map((pro, idx) => (
                        <li key={idx} className="text-sm text-[#666666] flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600 mb-3 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-xs">×</span>
                      缺点
                    </h4>
                    <ul className="space-y-2">
                      {option.cons.map((con, idx) => (
                        <li key={idx} className="text-sm text-[#666666] flex items-start gap-2">
                          <span className="text-red-500 mt-1">•</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Recommendation */}
                {/* <div className={`p-4 rounded-xl bg-gradient-to-r ${option.color} bg-opacity-10 border border-opacity-20 border-amber-200`}>
                  <p className={`text-sm font-medium bg-gradient-to-r ${option.color} bg-clip-text text-transparent`}>
                    💡 {option.recommendation}
                  </p>
                </div> */}
              </div>
            );
          })}
        </div>

        {/* Models Table */}
        {/* <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Coins className="w-6 h-6 text-amber-500" />
            <h3 className="text-2xl font-bold text-[#333333]">热门模型价格对比</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-100">
                  <th className="text-left py-4 px-4 font-semibold text-[#333333]">模型名称</th>
                  <th className="text-left py-4 px-4 font-semibold text-[#333333]">提供商</th>
                  <th className="text-left py-4 px-4 font-semibold text-[#333333]">类型</th>
                  <th className="text-left py-4 px-4 font-semibold text-[#333333]">成本</th>
                </tr>
              </thead>
              <tbody>
                {models.map((model, index) => (
                  <tr 
                    key={index} 
                    className="border-b border-gray-50 hover:bg-amber-50 transition-colors"
                  >
                    <td className="py-4 px-4">
                      <span className="font-medium text-[#333333]">{model.name}</span>
                    </td>
                    <td className="py-4 px-4 text-[#666666]">{model.provider}</td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        model.type === '本地' 
                          ? 'bg-green-100 text-green-600' 
                          : 'bg-blue-100 text-blue-600'
                      }`}>
                        {model.type}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="font-semibold text-amber-600">{model.cost}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div> */}

        {/* Cost Tips */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-6 text-white shadow-lg">
            <TrendingUp className="w-8 h-8 mb-4 opacity-80" />
            <h4 className="font-bold text-lg mb-2">省钱技巧</h4>
            <p className="text-white/90 text-sm">
              本地部署 + 云端 API 混合使用，日常任务用本地，复杂任务调用云端
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl p-6 text-white shadow-lg">
            <Database className="w-8 h-8 mb-4 opacity-80" />
            <h4 className="font-bold text-lg mb-2">推荐配置</h4>
            <p className="text-white/90 text-sm">
              新手建议从云端 API 开始，熟悉后再考虑本地部署
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl p-6 text-white shadow-lg">
            <Coins className="w-8 h-8 mb-4 opacity-80" />
            <h4 className="font-bold text-lg mb-2">成本控制</h4>
            <p className="text-white/90 text-sm">
              设置 Token 使用上限，避免意外超支
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => navigate('/models')}
            className="inline-flex items-center gap-3 px-8 py-5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full shadow-xl text-white hover:shadow-2xl hover:scale-105 transition-all cursor-pointer font-bold text-lg"
          >
            选择模型
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
