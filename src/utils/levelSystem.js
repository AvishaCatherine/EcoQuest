export const LEVEL_TIERS = [
  { minXP: 0, maxXP: 199, name: 'Eco Beginner', badge: '🌱', nextAt: 200 },
  { minXP: 200, maxXP: 499, name: 'Green Starter', badge: '🌿', nextAt: 500 },
  { minXP: 500, maxXP: 999, name: 'Eco Explorer', badge: '🧭', nextAt: 1000 },
  { minXP: 1000, maxXP: 1499, name: 'Planet Protector', badge: '🛡️', nextAt: 1500 },
  { minXP: 1500, maxXP: Infinity, name: 'Eco Champion', badge: '👑', nextAt: null }
];

export function getLevelInfo(xp) {
  const currentXP = Math.max(0, Number(xp) || 0);
  
  for (let i = 0; i < LEVEL_TIERS.length; i++) {
    const tier = LEVEL_TIERS[i];
    if (currentXP <= tier.maxXP) {
      const nextTier = LEVEL_TIERS[i + 1] || null;
      const min = tier.minXP;
      const target = tier.nextAt;
      
      let progressPercent = 100;
      let xpToNext = 0;
      
      if (target) {
        const range = target - min;
        const progressInRange = currentXP - min;
        progressPercent = Math.min(100, Math.max(0, Math.round((progressInRange / range) * 100)));
        xpToNext = Math.max(0, target - currentXP);
      }
      
      return {
        level: tier.name,
        badge: tier.badge,
        currentXP,
        minXP: min,
        nextLevelXP: target,
        nextLevel: nextTier ? nextTier.name : 'Max Rank Reached',
        progressPercent,
        xpToNext,
        tierIndex: i + 1,
        totalTiers: LEVEL_TIERS.length
      };
    }
  }
  
  const lastTier = LEVEL_TIERS[LEVEL_TIERS.length - 1];
  return {
    level: lastTier.name,
    badge: lastTier.badge,
    currentXP,
    minXP: lastTier.minXP,
    nextLevelXP: null,
    nextLevel: 'Max Rank',
    progressPercent: 100,
    xpToNext: 0,
    tierIndex: LEVEL_TIERS.length,
    totalTiers: LEVEL_TIERS.length
  };
}
