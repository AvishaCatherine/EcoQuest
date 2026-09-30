export const INITIAL_USER_STATE = {
  userName: 'Avisha',
  xp: 820,
  streak: 6,
  completedChallenges: ['energy-guardian'],
  unlockedBadges: ['badge-energy'],
  activities: [
    {
      id: 'act-1',
      title: 'Maintained 6-day eco streak',
      xp: null,
      type: 'streak',
      time: 'Today'
    },
    {
      id: 'act-2',
      title: 'Reached Eco Explorer rank',
      xp: null,
      type: 'level',
      time: 'Yesterday'
    },
    {
      id: 'act-3',
      title: 'Earned Energy Guardian badge',
      xp: null,
      type: 'badge',
      time: 'Yesterday'
    },
    {
      id: 'act-4',
      title: 'Completed Energy Guardian',
      xp: 20,
      type: 'challenge',
      time: 'Yesterday'
    }
  ],
  todayChallengeId: 'waste-warrior',
  lastActivity: new Date().toISOString()
};
