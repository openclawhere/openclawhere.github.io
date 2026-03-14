import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Star, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { featuredProducts } from '@/data/products';
import { useDocumentMeta } from '@/hooks/use-document-meta';

export default function FeaturedProducts() {
  useDocumentMeta({
    title: '龙虾产品大全',
    description: '基于 OpenClaw 生态的热门开源项目和产品服务，选择最适合你的龙虾产品。',
  });
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [likedProducts, setLikedProducts] = useState<Set<string>>(new Set());
  const navigate = useNavigate();

  const toggleLike = (productId: string) => {
    setLikedProducts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  };

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
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Gradient Header */}
              <div className="relative h-40 bg-gradient-to-br from-[#4d67ff]/20 via-[#6b82ff]/10 to-[#f8f9ff] overflow-hidden flex items-center justify-center">
                <div className={`text-6xl transition-transform duration-500 ${hoveredProduct === product.id ? 'scale-125' : 'scale-100'
                  }`}>
                  {product.category === 'open-source' && '🦞'}
                  {product.category === 'cloud' && '☁️'}
                  {product.category === 'community' && '👥'}
                  {product.category === 'ecosystem' && '🔧'}
                </div>

                {/* Like Button */}
                <button
                  onClick={() => toggleLike(product.id)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md hover:shadow-lg transition-all"
                >
                  <Heart
                    className={`w-5 h-5 transition-colors ${likedProducts.has(product.id)
                      ? 'fill-red-500 text-red-500'
                      : 'text-[#666666]'
                      }`}
                  />
                </button>

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isDomestic ? (
                    <Badge className="bg-[#4d67ff] text-white border-0">国内</Badge>
                  ) : (
                    <Badge variant="secondary" className="bg-white/90 text-[#666666] border-0">国际</Badge>
                  )}
                  <Badge variant="outline" className="bg-white/90 text-[#333333] border-0">
                    {product.categoryName}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-[#333333] group-hover:text-[#4d67ff] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-[#666666]">{product.company}</p>
                  </div>
                  {product.stars && (
                    <div className="text-right">
                      <div className="text-lg font-bold text-[#4d67ff]">
                        ⭐ {product.stars}
                      </div>
                    </div>
                  )}
                </div>

                <p className="text-sm text-[#666666] line-clamp-2 mb-4">
                  {product.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.language && (
                    <span className="px-2 py-1 text-xs rounded-full bg-[#4d67ff]/10 text-[#4d67ff]">
                      {product.language}
                    </span>
                  )}
                  {product.features && (
                    <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-[#666666] line-clamp-1">
                      {product.features}
                    </span>
                  )}
                </div>

                {/* Action */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'
                          }`}
                      />
                    ))}
                  </div>
                  {product.url && product.url.startsWith('http') && (
                    <a href={product.url} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-[#4d67ff] hover:text-[#3a4fcc] hover:bg-[#4d67ff]/10"
                      >
                        <ExternalLink className="w-3.5 h-3.5 mr-1" />
                        访问
                      </Button>
                    </a>
                  )}
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
            onClick={() => navigate('/ecosystem')}
          >
            查看全部 31 个龙虾产品
          </Button>
        </div>
      </div>
    </section>
  );
}
