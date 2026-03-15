import type { Product } from '@/data/products';

export function getProductScores(product?: Product) {
  // Use product's actual stars data if available, otherwise use defaults
  const defaultStars = {
    difficulty: 7.0,
    customizability: 7.0,
    speed: 7.0,
    security: 7.0
  };
  
  // Merge with defaults to handle partial or missing stars
  const stars = {
    ...defaultStars,
    ...(product?.stars || {})
  };
  
  const recommendIndex = ((stars.difficulty + stars.customizability + stars.speed + stars.security) / 4).toFixed(1);
  
  return {
    difficulty: stars.difficulty.toFixed(1),
    customizability: stars.customizability.toFixed(1),
    speed: stars.speed.toFixed(1),
    security: stars.security.toFixed(1),
    recommendation: recommendIndex
  };
}
