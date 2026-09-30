import React from 'react';
import StatCard from '../components/StatCard';
import BadgeCard from '../components/BadgeCard';
import { BADGES } from '../data/badges';
import { calculateImpactStats } from '../utils/storage';
import { getLevelInfo } from '../utils/levelSystem';

export default function Impact({ userState }) {
  const stats = calculateImpactStats(userState.completedChallenges);
  const levelInfo = getLevelInfo(userState.xp);

  return (
    <div className="page-container impact-page">
      {/* Header */}
      <div className="page-header-row">
        <div>
          <span className="page-eyebrow">Real World Impact</span>
          <h1 className="page-title">My Environmental Impact</h1>
          <p className="page-subtitle">
            Every habit counts. Here is the verified summary of your real-world eco actions.
          </p>
        </div>

        <div className="impact-summary-badge">
          <span className="summary-badge-icon">🌿</span>
          <div>
            <span className="summary-badge-title">{stats.totalActions} Eco Actions</span>
            <span className="summary-badge-sub">Successfully Completed</span>
          </div>
        </div>
      </div>

      {/* Environmental Actions Breakdown Cards */}
      <div className="impact-stats-grid">
        <StatCard
          icon="✅"
          label="Total Eco Actions"
          value={stats.totalActions}
          subtext="Completed challenges"
          color="#10b981"
        />

        <StatCard
          icon="♻️"
          label="Waste Actions"
          value={stats.wasteActions}
          subtext="Segregation & recycling"
          color="#16a34a"
        />

        <StatCard
          icon="⚡"
          label="Energy Actions"
          value={stats.energyActions}
          subtext="Efficiency & shut-offs"
          color="#d97706"
        />

        <StatCard
          icon="💧"
          label="Water Actions"
          value={stats.waterActions}
          subtext="Freshwater conservation"
          color="#0284c7"
        />

        <StatCard
          icon="🚲"
          label="Transport Actions"
          value={stats.transportActions}
          subtext="Active & green commute"
          color="#0d9488"
        />

        <StatCard
          icon="🌿"
          label="Biodiversity Actions"
          value={stats.biodiversityActions}
          subtext="Plant & pollinator care"
          color="#15803d"
        />
      </div>

      {/* Two Column Layout: Badges Collection & My Eco Journey Activity Feed */}
      <div className="impact-columns-grid">
        {/* Left: Badges Trophy Cabinet */}
        <div className="impact-card-wrapper">
          <div className="card-header-flex">
            <div>
              <h3 className="section-title">Badge Showcase</h3>
              <p className="section-subtitle">
                {userState.unlockedBadges.length} of {BADGES.length} trophies unlocked
              </p>
            </div>
            <span className="badge-completion-pill">
              {Math.round((userState.unlockedBadges.length / BADGES.length) * 100)}%
            </span>
          </div>

          <div className="badges-gallery-grid">
            {BADGES.map((badge) => {
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

        {/* Right: My Eco Journey Activity Timeline */}
        <div className="impact-card-wrapper">
          <div className="card-header-flex">
            <div>
              <h3 className="section-title">My Eco Journey</h3>
              <p className="section-subtitle">Timeline of achievements and completed tasks</p>
            </div>
          </div>

          <div className="timeline-feed">
            {userState.activities && userState.activities.length > 0 ? (
              userState.activities.map((act) => {
                const getIcon = () => {
                  if (act.type === 'challenge') return '🌱';
                  if (act.type === 'badge') return '🏆';
                  if (act.type === 'level') return '🌟';
                  if (act.type === 'streak') return '🔥';
                  return '✨';
                };

                return (
                  <div key={act.id} className="timeline-item">
                    <div className="timeline-marker">
                      <span className="timeline-icon">{getIcon()}</span>
                    </div>
                    <div className="timeline-content">
                      <div className="timeline-header-line">
                        <strong className="timeline-title">{act.title}</strong>
                        {act.xp && <span className="timeline-xp-tag">+{act.xp} XP</span>}
                      </div>
                      <span className="timeline-time">{act.time || 'Recently'}</span>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-muted">No activities logged yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
