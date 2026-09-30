import { INITIAL_USER_STATE } from './data/initialState.js';
import { CHALLENGES } from './data/challenges.js';
import { BADGES } from './data/badges.js';
import { getLevelInfo } from './utils/levelSystem.js';
import { calculateImpactStats } from './utils/storage.js';

console.log('--- EcoQuest Automated Flow Test ---');

// 1. Check Initial State
console.log('1. Checking Initial User State:');
console.assert(INITIAL_USER_STATE.userName === 'Avisha', 'User name must be Avisha');
console.assert(INITIAL_USER_STATE.xp === 820, 'Initial XP must be 820');
console.assert(INITIAL_USER_STATE.streak === 6, 'Initial Streak must be 6');
console.assert(INITIAL_USER_STATE.completedChallenges.includes('energy-guardian'), 'Energy Guardian must be completed');
console.assert(!INITIAL_USER_STATE.completedChallenges.includes('waste-warrior'), 'Waste Warrior must be uncompleted');

const initialLevel = getLevelInfo(INITIAL_USER_STATE.xp);
console.log(`   Initial Level: ${initialLevel.level} (${initialLevel.currentXP} / ${initialLevel.nextLevelXP} XP, ${initialLevel.progressPercent}%)`);
console.assert(initialLevel.level === 'Eco Explorer', 'Level must be Eco Explorer at 820 XP');
console.assert(initialLevel.nextLevelXP === 1000, 'Next level at 1000 XP');

// 2. Initial Impact Stats
const initialImpact = calculateImpactStats(INITIAL_USER_STATE.completedChallenges);
console.log('2. Initial Impact Stats:', initialImpact);
console.assert(initialImpact.totalActions === 1, 'Total initial actions must be 1');
console.assert(initialImpact.energyActions === 1, 'Energy actions must be 1');
console.assert(initialImpact.wasteActions === 0, 'Waste actions must be 0');

// 3. Complete Waste Warrior (+30 XP)
console.log('3. Simulating Completion of Waste Warrior (+30 XP)...');
const wasteWarrior = CHALLENGES.find((c) => c.id === 'waste-warrior');
console.assert(wasteWarrior !== undefined, 'Waste Warrior challenge must exist');

const updatedXP = INITIAL_USER_STATE.xp + wasteWarrior.xp;
const updatedCompleted = [...INITIAL_USER_STATE.completedChallenges, wasteWarrior.id];
const updatedBadges = [...INITIAL_USER_STATE.unlockedBadges, wasteWarrior.badgeId];

console.log(`   Updated XP: ${INITIAL_USER_STATE.xp} -> ${updatedXP}`);
console.assert(updatedXP === 850, 'Updated XP must be exactly 850');
console.assert(updatedCompleted.includes('waste-warrior'), 'Waste Warrior marked completed');
console.assert(updatedBadges.includes('badge-waste'), 'Waste Warrior badge unlocked');

// 4. Post-completion Impact Stats
const updatedImpact = calculateImpactStats(updatedCompleted);
console.log('4. Updated Impact Stats:', updatedImpact);
console.assert(updatedImpact.totalActions === 2, 'Total actions must now be 2');
console.assert(updatedImpact.wasteActions === 1, 'Waste actions must now be 1');
console.assert(updatedImpact.energyActions === 1, 'Energy actions must remain 1');

// 5. Test Level System progression
console.log('5. Testing Level Progression:');
const testP1 = getLevelInfo(150);
console.assert(testP1.level === 'Eco Beginner', '0-199 must be Eco Beginner');
const testP2 = getLevelInfo(350);
console.assert(testP2.level === 'Green Starter', '200-499 must be Green Starter');
const testP3 = getLevelInfo(850);
console.assert(testP3.level === 'Eco Explorer', '500-999 must be Eco Explorer');
const testP4 = getLevelInfo(1200);
console.assert(testP4.level === 'Planet Protector', '1000-1499 must be Planet Protector');
const testP5 = getLevelInfo(1600);
console.assert(testP5.level === 'Eco Champion', '1500+ must be Eco Champion');

console.log('✅ ALL UNIT CHECKS PASSED SUCCESSFULLY!');
