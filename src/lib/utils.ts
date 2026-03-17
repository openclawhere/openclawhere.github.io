import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getDomain(url?: string) {
  if (!url) return null;
  try {
    return new URL(url).hostname;
  } catch {
    return null;
  }
}

const categoryEmojiMap: Record<string, string> = {
  '开源项目': '🦞',
  '云产品': '☁️',
  '社区网站': '👥',
  '生态工具': '🔧',
  '模型': '🤖',
  '资源': '📦'
};

export function getCategoryEmoji(categories: string[], fallbackEmoji = '📦'): string {
  for (const cat of categories) {
    if (categoryEmojiMap[cat]) {
      return categoryEmojiMap[cat];
    }
  }
  return fallbackEmoji;
}
