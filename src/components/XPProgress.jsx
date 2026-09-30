import React from 'react';
import { getLevelInfo, LEVEL_TIERS } from '../utils/levelSystem';

export default function XPProgress({ xp }) {
  const info = getLevelInfo(xp);

  return (
    <div className="xp-progress-card">
      <div className="xp-progress-header">
        <div className="xp-level-title-group">
          <div className="xp-level-badge">{info.badge}</div>
          <div>
            <div className="xp-level-sub">Current Rank</div>
            <h3 className="xp-level-name">{info.level}</h3>
          </div>
        </div>

        <div className="xp-points-display">
          <span className="xp-current-num">{info.currentXP}</span>
          {info.nextLevelXP ? (
            <span className="xp-target-num"> / {info.nextLevelXP} XP</span>
          ) : (
            <span className="xp-max-tag">MAX TIER</span>
          )}
        </div>
      </div>

      {/* Visual Progress Bar */}
      <div className="progress-bar-track">
        <div
          className="progress-bar-fill"
          style={{ width: `${info.progressPercent}%` }}
        >
          <span className="progress-glow-dot"></span>
        </div>
      </div>

      <div className="xp-progress-footer">
        <span className="progress-percentage-text">{info.progressPercent}% completed</span>
        {info.nextLevelXP ? (
          <span className="next-tier-hint">
            <strong>{info.xpToNext} XP</strong> needed for <strong>{info.nextLevel}</strong>
          </span>
        ) : (
          <span className="next-tier-hint">🌟 Ultimate Eco Champion</span>
        )}
      </div>

      {/* Tier Roadmap Dots */}
      <div className="level-roadmap">
        {LEVEL_TIERS.map((tier, idx) => {
          const isPassed = xp >= tier.minXP;
          const isCurrent = info.level === tier.name;
          return (
            <div
              key={tier.name}
              className={`roadmap-node ${isPassed ? 'passed' : ''} ${isCurrent ? 'current' : ''}`}
              title={`${tier.name} (${tier.minXP}+ XP)`}
            >
              <div className="node-dot">{tier.badge}</div>
              <span className="node-label">{tier.name.split(' ')[0]}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
