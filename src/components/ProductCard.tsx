import { ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { getProductScores } from '@/lib/score';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  variant?: 'featured' | 'guide';
  viewMode?: 'grid' | 'list';
  hoveredProduct?: string | null;
  onHoverChange?: (productId: string | null) => void;
}

export function ProductCard({ 
  product, 
  variant = 'featured',
  viewMode = 'grid',
  hoveredProduct,
  onHoverChange 
}: ProductCardProps) {
  const isHovered = hoveredProduct === product.id;
  const scores = getProductScores(product);

  // Guide variant with list mode support
  if (variant === 'guide') {
    return (
      <div
        className={`group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1 transform-gpu ${viewMode === 'list' ? 'flex gap-6 p-5' : 'flex flex-col'}`}
      >
        {/* Image Header */}
        {product.image ? (
          <div className={`${viewMode === 'list' ? 'w-[200px] sm:w-[240px] shrink-0 aspect-video rounded-xl overflow-hidden relative hidden sm:block' : 'w-full aspect-video overflow-hidden relative'} transform-gpu`}>
            <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          </div>
        ) : (
          <div className={`${viewMode === 'list' ? 'w-[200px] sm:w-[240px] shrink-0 aspect-video rounded-xl overflow-hidden relative bg-gradient-to-br from-[#4d67ff]/10 via-[#6b82ff]/5 to-[#f8f9ff] flex items-center justify-center text-5xl hidden sm:flex' : 'w-full aspect-video overflow-hidden relative bg-gradient-to-br from-[#4d67ff]/10 via-[#6b82ff]/5 to-[#f8f9ff] flex items-center justify-center text-6xl'} transition-transform duration-500 group-hover:scale-105 transform-gpu`}>
            {product.category.includes('开源项目') && '🦞'}
            {product.category.includes('云产品') && '☁️'}
            {product.category.includes('社区网站') && '👥'}
            {product.category.includes('生态工具') && '🔧'}
          </div>
        )}

        {/* Content Box */}
        <div className={`flex flex-col justify-between flex-1 ${viewMode === 'list' ? 'w-full' : 'p-5'}`}>
          
          {/* Header Section */}
          <div>
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-[#333333] group-hover:text-[#4d67ff] transition-colors truncate">
                  {product.name}
                </h3>
                <p className="text-sm text-[#666666]">{product.company}</p>
              </div>
              
              {/* Top Right Actions */}
              <div className="flex items-center gap-2 ml-4 flex-shrink-0">
                {product.url && product.url.startsWith('http') && (
                  <a 
                    href={product.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center hover:bg-[#4d67ff]/10 hover:text-[#4d67ff] text-[#666666] transition-colors"
                    title="访问产品"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              {product.category.map((cat, index) => (
                <Badge key={index} variant="outline" className="bg-gray-50 text-[#666666] border-gray-200 text-[10px] px-1.5 py-0 whitespace-nowrap">
                  {cat}
                </Badge>
              ))}
              {product.tags.slice(0, 3).map((tag, index) => (
                <span key={index} className="px-1.5 py-0.5 text-[10px] font-medium rounded-full bg-[#4d67ff]/10 text-[#4d67ff] whitespace-nowrap">
                  {tag}
                </span>
              ))}
              {product.status && (
                <span className="px-1.5 py-0.5 text-[10px] font-medium rounded-full bg-orange-50 text-orange-600">
                  {product.status}
                </span>
              )}
              {product.pricing && (
                <span className="px-1.5 py-0.5 text-[10px] font-medium rounded-full bg-green-50 text-green-600">
                  {product.pricing}
                </span>
              )}
              {product.features && (
                <span className="px-1.5 py-0.5 text-[10px] rounded-full bg-gray-100 text-[#666666] line-clamp-1 max-w-[150px]">
                  {product.features}
                </span>
              )}
            </div>

            <p className={`text-sm text-[#666666] mb-4 ${viewMode === 'grid' ? 'line-clamp-2' : ''}`}>
              {product.description}
            </p>
          </div>

          {/* Multi-Dimensional Ratings Footer */}
          <div className={`flex items-center justify-between pt-4 border-t border-gray-100 mt-auto ${viewMode === 'list' && 'mt-0 border-t-0 pt-0'}`}>
            {/* Radar/Dimensions */}
            <div className={`flex flex-col gap-1.5 text-[11px] text-[#666666] flex-1 pr-4 ${viewMode === 'list' && 'md:flex-row md:gap-6 md:items-center'}`}>
              <div className="flex items-center gap-2 flex-1">
                <span className="w-12 shrink-0">上手难度</span>
                <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-400 rounded-full" 
                    style={{ width: `${(Number(scores.difficulty) / 10) * 100}%` }}
                  />
                </div>
                <span className="w-5 font-medium text-right shrink-0">{scores.difficulty}</span>
              </div>
              <div className="flex items-center gap-2 flex-1">
                <span className="w-12 shrink-0">定制程度</span>
                <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-indigo-400 rounded-full" 
                    style={{ width: `${(Number(scores.customizability) / 10) * 100}%` }}
                  />
                </div>
                <span className="w-5 font-medium text-right shrink-0">{scores.customizability}</span>
              </div>
              <div className="flex items-center gap-2 flex-1">
                <span className="w-12 shrink-0">速度性能</span>
                <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-emerald-400 rounded-full" 
                    style={{ width: `${(Number(scores.speed) / 10) * 100}%` }}
                  />
                </div>
                <span className="w-5 font-medium text-right shrink-0">{scores.speed}</span>
              </div>
              <div className="flex items-center gap-2 flex-1">
                <span className="w-12 shrink-0">安全质量</span>
                <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-purple-400 rounded-full" 
                    style={{ width: `${(Number(scores.security) / 10) * 100}%` }}
                  />
                </div>
                <span className="w-5 font-medium text-right shrink-0">{scores.security}</span>
              </div>
            </div>
            
            {/* Recommendation Index - Enlarged */}
            <div className={`flex flex-col items-center justify-center p-3 bg-gradient-to-br from-[#4d67ff]/5 to-[#4d67ff]/10 rounded-xl min-w-[80px] shrink-0 ml-4 ${viewMode === 'list' && 'md:ml-8 md:min-w-[90px]'}`}>
              <span className="text-xs text-[#666666] mb-1">推荐指数</span>
              <span className={`text-3xl font-bold text-[#4d67ff] leading-none ${viewMode === 'list' && 'text-4xl'}`}>
                {scores.recommendation}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Featured variant (default)
  return (
    <div
      className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 transform-gpu"
      onMouseEnter={() => onHoverChange?.(product.id)}
      onMouseLeave={() => onHoverChange?.(null)}
    >
      {/* Image Header */}
      <div className="relative aspect-video w-full bg-gradient-to-br from-[#4d67ff]/20 via-[#6b82ff]/10 to-[#f8f9ff] flex items-center justify-center">
        {product.image ? (
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
        ) : (
          <div className={`text-6xl transition-transform duration-500 ${isHovered ? 'scale-125' : 'scale-100'}`}>
            {product.category.includes('开源项目') && '🦞'}
            {product.category.includes('云产品') && '☁️'}
            {product.category.includes('社区网站') && '👥'}
            {product.category.includes('生态工具') && '🔧'}
          </div>
        )}
        
        {/* Overlay gradient */}
        {product.image && (
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
        )}

        {/* Visit Button */}
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

        {/* Category Badges */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          {product.category.slice(0, 2).map((cat, index) => (
            <Badge key={index} variant="outline" className="bg-white/90 text-[#333333] border-0 whitespace-nowrap">
              {cat}
            </Badge>
          ))}
        </div>

        {/* Tags */}
        <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 pr-4 max-w-[calc(100%-2rem)]">
          {product.tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="px-2 py-1 text-xs rounded-full bg-white/80 backdrop-blur-md text-[#4d67ff] font-medium shadow-sm whitespace-nowrap">
              {tag}
            </span>
          ))}
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
          {/* Radar/Dimensions */}
          <div className="flex flex-col gap-1.5 text-[11px] text-[#666666] flex-1 pr-4">
            <div className="flex items-center gap-2">
              <span className="w-12 shrink-0">上手难度</span>
              <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-400 rounded-full" 
                  style={{ width: `${(Number(scores.difficulty) / 10) * 100}%` }}
                />
              </div>
              <span className="w-5 font-medium text-right shrink-0">{scores.difficulty}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-12 shrink-0">定制程度</span>
              <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-indigo-400 rounded-full" 
                  style={{ width: `${(Number(scores.customizability) / 10) * 100}%` }}
                />
              </div>
              <span className="w-5 font-medium text-right shrink-0">{scores.customizability}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-12 shrink-0">速度性能</span>
              <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-emerald-400 rounded-full" 
                  style={{ width: `${(Number(scores.speed) / 10) * 100}%` }}
                />
              </div>
              <span className="w-5 font-medium text-right shrink-0">{scores.speed}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-12 shrink-0">安全质量</span>
              <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-purple-400 rounded-full" 
                  style={{ width: `${(Number(scores.security) / 10) * 100}%` }}
                />
              </div>
              <span className="w-5 font-medium text-right shrink-0">{scores.security}</span>
            </div>
          </div>
          
          {/* Recommendation Index - Enlarged */}
          <div className="flex flex-col items-center justify-center p-3 bg-gradient-to-br from-[#4d67ff]/5 to-[#4d67ff]/10 rounded-xl min-w-[80px] shrink-0">
            <span className="text-xs text-[#666666] mb-1">推荐指数</span>
            <span className="text-3xl font-bold text-[#4d67ff] leading-none">
              {scores.recommendation}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
