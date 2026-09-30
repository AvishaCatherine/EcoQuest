import React from 'react';

export default function BadgeCard({ badge, isUnlocked }) {
  return (
    <div className={`badge-card ${isUnlocked ? 'unlocked' : 'locked'}`}>
      <div className="badge-card-icon-container">
        <div className="badge-icon-disc" style={{ borderColor: isUnlocked ? badge.color : '#cbd5e1' }}>
          <span className="badge-emoji">{badge.icon}</span>
        </div>
        {isUnlocked ? (
          <span className="badge-status-chip unlocked">✓ Unlocked</span>
        ) : (
          <span className="badge-status-chip locked">🔒 Locked</span>
        )}
      </div>

      <div className="badge-card-info">
        <h4 className="badge-name">{badge.name}</h4>
        <span className="badge-category-label">{badge.category}</span>
        <p className="badge-description">{badge.description}</p>
      </div>
    </div>
  );
}
