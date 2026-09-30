import { INITIAL_USER_STATE } from '../data/initialState.js';
import { CHALLENGES } from '../data/challenges.js';

const STORAGE_KEY = 'ecoquest_user_state_v1';

export function loadUserState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return { ...INITIAL_USER_STATE };
    }
    const parsed = JSON.parse(raw);
    return {
      ...INITIAL_USER_STATE,
      ...parsed
    };
  } catch (err) {
    console.error('Error loading state from localStorage:', err);
    return { ...INITIAL_USER_STATE };
  }
}

export function saveUserState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (err) {
    console.error('Error saving state to localStorage:', err);
  }
}

export function resetUserState() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.error('Error clearing localStorage:', err);
  }
  return { ...INITIAL_USER_STATE };
}

export function calculateImpactStats(completedChallengeIds = []) {
  const categoryCounts = {
    Water: 0,
    Energy: 0,
    Waste: 0,
    Transport: 0,
    Biodiversity: 0
  };

  CHALLENGES.forEach((challenge) => {
    if (completedChallengeIds.includes(challenge.id)) {
      if (categoryCounts[challenge.category] !== undefined) {
        categoryCounts[challenge.category] += 1;
      }
    }
  });

  const totalActions = completedChallengeIds.length;

  return {
    totalActions,
    waterActions: categoryCounts.Water,
    energyActions: categoryCounts.Energy,
    wasteActions: categoryCounts.Waste,
    transportActions: categoryCounts.Transport,
    biodiversityActions: categoryCounts.Biodiversity
  };
}
