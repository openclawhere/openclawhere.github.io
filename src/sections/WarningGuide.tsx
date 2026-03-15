import { AlertTriangle, XCircle, Shield, DollarSign } from 'lucide-react';

export default function WarningGuide() {
  const warnings = [
    {
      icon: XCircle,
      title: '技术门槛高',
      description: '需要掌握 Linux 基础、Docker、Node.js 等技术栈',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: DollarSign,
      title: '付费安装坑',
      description: '淘宝/拼多多付费安装服务纯属智商税',
      color: 'from-orange-500 to-amber-500'
    },
    {
      icon: Shield,
      title: '售后无保障',
      description: '遇到问题只能自己解决，没有技术支持',
      color: 'from-amber-500 to-yellow-500'
    }
  ];

  return (
    <section id="warning-guide" className="min-h-screen py-20 lg:py-28 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* 装饰背景 */}
      <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-bl from-red-100/50 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-orange-100/40 to-transparent rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-100 text-red-600 font-medium mb-6">
            <AlertTriangle className="w-5 h-5" />
            <span>韭菜警告</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-[#333333] mb-6">
            第0步：<span className="text-gradient text-red-500">劝退警告</span>
          </h2>
          <p className="text-xl text-[#666666] max-w-3xl mx-auto leading-relaxed">
            人贵自知，如果你安装都要花钱找别人，那你不配养龙虾！<br />请马上退出网页，不尝试就不会失败，不失败才会成功！
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Warning Cards */}
          <div className="space-y-6">
            {warnings.map((warning, index) => {
              const Icon = warning.icon;
              return (
                <div
                  key={index}
                  className="group p-6 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-red-100 hover:border-red-200"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${warning.color} flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#333333] mb-2">
                        {warning.title}
                      </h3>
                      <p className="text-[#666666] leading-relaxed">
                        {warning.description}
                      </p>
                    </div>
                    <div className="text-5xl font-black text-red-100 group-hover:text-red-200 transition-colors">
                      0{index + 1}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right - Big Warning Message */}
          <div className="relative">
            <div className="bg-gradient-to-br from-red-500 to-orange-500 rounded-3xl p-10 shadow-2xl text-white">
              <h3 className="text-3xl font-bold mb-4">
                特别提醒
              </h3>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                OpenClawHere 是开源项目，所有安装教程和文档都是免费的。
                任何收费的安装服务都是在收智商税！<br/>
                当然，收智商税不是他们的问题，他们都是聪明人，所以...
              </p>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-white/30 flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">¥0</div>
                    <div className="text-sm text-white/80">开源免费</div>
                  </div>
                </div>
                <p className="text-sm text-white/80">
                  跟着官方文档一步步来，你也可以轻松安装成功！
                </p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-red-300/30 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-300/30 rounded-full blur-2xl" />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-white rounded-full shadow-lg border-2 border-red-100">
            <Shield className="w-6 h-6 text-red-500" />
            <span className="font-semibold text-[#333333]">
              如果你觉得自己可以了，请继续往下看 →
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
