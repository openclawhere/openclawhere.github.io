import { useState, useMemo } from 'react';
import { Filter, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { products } from '@/data/products';
import { useDocumentMeta } from '@/hooks/use-document-meta';
import { WebsiteCard } from '@/components/WebsiteCard';

export default function ProductGuide() {
  useDocumentMeta({
    title: '探索 OpenClaw 生态 - 31+ AI 智能体产品',
    description: '从开源项目到云端服务，从社区网站到技能市场，一站式发现 OpenClaw 生态全景，智能筛选 AI 智能体产品，找到最适合你的解决方案。',
  });
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Extract all unique categories
  const allCategories = useMemo(() => {
    const categories = new Set<string>();
    products.forEach(p => p.category.forEach(c => categories.add(c)));
    return Array.from(categories).sort();
  }, []);

  // Extract all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    products.forEach(p => p.tags.forEach(t => tags.add(t)));
    return Array.from(tags).sort();
  }, []);

  // Derive filtered products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase().trim();
      if (query) {
        result = result.filter(
          p =>
            p.name.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query)
        );
      }
    }

    // Category filter (OR logic)
    if (selectedCategories.length > 0) {
      result = result.filter(p =>
        selectedCategories.some(c => p.category.includes(c))
      );
    }

    // Tag filter (OR logic)
    if (selectedTags.length > 0) {
      result = result.filter(p =>
        selectedTags.some(t => p.tags.includes(t))
      );
    }

    // Sort by name
    result.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

    return result;
  }, [selectedCategories, selectedTags, searchQuery]);

  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategories([]);
    setSelectedTags([]);
  };

  const activeFiltersCount = selectedCategories.length + selectedTags.length;

  return (
    <section id="guide" className="py-20 lg:py-28 bg-[#f0f0f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          {/* <span className="inline-block px-4 py-1.5 rounded-full bg-[#4d67ff]/10 text-[#4d67ff] text-sm font-medium mb-4">
            产品导航
          </span> */}
          <h2 className="text-3xl lg:text-4xl font-bold text-[#333333] mb-4">
            探索 <span className="text-gradient">OpenClaw 生态</span>
          </h2>
          <p className="text-[#666666] max-w-2xl mx-auto">
            从社区网站到生态工具，一站式发现 OpenClaw 活跃生态
          </p>
        </div>

        {/* Filter Bar */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8 border border-gray-100 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <div className="flex flex-col gap-4 flex-1">
            {/* Categories */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium text-[#666666] mr-2 min-w-[60px]">分类:</span>
              {allCategories.map((category) => {
                const isActive = selectedCategories.includes(category);
                return (
                  <button
                    key={category}
                    onClick={() => toggleCategory(category)}
                    className={`px-4 py-1.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-[#4d67ff] text-white shadow-md hover:-translate-y-0.5'
                        : 'bg-gray-50 text-[#666666] hover:bg-gray-100 hover:text-[#333333]'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium text-[#666666] mr-2 min-w-[60px]">标签:</span>
              {allTags.map((tag) => {
                const isActive = selectedTags.includes(tag);
                return (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-4 py-1.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-[#4d67ff] text-white shadow-md hover:-translate-y-0.5'
                        : 'bg-gray-50 text-[#666666] hover:bg-gray-100 hover:text-[#333333]'
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Search */}
          <div className="relative shrink-0 w-full md:w-64 self-start md:self-center">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="搜索站点名称或描述..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 h-11 rounded-xl border-gray-200 focus:border-[#4d67ff] focus:ring-[#4d67ff] bg-gray-50/50 focus:bg-white transition-colors"
            />
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-[#666666]">
            找到 <span className="font-semibold text-[#333333]">{filteredProducts.length}</span> 个站点
          </p>
          {activeFiltersCount > 0 && (
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm text-[#666666]">已选择:</span>
              {selectedCategories.map((category) => (
                <Badge
                  key={`cat-${category}`}
                  variant="secondary"
                  className="cursor-pointer hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-colors bg-white border border-gray-200"
                  onClick={() => toggleCategory(category)}
                >
                  <span className="text-xs text-blue-500 mr-1">分类</span>
                  {category}
                  <X className="w-3 h-3 ml-1" />
                </Badge>
              ))}
              {selectedTags.map((tag) => (
                <Badge
                  key={`tag-${tag}`}
                  variant="secondary"
                  className="cursor-pointer hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-colors bg-white border border-gray-200"
                  onClick={() => toggleTag(tag)}
                >
                  <span className="text-xs text-gray-400 mr-1">标签</span>
                  {tag}
                  <X className="w-3 h-3 ml-1" />
                </Badge>
              ))}
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="text-[#666666] hover:text-[#4d67ff] h-6 px-2 text-xs"
              >
                清除
              </Button>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <WebsiteCard
              key={product.id}
              website={product}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm mb-12">
            <Filter className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#333333] mb-2">没有找到符合条件的站点</h3>
            <p className="text-[#666666] mb-6">尝试取消部分标签过滤</p>
            <Button onClick={clearFilters} className="bg-[#4d67ff] hover:bg-[#3a4fcc] rounded-xl px-6">
              清除过滤选项
            </Button>
          </div>
        )}

        {/* Submit New Site */}
        <div className="mt-16 text-center border-t border-gray-200/60 pt-16">
          <h3 className="text-2xl font-bold text-[#333333] mb-3">你发现了优秀的 OpenClaw 生态站点？</h3>
          <p className="text-[#666666] mb-8 max-w-lg mx-auto">
            欢迎向我们提交你发现的有趣、有用的开源项目或社区网站，一起共建活力龙虾圈。
          </p>
          <Button 
            size="lg"
            className="bg-[#4d67ff] hover:bg-[#3a4fcc] text-white rounded-full px-8 h-12 shadow-[0_8px_30px_rgb(77,103,255,0.3)] hover:shadow-xl transition-all hover:-translate-y-1 font-medium"
            onClick={() => window.open('https://github.com/openclawhere/openclawhere.github.io/issues', '_blank')}
          >
            没有找到？提交新站点
          </Button>
        </div>
      </div>
    </section>
  );
}
