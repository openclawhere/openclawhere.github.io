import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories } from '@/data/products';
import { useDocumentMeta } from '@/hooks/use-document-meta';

export default function ProductCategories() {
  useDocumentMeta({
    title: '模型分类',
    description: '整理了市面上主流的适配龙虾的开源模型服务，按需选用，为你的龙虾注入灵魂。',
  });
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const navigate = useNavigate();

  const goToGuide = (categoryId: string) => {
    navigate('/ecosystem?category=' + categoryId);
  };

  return (
    <section id="categories" className="py-20 lg:py-28 bg-[#f0f0f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          {/* <span className="inline-block px-4 py-1.5 rounded-full bg-[#4d67ff]/10 text-[#4d67ff] text-sm font-medium mb-4">
            龙虾分类
          </span> */}
          <h2 className="text-3xl lg:text-4xl font-bold text-[#333333]">
            为你的龙虾注入<span className="text-gradient">灵魂</span>
          </h2>
          <p className="mt-3 text-[#666666] max-w-lg mx-auto">
            整理了市面上主流的适配龙虾的开源模型服务，按需选用
          </p>
        </div>

        {/* Cards Grid - 4 columns, 1:1 aspect ratio */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              onMouseEnter={() => setHoveredCard(category.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`relative aspect-square rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ${hoveredCard === category.id ? 'scale-[1.03] shadow-2xl' : 'shadow-lg'
                  }`}
                onClick={() => goToGuide(category.id)}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={category.image}
                    alt={category.name}
                    className={`w-full h-full object-cover transition-transform duration-700 ${hoveredCard === category.id ? 'scale-110' : 'scale-100'
                      }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-4 flex flex-col justify-end">
                  <div className="transform transition-transform duration-300">
                    <div className="text-2xl mb-1">{category.icon}</div>
                    <h3 className="text-sm lg:text-base font-bold text-white mb-1 leading-tight">
                      {category.name}
                    </h3>
                    <p className="text-white/70 text-xs">
                      {category.count} 款产品
                    </p>

                    <div
                      className={`flex items-center gap-1 text-white text-xs font-medium mt-2 transition-all duration-300 ${hoveredCard === category.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}
                    >
                      <span>查看产品</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>

                {/* Hover Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-[#4d67ff]/20 to-transparent transition-opacity duration-300 ${hoveredCard === category.id ? 'opacity-100' : 'opacity-0'
                    }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
