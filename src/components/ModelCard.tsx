import { ExternalLink, Database, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { getDomain } from '@/lib/utils';

interface ModelProps {
  id: string;
  name: string;
  company: string;
  category: string[];
  description: string;
  url?: string;
  tags: string[];
}

interface ModelCardProps {
  model: ModelProps;
}

export function ModelCard({ model }: ModelCardProps) {
  const domain = getDomain(model.url);

  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100/50 flex flex-col h-full transform-gpu hover:-translate-y-1">
      {/* Decorative top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4d67ff] via-[#a3b1ff] to-[#4d67ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Header Section */}
      <div className="p-6 pb-4 relative overflow-hidden bg-gradient-to-b from-gray-50/80 to-transparent">
        {/* Background icon decoration */}
        <div className="absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br from-[#4d67ff]/5 to-transparent rounded-full blur-xl group-hover:bg-[#4d67ff]/10 transition-colors duration-500" />
        
        <div className="relative flex justify-between items-start z-10">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              {domain ? (
                <img 
                  src={`https://favicon.im/${domain}`} 
                  alt={`${model.name} logo`} 
                  className="w-6 h-6 rounded-md object-contain bg-white shrink-0"
                  onError={(evt) => {
                    // Fallback to emoji if favicon fails
                    evt.currentTarget.style.display = 'none';
                    if (evt.currentTarget.nextElementSibling) {
                      (evt.currentTarget.nextElementSibling as HTMLElement).style.display = 'inline-block';
                    }
                  }}
                />
              ) : null}
              <span 
                className="text-2xl" 
                style={{ display: domain ? 'none' : 'inline-block' }}
              >
                {model.category.includes('云产品') ? '☁️' : '📦'}
              </span>
              <Badge variant="secondary" className="bg-[#4d67ff]/10 text-[#4d67ff] hover:bg-[#4d67ff]/20 border-0 font-medium whitespace-nowrap text-xs">
                {model.company}
              </Badge>
              {model.category.includes('免费') && (
                <Badge variant="outline" className="border-green-200 text-green-600 bg-green-50 font-medium whitespace-nowrap text-xs px-2">
                  有免费额度
                </Badge>
              )}
            </div>
            
            <h3 className="text-xl font-bold text-[#333333] group-hover:text-[#4d67ff] transition-colors line-clamp-1 mt-1">
              {model.name}
            </h3>
          </div>
          
          {model.url && (
            <a 
              href={model.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-[#666666] hover:text-[#4d67ff] hover:shadow-md transition-all shrink-0 hover:rotate-12"
              title={`访问 ${model.name} 官网`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <div className="px-6 flex-grow">
        <p className="text-sm text-[#666666] leading-relaxed line-clamp-3">
          {model.description}
        </p>
      </div>

      {/* Tags Section */}
      <div className="p-6 pt-4 mt-auto">
        <div className="flex flex-wrap gap-1.5">
          {model.tags.map((tag) => {
            // Determine icon and color based on tag content
            const isPerf = tag.includes('推理') || tag.includes('速度');
            const Icon = isPerf ? Zap : Database;
            const bgClass = isPerf ? 'bg-amber-50 text-amber-600 border-amber-100' : 'bg-blue-50/50 text-[#4d67ff] border-blue-100';
            
            return (
              <span key={tag} className={`px-2.5 py-1 text-xs rounded-md border flex items-center gap-1 font-medium transition-colors ${bgClass}`}>
                {isPerf && <Icon className="w-3 h-3" />}
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
