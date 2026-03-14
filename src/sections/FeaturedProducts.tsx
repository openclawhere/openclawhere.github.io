import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { featuredProducts } from '@/data/products';
import { useDocumentMeta } from '@/hooks/use-document-meta';
import { getProductScores } from '@/lib/score';

export default function FeaturedProducts() {
  useDocumentMeta({
    title: '龙虾产品大全',
    description: '基于 OpenClaw 生态的热门开源项目和产品服务，选择最适合你的龙虾产品。',
  });
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  return (
    <section id="featured" className="py-20 lg:py-28 bg-[#f0f0f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          {/* <span className="inline-block px-4 py-1.5 rounded-full bg-[#4d67ff]/10 text-[#4d67ff] text-sm font-medium mb-4">
            热门精选
          </span> */}
          <h2 className="text-3xl lg:text-4xl font-bold text-[#333333] mb-4">
            {/* <span className="text-gradient">龙虾</span> */}
            龙虾产品大全
          </h2>
          <p className="text-[#666666] max-w-2xl mx-auto">
            基于 OpenClaw 生态的热门开源项目和产品服务，选择最适合你的龙虾
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 transform-gpu"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Gradient Header */}
              <div className="relative aspect-video w-full bg-gradient-to-br from-[#4d67ff]/20 via-[#6b82ff]/10 to-[#f8f9ff] flex items-center justify-center">
                {product.image ? (
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                ) : (
                  <div className={`text-6xl transition-transform duration-500 ${hoveredProduct === product.id ? 'scale-125' : 'scale-100'
                    }`}>
                    {product.category === 'open-source' && '🦞'}
                    {product.category === 'cloud' && '☁️'}
                    {product.category === 'community' && '👥'}
                    {product.category === 'ecosystem' && '🔧'}
                  </div>
                )}
                {/* Overlay gradient to ensure text readability */}
                {product.image && <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />}

                {/* Visit Button replaces Heart */}
                {product.url && product.url.startsWith('http') && (
                  <a 
                    href={product.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md hover:shadow-lg transition-all group/visit"
                  >
                    <ExternalLink className="w-4 h-4 text-[#666666] group-hover/visit:text-[#4d67ff] transition-colors" />
                  </a>
                )}

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <Badge variant="outline" className="bg-white/90 text-[#333333] border-0">
                    {product.categoryName}
                  </Badge>
                </div>

                {/* Tags moved to Header Bottom */}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 pr-4">
                  {product.language && (
                    <span className="px-2 py-1 text-xs rounded-full bg-white/80 backdrop-blur-md text-[#4d67ff] font-medium shadow-sm">
                      {product.language}
                    </span>
                  )}
                  {product.features && (
                    <span className="px-2 py-1 text-xs rounded-full bg-white/60 backdrop-blur-md text-[#666666] line-clamp-1 shadow-sm">
                      {product.features}
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-[#333333] group-hover:text-[#4d67ff] transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                  </div>
                  <div className="text-right pl-2 shrink-0">
                    <div className="text-sm font-medium text-[#666666] bg-gray-50 px-2 py-1 rounded-md">
                      {product.company}
                    </div>
                  </div>
                </div>

                <p className="text-sm text-[#666666] line-clamp-2 mb-4">
                  {product.description}
                </p>

                {/* Multi-Dimensional Ratings */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex flex-col gap-1.5 text-[11px] text-[#666666] flex-1 pr-4">
                    <div className="flex items-center gap-2">
                      <span className="w-12 shrink-0">上手难度</span>
                      <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-400 rounded-full" 
                          style={{ width: `${(Number(getProductScores(product.id).difficulty) / 10) * 100}%` }}
                        />
                      </div>
                      <span className="w-5 font-medium text-right shrink-0">{getProductScores(product.id).difficulty}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-12 shrink-0">定制程度</span>
                      <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-indigo-400 rounded-full" 
                          style={{ width: `${(Number(getProductScores(product.id).customizability) / 10) * 100}%` }}
                        />
                      </div>
                      <span className="w-5 font-medium text-right shrink-0">{getProductScores(product.id).customizability}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-12 shrink-0">速度性能</span>
                      <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-emerald-400 rounded-full" 
                          style={{ width: `${(Number(getProductScores(product.id).speed) / 10) * 100}%` }}
                        />
                      </div>
                      <span className="w-5 font-medium text-right shrink-0">{getProductScores(product.id).speed}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-12 shrink-0">安全质量</span>
                      <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-purple-400 rounded-full" 
                          style={{ width: `${(Number(getProductScores(product.id).security) / 10) * 100}%` }}
                        />
                      </div>
                      <span className="w-5 font-medium text-right shrink-0">{getProductScores(product.id).security}</span>
                    </div>
                  </div>
                  
                  {/* Recommendation Index */}
                  <div className="flex flex-col items-center justify-center p-2 bg-gradient-to-br from-[#4d67ff]/5 to-[#4d67ff]/10 rounded-xl min-w-[70px] shrink-0">
                    <span className="text-xs text-[#666666] mb-0.5 scale-90">推荐指数</span>
                    <span className="text-xl font-bold text-[#4d67ff] leading-none">
                      {getProductScores(product.id).recommendation}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 border-[#4d67ff] text-[#4d67ff] hover:bg-[#4d67ff] hover:text-white transition-all"
            onClick={() => window.open('https://github.com/openclawhere/openclawhere.github.io/issues', '_blank')}
          >
            没有找到？提交新的产品
          </Button>
        </div>
      </div>
    </section>
  );
}
