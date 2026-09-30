import React from 'react';

export default function ChallengeModal({
  challenge,
  isCompleted,
  isOpen,
  onClose,
  onCompleteChallenge
}) {
  if (!isOpen || !challenge) return null;

  const getCategoryColor = (cat) => {
    switch (cat) {
      case 'Water': return '#0284c7';
      case 'Energy': return '#d97706';
      case 'Waste': return '#16a34a';
      case 'Transport': return '#0d9488';
      case 'Biodiversity': return '#15803d';
      default: return '#10b981';
    }
  };

  const catColor = getCategoryColor(challenge.category);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="challenge-detail-dialog" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close">
          ✕
        </button>

        {/* Header */}
        <div className="detail-header">
          <div className="detail-icon-box" style={{ backgroundColor: `${catColor}15` }}>
            <span className="detail-icon">{challenge.icon}</span>
          </div>

          <div className="detail-title-group">
            <div className="detail-tags-row">
              <span
                className="category-pill"
                style={{ color: catColor, backgroundColor: `${catColor}15`, borderColor: `${catColor}30` }}
              >
                {challenge.category}
              </span>
              <span className={`difficulty-pill diff-${challenge.difficulty.toLowerCase()}`}>
                {challenge.difficulty}
              </span>
            </div>
            <h2 className="detail-title">{challenge.title}</h2>
          </div>

          <div className="detail-reward-badge">
            <span className="detail-reward-star">⚡</span>
            <span className="detail-reward-val">+{challenge.xp} XP</span>
          </div>
        </div>

        {/* Content sections */}
        <div className="detail-body">
          {/* Why it matters */}
          <div className="detail-section">
            <h4 className="detail-section-title">
              <span className="section-title-icon">🌱</span> Why this matters
            </h4>
            <p className="detail-section-text">{challenge.whyMatters}</p>
          </div>

          {/* Your mission */}
          <div className="detail-section">
            <h4 className="detail-section-title">
              <span className="section-title-icon">🎯</span> Your mission
            </h4>
            <div className="detail-mission-box">
              <p>{challenge.mission || challenge.task}</p>
            </div>
          </div>

          {/* Real-world steps */}
          <div className="detail-section">
            <h4 className="detail-section-title">
              <span className="section-title-icon">📋</span> Action steps
            </h4>
            <ol className="detail-steps-list">
              {challenge.steps && challenge.steps.map((step, idx) => (
                <li key={idx} className="step-item">
                  <span className="step-number">{idx + 1}</span>
                  <span className="step-text">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Educational Did You Know */}
          {challenge.didYouKnow && (
            <div className="did-you-know-card">
              <div className="did-you-know-header">
                <span className="fact-bulb">💡</span>
                <strong>Did You Know?</strong>
              </div>
              <p className="did-you-know-text">{challenge.didYouKnow}</p>
            </div>
          )}
        </div>

        {/* Footer with action button */}
        <div className="detail-footer">
          {isCompleted ? (
            <div className="completed-state-banner">
              <span className="completed-state-icon">✓</span>
              <div>
                <strong>Challenge Completed</strong>
                <p>You have earned +{challenge.xp} XP for this action.</p>
              </div>
            </div>
          ) : (
            <button
              className="btn-complete-action"
              onClick={() => onCompleteChallenge(challenge)}
            >
              <span>🌱 I Completed It</span>
              <span className="btn-xp-pill">+{challenge.xp} XP</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
