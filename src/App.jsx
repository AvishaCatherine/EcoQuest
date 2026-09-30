import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Challenges from './pages/Challenges';
import Leaderboard from './pages/Leaderboard';
import Impact from './pages/Impact';
import ChallengeModal from './components/ChallengeModal';
import CelebrationModal from './components/CelebrationModal';
import ResetModal from './components/ResetModal';

import { loadUserState, saveUserState, resetUserState } from './utils/storage';
import { getLevelInfo } from './utils/levelSystem';
import { BADGES } from './data/badges';
import { triggerConfetti } from './utils/confetti';

export default function App() {
  const [activePage, setActivePage] = useState('landing');
  const [userState, setUserState] = useState(() => loadUserState());
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [celebrationData, setCelebrationData] = useState(null);
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);

  // Sync to localStorage on every state change
  useEffect(() => {
    saveUserState(userState);
  }, [userState]);

  // Handle Challenge Completion Flow
  const handleCompleteChallenge = (challenge) => {
    if (!challenge) return;

    // Prevent duplicate XP reward
    if (userState.completedChallenges.includes(challenge.id)) {
      return;
    }

    const previousLevelInfo = getLevelInfo(userState.xp);
    const newXP = userState.xp + challenge.xp;
    const newLevelInfo = getLevelInfo(newXP);

    const leveledUp = newLevelInfo.level !== previousLevelInfo.level;

    // Check for corresponding badge unlock
    let newlyUnlockedBadge = null;
    const updatedBadges = [...userState.unlockedBadges];

    if (challenge.badgeId && !updatedBadges.includes(challenge.badgeId)) {
      updatedBadges.push(challenge.badgeId);
      newlyUnlockedBadge = BADGES.find((b) => b.id === challenge.badgeId) || null;
    }

    // Check for Eco Champion badge unlock (1500 XP or all completed)
    const updatedCompletedChallenges = [...userState.completedChallenges, challenge.id];
    if ((newXP >= 1500 || updatedCompletedChallenges.length >= 5) && !updatedBadges.includes('badge-champion')) {
      updatedBadges.push('badge-champion');
      if (!newlyUnlockedBadge) {
        newlyUnlockedBadge = BADGES.find((b) => b.id === 'badge-champion') || null;
      }
    }

    // Streak logic: maintain active streak
    const updatedStreak = userState.streak;

    // Add activity timeline entries
    const newActivities = [
      {
        id: `act-${Date.now()}-1`,
        title: `Completed ${challenge.title}`,
        xp: challenge.xp,
        type: 'challenge',
        time: 'Just now'
      }
    ];

    if (newlyUnlockedBadge) {
      newActivities.push({
        id: `act-${Date.now()}-2`,
        title: `Earned ${newlyUnlockedBadge.name} badge`,
        xp: null,
        type: 'badge',
        time: 'Just now'
      });
    }

    if (leveledUp) {
      newActivities.push({
        id: `act-${Date.now()}-3`,
        title: `Reached ${newLevelInfo.level} rank`,
        xp: null,
        type: 'level',
        time: 'Just now'
      });
    }

    const updatedState = {
      ...userState,
      xp: newXP,
      completedChallenges: updatedCompletedChallenges,
      unlockedBadges: updatedBadges,
      streak: updatedStreak,
      activities: [...newActivities, ...userState.activities],
      lastActivity: new Date().toISOString()
    };

    // Save state
    setUserState(updatedState);
    saveUserState(updatedState);

    // Close detail modal & trigger celebration
    setSelectedChallenge(null);
    triggerConfetti();

    setCelebrationData({
      challenge,
      unlockedBadge: newlyUnlockedBadge,
      levelUpInfo: {
        leveledUp,
        newLevel: newLevelInfo.level
      }
    });
  };

  // Reset Demo handler
  const handleConfirmReset = () => {
    const freshState = resetUserState();
    setUserState(freshState);
    setIsResetModalOpen(false);
    setSelectedChallenge(null);
    setCelebrationData(null);
  };

  return (
    <div className="app-shell">
      {/* Navbar shown on all views except clean hero if desired, but user requested navbar */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        userState={userState}
        onResetDemo={() => setIsResetModalOpen(true)}
      />

      {/* Main Page Routing */}
      <main className="main-content">
        {activePage === 'landing' && (
          <Landing onStartQuest={() => setActivePage('dashboard')} />
        )}

        {activePage === 'dashboard' && (
          <Dashboard
            userState={userState}
            onNavigate={(page) => setActivePage(page)}
            onOpenChallenge={(challenge) => setSelectedChallenge(challenge)}
          />
        )}

        {activePage === 'challenges' && (
          <Challenges
            userState={userState}
            onSelectChallenge={(challenge) => setSelectedChallenge(challenge)}
          />
        )}

        {activePage === 'leaderboard' && (
          <Leaderboard userState={userState} />
        )}

        {activePage === 'impact' && (
          <Impact userState={userState} />
        )}
      </main>

      {/* Challenge Detail Modal */}
      <ChallengeModal
        isOpen={Boolean(selectedChallenge)}
        challenge={selectedChallenge}
        isCompleted={Boolean(
          selectedChallenge && userState.completedChallenges.includes(selectedChallenge.id)
        )}
        onClose={() => setSelectedChallenge(null)}
        onCompleteChallenge={handleCompleteChallenge}
      />

      {/* Celebration Success Modal */}
      <CelebrationModal
        isOpen={Boolean(celebrationData)}
        challenge={celebrationData?.challenge}
        unlockedBadge={celebrationData?.unlockedBadge}
        levelUpInfo={celebrationData?.levelUpInfo}
        onClose={() => setCelebrationData(null)}
        onNavigate={(page) => setActivePage(page)}
      />

      {/* Reset Confirmation Modal */}
      <ResetModal
        isOpen={isResetModalOpen}
        onClose={() => setIsResetModalOpen(false)}
        onConfirm={handleConfirmReset}
      />

      {/* Global Footer */}
      <footer className="global-footer">
        <div className="footer-content">
          <div className="footer-left">
            <span className="footer-logo">🌱 EcoQuest</span>
            <span className="footer-copy">Gamified Environmental Education • Small actions. Real impact.</span>
          </div>
          <div className="footer-right">
            <button className="footer-reset-btn" onClick={() => setIsResetModalOpen(true)}>
              🔄 Reset Demo State
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
