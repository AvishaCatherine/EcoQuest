import React from 'react';

export default function CelebrationModal({
  isOpen,
  onClose,
  challenge,
  unlockedBadge,
  levelUpInfo,
  onNavigate
}) {
  if (!isOpen || !challenge) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="celebration-modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="celebration-glow-circle"></div>

        <div className="celebration-trophy-banner">
          <span className="celebration-trophy-emoji">🎉</span>
        </div>

        <h2 className="celebration-heading">Challenge Complete!</h2>
        <p className="celebration-subhead">
          You made our planet a little greener today!
        </p>

        {/* XP Awarded Card */}
        <div className="celebration-reward-box">
          <span className="celebration-xp-star">⚡</span>
          <span className="celebration-xp-amount">+{challenge.xp} XP</span>
          <span className="celebration-xp-label">Awarded to your profile</span>
        </div>

        {/* Badge Unlocked Notification if any */}
        {unlockedBadge && (
          <div className="celebration-badge-banner">
            <div className="celebration-badge-icon">{unlockedBadge.icon}</div>
            <div className="celebration-badge-details">
              <span className="badge-banner-tag">🏆 BADGE UNLOCKED!</span>
              <strong className="badge-banner-name">{unlockedBadge.name}</strong>
              <span className="badge-banner-desc">{unlockedBadge.description}</span>
            </div>
          </div>
        )}

        {/* Level Up Notification if any */}
        {levelUpInfo && levelUpInfo.leveledUp && (
          <div className="celebration-levelup-banner">
            <span className="levelup-star">🌟</span>
            <div>
              <div className="levelup-tag">LEVEL UP REACHED!</div>
              <div className="levelup-name">{levelUpInfo.newLevel}</div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="celebration-actions">
          <button className="btn-celebrate-primary" onClick={onClose}>
            Awesome, Continue!
          </button>
          {onNavigate && (
            <button
              className="btn-celebrate-secondary"
              onClick={() => {
                onClose();
                onNavigate('dashboard');
              }}
            >
              View Dashboard →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
