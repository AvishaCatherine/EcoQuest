import React from 'react';
import StatCard from '../components/StatCard';
import XPProgress from '../components/XPProgress';
import DailyChallenge from '../components/DailyChallenge';
import BadgeCard from '../components/BadgeCard';
import { getLevelInfo } from '../utils/levelSystem';
import { BADGES } from '../data/badges';
import { CHALLENGES } from '../data/challenges';

export default function Dashboard({
  userState,
  onNavigate,
  onOpenChallenge
}) {
  const levelInfo = getLevelInfo(userState.xp);

  // Daily challenge (default to waste-warrior if not done, or next available)
  const todayChallenge = CHALLENGES.find((c) => c.id === 'waste-warrior') || CHALLENGES[0];
  const isTodayCompleted = userState.completedChallenges.includes(todayChallenge.id);

  // Top 3 badges preview
  const recentBadges = BADGES.slice(0, 3);

  return (
    <div className="page-container dashboard-page">
      {/* Top Welcome Header */}
      <section className="dashboard-welcome-banner">
        <div className="welcome-profile-info">
          <div className="welcome-avatar">🦊</div>
          <div className="welcome-text">
            <div className="welcome-greeting">
              Welcome back, <span className="user-highlight">{userState.userName}</span>!
            </div>
            <p className="welcome-sub">
              You are on rank <strong className="rank-tag">{levelInfo.level}</strong>. Keep the momentum going!
            </p>
          </div>
        </div>

        <div className="welcome-streak-pill">
          <span className="flame-anim">🔥</span>
          <div>
            <div className="streak-main-title">{userState.streak} Day Eco Streak</div>
            <span className="streak-caption">Active today • Keep it burning</span>
          </div>
        </div>
      </section>

      {/* Level & XP Progression Card */}
      <section className="dashboard-progress-section">
        <XPProgress xp={userState.xp} />
      </section>

      {/* Highlighted Daily Quest */}
      <section className="dashboard-daily-section">
        <DailyChallenge
          challenge={todayChallenge}
          isCompleted={isTodayCompleted}
          onTakeChallenge={onOpenChallenge}
        />
      </section>

      {/* Quick Stats Grid */}
      <section className="dashboard-stats-grid">
        <StatCard
          icon="⚡"
          label="Total XP Earned"
          value={`${userState.xp} XP`}
          subtext={`Tier: ${levelInfo.level}`}
          color="#10b981"
        />

        <StatCard
          icon="🔥"
          label="Current Streak"
          value={`${userState.streak} Days`}
          subtext="Consecutive eco days"
          color="#f59e0b"
        />

        <StatCard
          icon="✅"
          label="Eco Actions Completed"
          value={userState.completedChallenges.length}
          subtext={`${CHALLENGES.length - userState.completedChallenges.length} quests available`}
          color="#06b6d4"
          onClick={() => onNavigate('challenges')}
        />

        <StatCard
          icon="🏆"
          label="Badges Unlocked"
          value={`${userState.unlockedBadges.length} / ${BADGES.length}`}
          subtext="Environmental trophies"
          color="#8b5cf6"
          onClick={() => onNavigate('impact')}
        />
      </section>

      {/* Two Column Grid: Quick Challenges & Badges Showcase */}
      <section className="dashboard-dual-columns">
        {/* Left: Available Challenges Preview */}
        <div className="dashboard-column-card">
          <div className="card-header-flex">
            <div>
              <h3 className="section-title">Environmental Quests</h3>
              <p className="section-subtitle">Real-world tasks ready for action</p>
            </div>
            <button className="btn-link-action" onClick={() => onNavigate('challenges')}>
              View All ({CHALLENGES.length}) →
            </button>
          </div>

          <div className="quick-challenge-list">
            {CHALLENGES.slice(0, 3).map((challenge) => {
              const isDone = userState.completedChallenges.includes(challenge.id);
              return (
                <div
                  key={challenge.id}
                  className={`quick-challenge-item ${isDone ? 'is-done' : ''}`}
                  onClick={() => onOpenChallenge(challenge)}
                >
                  <div className="quick-item-icon">{challenge.icon}</div>
                  <div className="quick-item-details">
                    <span className="quick-item-title">{challenge.title}</span>
                    <span className="quick-item-cat">{challenge.category} • {challenge.difficulty}</span>
                  </div>
                  <div className="quick-item-action">
                    {isDone ? (
                      <span className="badge-done-chip">✓ Done</span>
                    ) : (
                      <span className="badge-xp-chip">+{challenge.xp} XP</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Badges Preview */}
        <div className="dashboard-column-card">
          <div className="card-header-flex">
            <div>
              <h3 className="section-title">Recent Badges</h3>
              <p className="section-subtitle">Your unlocked environmental honors</p>
            </div>
            <button className="btn-link-action" onClick={() => onNavigate('impact')}>
              View All ({BADGES.length}) →
            </button>
          </div>

          <div className="quick-badges-grid">
            {recentBadges.map((badge) => {
              const isUnlocked = userState.unlockedBadges.includes(badge.id);
              return (
                <BadgeCard
                  key={badge.id}
                  badge={badge}
                  isUnlocked={isUnlocked}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
