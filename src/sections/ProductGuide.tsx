import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, Search, SlidersHorizontal, X, ChevronDown, Grid3X3, List, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { products, categories, tagFilters, statusFilters } from '@/data/products';
import { useDocumentMeta } from '@/hooks/use-document-meta';
import { getProductScores } from '@/lib/score';

export default function ProductGuide() {
  useDocumentMeta({
    title: '探索 OpenClaw 生态',
    description: '从开源项目到云端服务，从社区网站到技能市场，一站式发现 OpenClaw 生态全景，智能筛选龙虾产品。',
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'stars'>('name');

  // Read category from URL search params
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');

  // Initialize selectedCategories from URL param, allow user override
  const [selectedCategories, setSelectedCategories] = useState<string[]>(() => {
    const param = new URLSearchParams(window.location.search).get('category');
    return param ? [param] : [];
  });

  // Show filters panel if category param exists
  const shouldShowFilters = showFilters || !!categoryParam;

  // Derive filtered products with useMemo instead of useEffect + setState
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        p =>
          p.name.toLowerCase().includes(query) ||
          p.company.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      );
    }

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.category));
    }

    // Tag filter
    if (selectedTags.length > 0) {
      result = result.filter(p =>
        selectedTags.some(t => p.tags.includes(t))
      );
    }

    // Status filter
    if (selectedStatuses.length > 0) {
      result = result.filter(p => {
        if (selectedStatuses.includes('beta') && p.status) return true;
        if (selectedStatuses.includes('released') && !p.status) return true;
        return false;
      });
    }

    // Sort
    result.sort((a, b) => {
      switch (sortBy) {
        case 'stars': {
          const aStars = parseInt((a.stars || '0').replace(/[^0-9]/g, '')) || 0;
          const bStars = parseInt((b.stars || '0').replace(/[^0-9]/g, '')) || 0;
          return bStars - aStars;
        }
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return result;
  }, [searchQuery, selectedCategories, selectedTags, selectedStatuses, sortBy]);

  const toggleFilter = (
    value: string,
    selected: string[],
    setSelected: (values: string[]) => void
  ) => {
    if (selected.includes(value)) {
      setSelected(selected.filter(v => v !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategories([]);
    setSelectedTags([]);
    setSelectedStatuses([]);
  };

  const activeFiltersCount =
    selectedCategories.length +
    selectedTags.length +
    selectedStatuses.length;

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
            从开源项目到云端服务，从社区网站到技能市场，一站式发现 OpenClaw 生态全景
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-4 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#666666]" />
              <Input
                placeholder="搜索产品、公司或描述..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 rounded-xl border-gray-200 focus:border-[#4d67ff] focus:ring-[#4d67ff]"
              />
            </div>

            {/* Filter Toggle */}
            <Button
              variant="outline"
              className={`h-12 px-6 rounded-xl border-2 ${shouldShowFilters
                ? 'border-[#4d67ff] text-[#4d67ff]'
                : 'border-gray-200 text-[#666666]'
                }`}
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="w-5 h-5 mr-2" />
              筛选
              {activeFiltersCount > 0 && (
                <span className="ml-2 px-2 py-0.5 rounded-full bg-[#4d67ff] text-white text-xs">
                  {activeFiltersCount}
                </span>
              )}
            </Button>

            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'name' | 'stars')}
                className="h-12 px-4 pr-10 rounded-xl border-2 border-gray-200 text-[#666666] focus:border-[#4d67ff] focus:outline-none appearance-none bg-white cursor-pointer"
              >
                <option value="name">按名称</option>
                <option value="stars">按星数</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#666666] pointer-events-none" />
            </div>

            {/* View Mode */}
            <div className="flex gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="icon"
                className={`h-12 w-12 rounded-xl ${viewMode === 'grid'
                  ? 'bg-[#4d67ff] text-white'
                  : 'border-gray-200 text-[#666666]'
                  }`}
                onClick={() => setViewMode('grid')}
              >
                <Grid3X3 className="w-5 h-5" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="icon"
                className={`h-12 w-12 rounded-xl ${viewMode === 'list'
                  ? 'bg-[#4d67ff] text-white'
                  : 'border-gray-200 text-[#666666]'
                  }`}
                onClick={() => setViewMode('list')}
              >
                <List className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Filter Panel */}
          {shouldShowFilters && (
            <div className="mt-6 pt-6 border-t border-gray-100 animate-slide-up">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Category Filter */}
                <div>
                  <h4 className="font-semibold text-[#333333] mb-3">分类</h4>
                  <div className="space-y-2">
                    {categories.map((cat) => (
                      <label
                        key={cat.id}
                        className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
                      >
                        <Checkbox
                          checked={selectedCategories.includes(cat.id)}
                          onCheckedChange={() =>
                            toggleFilter(cat.id, selectedCategories, setSelectedCategories)
                          }
                        />
                        <span className="text-sm text-[#666666]">{cat.name}</span>
                        <span className="text-xs text-[#999999] ml-auto">({cat.count})</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Tag Filter */}
                <div>
                  <h4 className="font-semibold text-[#333333] mb-3">标签</h4>
                  <div className="space-y-2">
                    {tagFilters.map((tag) => (
                      <label
                        key={tag.id}
                        className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
                      >
                        <Checkbox
                          checked={selectedTags.includes(tag.id)}
                          onCheckedChange={() =>
                            toggleFilter(tag.id, selectedTags, setSelectedTags)
                          }
                        />
                        <span className="text-sm text-[#666666]">{tag.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Status Filter */}
                <div>
                  <h4 className="font-semibold text-[#333333] mb-3">状态</h4>
                  <div className="space-y-2">
                    {statusFilters.map((s) => (
                      <label
                        key={s.id}
                        className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
                      >
                        <Checkbox
                          checked={selectedStatuses.includes(s.id)}
                          onCheckedChange={() =>
                            toggleFilter(s.id, selectedStatuses, setSelectedStatuses)
                          }
                        />
                        <span className="text-sm text-[#666666]">{s.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

              </div>

              {/* Clear Filters */}
              {activeFiltersCount > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearFilters}
                    className="text-[#666666] hover:text-[#4d67ff]"
                  >
                    <X className="w-4 h-4 mr-1" />
                    清除所有筛选
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-[#666666]">
            找到 <span className="font-semibold text-[#333333]">{filteredProducts.length}</span> 个产品/项目
          </p>
          {activeFiltersCount > 0 && (
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#666666]">已应用筛选:</span>
              {selectedCategories.map((cat) => (
                <Badge
                  key={cat}
                  variant="secondary"
                  className="cursor-pointer hover:bg-red-100"
                  onClick={() => toggleFilter(cat, selectedCategories, setSelectedCategories)}
                >
                  {categories.find(c => c.id === cat)?.name}
                  <X className="w-3 h-3 ml-1" />
                </Badge>
              ))}
            </div>
          )}
        </div>

        {/* Products Grid/List */}
        <div
          className={
            viewMode === 'grid'
              ? 'grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
              : 'space-y-4'
          }
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1 transform-gpu ${viewMode === 'list' ? 'flex gap-6 p-5' : 'flex flex-col'
                }`}
            >
              {/* Image Header */}
              {product.image ? (
                <div className={`${viewMode === 'list' ? 'w-[200px] sm:w-[240px] shrink-0 aspect-video rounded-xl overflow-hidden relative hidden sm:block' : 'w-full aspect-video overflow-hidden relative'} transform-gpu`}>
                   <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
              ) : (
                <div className={`${viewMode === 'list' ? 'w-[200px] sm:w-[240px] shrink-0 aspect-video rounded-xl overflow-hidden relative bg-gradient-to-br from-[#4d67ff]/10 via-[#6b82ff]/5 to-[#f8f9ff] flex items-center justify-center text-5xl hidden sm:flex' : 'w-full aspect-video overflow-hidden relative bg-gradient-to-br from-[#4d67ff]/10 via-[#6b82ff]/5 to-[#f8f9ff] flex items-center justify-center text-6xl'} transition-transform duration-500 group-hover:scale-105 transform-gpu`}>
                   {product.category === 'open-source' && '🦞'}
                   {product.category === 'cloud' && '☁️'}
                   {product.category === 'community' && '👥'}
                   {product.category === 'ecosystem' && '🔧'}
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

                  {/* Tags (moved below header) */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="outline" className="bg-gray-50 text-[#666666] border-gray-200 text-[10px] px-1.5 py-0">
                      {product.categoryName}
                    </Badge>
                    {product.language && (
                      <span className="px-1.5 py-0.5 text-[10px] font-medium rounded-full bg-[#4d67ff]/10 text-[#4d67ff]">
                        {product.language}
                      </span>
                    )}
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
                          style={{ width: `${(Number(getProductScores(product.id).difficulty) / 10) * 100}%` }}
                        />
                      </div>
                      <span className="w-5 font-medium text-right shrink-0">{getProductScores(product.id).difficulty}</span>
                    </div>
                    <div className="flex items-center gap-2 flex-1">
                      <span className="w-12 shrink-0">定制程度</span>
                      <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-indigo-400 rounded-full" 
                          style={{ width: `${(Number(getProductScores(product.id).customizability) / 10) * 100}%` }}
                        />
                      </div>
                      <span className="w-5 font-medium text-right shrink-0">{getProductScores(product.id).customizability}</span>
                    </div>
                    <div className="flex items-center gap-2 flex-1">
                      <span className="w-12 shrink-0">速度性能</span>
                      <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-emerald-400 rounded-full" 
                          style={{ width: `${(Number(getProductScores(product.id).speed) / 10) * 100}%` }}
                        />
                      </div>
                      <span className="w-5 font-medium text-right shrink-0">{getProductScores(product.id).speed}</span>
                    </div>
                    <div className="flex items-center gap-2 flex-1">
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
                  <div className={`flex flex-col items-center justify-center p-2 bg-gradient-to-br from-[#4d67ff]/5 to-[#4d67ff]/10 rounded-xl min-w-[70px] shrink-0 ml-4 ${viewMode === 'list' && 'md:ml-8 md:min-w-[90px]'}`}>
                    <span className="text-xs text-[#666666] mb-0.5 scale-90">推荐指数</span>
                    <span className={`text-xl font-bold text-[#4d67ff] leading-none ${viewMode === 'list' && 'text-2xl'}`}>
                      {getProductScores(product.id).recommendation}
                    </span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <Filter className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#333333] mb-2">没有找到符合条件的产品</h3>
            <p className="text-[#666666] mb-6">尝试调整筛选条件或搜索关键词</p>
            <Button onClick={clearFilters} className="bg-[#4d67ff] hover:bg-[#3a4fcc]">
              清除所有筛选
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
