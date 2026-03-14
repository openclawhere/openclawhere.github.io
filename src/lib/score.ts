export function getProductScores(id: string) {
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = (hash << 5) - hash + id.charCodeAt(i);
    hash |= 0;
  }
  
  const absHash = Math.abs(hash);
  
  // Generate scores between 7.0 and 9.9 (10-point scale)
  const difficulty = 7.0 + ((absHash % 30) / 10); 
  const customizability = 7.0 + (((absHash >> 2) % 30) / 10);
  const speed = 7.0 + (((absHash >> 4) % 30) / 10);
  const security = 7.0 + (((absHash >> 6) % 30) / 10);
  
  // Average recommendation index
  const recommendIndex = ((difficulty + customizability + speed + security) / 4).toFixed(1);
  
  return {
    difficulty: difficulty.toFixed(1),
    customizability: customizability.toFixed(1),
    speed: speed.toFixed(1),
    security: security.toFixed(1),
    recommendation: recommendIndex
  };
}
