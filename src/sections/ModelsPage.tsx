import { useDocumentMeta } from '@/hooks/use-document-meta';
import { modelList } from '@/data/models';
import { ModelCard } from '@/components/ModelCard';
import { Button } from '@/components/ui/button';

export default function ModelsPage() {
  useDocumentMeta({
    title: '模型分类 - AI 大模型服务',
    description: '整理了市面上主流的适配 OpenClaw 的开源模型服务，包括 GPT-4、Claude、Gemini、通义千问等，按需选用，为你的 AI 智能体注入灵魂。',
  });

  return (
    <section id="models" className="py-20 lg:py-28 bg-[#f0f0f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#333333]">
            为你的龙虾注入<span className="text-gradient">灵魂</span>
          </h2>
          <p className="mt-3 text-[#666666] max-w-lg mx-auto">
            整理了市面上主流的适配龙虾的开源模型服务，按需选用
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {modelList.map((model) => (
             <ModelCard
               key={model.id}
               model={model}
             />
          ))}
        </div>

        {/* Submit New Model Service CTA */}
        <div className="mt-16 text-center border-t border-gray-200/60 pt-16">
          <h3 className="text-2xl font-bold text-[#333333] mb-3">你发现了优秀的模型服务？</h3>
          <p className="text-[#666666] mb-8 max-w-lg mx-auto">
            欢迎向我们提交你发现的适配龙虾的高性能开源或商用大模型，为龙虾注入更多智慧。
          </p>
          <Button 
            size="lg"
            className="bg-[#4d67ff] hover:bg-[#3a4fcc] text-white rounded-full px-8 h-12 shadow-[0_8px_30px_rgb(77,103,255,0.3)] hover:shadow-xl transition-all hover:-translate-y-1 font-medium"
            onClick={() => window.open('https://github.com/openclawhere/openclawhere.github.io/issues', '_blank')}
          >
            没有找到？提交新的模型服务
          </Button>
        </div>
      </div>
    </section>
  );
}
