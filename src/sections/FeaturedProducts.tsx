import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { featuredProducts } from '@/data/products';
import { useDocumentMeta } from '@/hooks/use-document-meta';

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
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              hoveredProduct={hoveredProduct}
              onHoverChange={setHoveredProduct}
            />
          ))}
        </div>

        {/* Submit New Product CTA */}
        <div className="mt-16 text-center border-t border-gray-200/60 pt-16">
          <h3 className="text-2xl font-bold text-[#333333] mb-3">你发现了优秀的龙虾产品？</h3>
          <p className="text-[#666666] mb-8 max-w-lg mx-auto">
            欢迎向我们提交你发现的有趣、有用的龙虾整机或相关开源硬件，一起丰富产品大全。
          </p>
          <Button
            size="lg"
            className="bg-[#4d67ff] hover:bg-[#3a4fcc] text-white rounded-full px-8 h-12 shadow-[0_8px_30px_rgb(77,103,255,0.3)] hover:shadow-xl transition-all hover:-translate-y-1 font-medium"
            onClick={() => window.open('https://github.com/openclawhere/openclawhere.github.io/issues', '_blank')}
          >
            没有找到？提交新的产品
          </Button>
        </div>
      </div>
    </section>
  );
}
