import { ExternalLink } from 'lucide-react';
import type { WebSite } from '@/data/products';

interface WebsiteCardProps {
  website: WebSite;
  viewMode?: 'grid' | 'list';
}

export function WebsiteCard({ website, viewMode = 'grid' }: WebsiteCardProps) {
  // A generic fallback pattern based on the website name length/chars
  // This creates a nice abstract SVG pattern for sites without images
  const fallbackImage = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%234d67ff22"/><stop offset="100%" stop-color="%236b82ff11"/></linearGradient><pattern id="p" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="2" fill="%234d67ff33"/></pattern></defs><rect width="600" height="400" fill="url(%23g)"/><rect width="600" height="400" fill="url(%23p)"/><text x="50%" y="50%" font-family="sans-serif" font-size="48" font-weight="bold" fill="%234d67ff44" text-anchor="middle" dominant-baseline="middle">${encodeURIComponent(website.name.substring(0, 2))}</text></svg>`;

  const displayImage = website.image || fallbackImage;

  if (viewMode === 'list') {
    return (
      <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 transform-gpu flex gap-6 p-4 md:p-5 border border-gray-100/50">
        {/* Left Thumbnail Panel */}
        <div className="w-[160px] md:w-[200px] shrink-0 aspect-video rounded-xl overflow-hidden relative bg-gray-50 border border-gray-100/50 block">
            <img 
              src={displayImage} 
              alt={`${website.name} screenshot`} 
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 pointer-events-none" />
            
            {/* Top Left: Category */}
            <div className="absolute top-2 left-2 flex gap-1">
              {website.category.map((cat, index) => (
                <span key={index} className="px-2 py-0.5 rounded-md bg-white/90 backdrop-blur-sm text-[#4d67ff] font-semibold text-[10px] shadow-sm">
                  {cat}
                </span>
              ))}
            </div>

            {/* Top Right: External Link */}
            {website.url && (
              <a 
                href={website.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/90 backdrop-blur-sm shadow-sm flex items-center justify-center text-[#333333] hover:bg-[#4d67ff] hover:text-white transition-all hover:scale-110 z-10"
                title={`访问 ${website.name} 官网`}
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {/* Bottom Left: Tags */}
            <div className="absolute bottom-2 left-2 right-2 flex flex-wrap gap-1">
              {website.tags.slice(0, 3).map((tag, index) => (
                <span key={index} className="px-1.5 py-0.5 text-[9px] font-medium rounded text-white bg-black/40 backdrop-blur-md border border-white/20 whitespace-nowrap">
                  {tag}
                </span>
              ))}
            </div>
        </div>

        {/* Content Box */}
        <div className="flex flex-col justify-center flex-1 min-w-0 py-2">
          <h3 className="text-xl font-bold text-[#333333] group-hover:text-[#4d67ff] transition-colors truncate mb-2">
            {website.name}
          </h3>
          <p className="text-sm text-[#666666] line-clamp-3">
            {website.description}
          </p>
        </div>
      </div>
    );
  }

  // Grid variant
  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100/50 flex flex-col h-full transform-gpu hover:-translate-y-1">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4d67ff] via-[#a3b1ff] to-[#4d67ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
      
      {/* Thumbnail Area */}
      <div className="w-full aspect-video overflow-hidden relative bg-gray-50 shrink-0">
        <img 
          src={displayImage} 
          alt={`${website.name} screenshot`}
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 pointer-events-none" />
        
        {/* Top Left: Category */}
        <div className="absolute top-3 left-3 flex gap-1.5 z-10">
          {website.category.map((cat, index) => (
            <span key={index} className="px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-sm text-[#4d67ff] font-bold text-xs shadow-sm shadow-black/5">
              {cat}
            </span>
          ))}
        </div>

        {/* Top Right: External Link */}
        {website.url && (
          <a 
            href={website.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm shadow-sm flex items-center justify-center text-[#333333] hover:bg-[#4d67ff] hover:text-white transition-all hover:scale-110 z-10"
            title={`访问 ${website.name} 官网`}
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}

        {/* Bottom Left: Tags */}
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5 pr-3 z-10">
          {website.tags.map((tag, index) => (
            <span key={index} className="px-2 py-0.5 text-[10px] font-medium rounded text-white bg-black/40 backdrop-blur-md border border-white/20 whitespace-nowrap shadow-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-[#333333] group-hover:text-[#4d67ff] transition-colors line-clamp-1 mb-3">
          {website.name}
        </h3>
        <p className="text-sm text-[#666666] leading-relaxed line-clamp-3">
          {website.description}
        </p>
      </div>
    </div>
  );
}
