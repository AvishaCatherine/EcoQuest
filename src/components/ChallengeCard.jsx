import React from 'react';

export default function ChallengeCard({ challenge, isCompleted, onSelect }) {
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
    <div className={`challenge-card ${isCompleted ? 'is-completed' : ''}`}>
      <div className="challenge-card-header">
        <div className="challenge-icon-box" style={{ backgroundColor: `${catColor}15` }}>
          <span className="challenge-icon">{challenge.icon}</span>
        </div>
        <div className="challenge-tags">
          <span
            className="category-pill"
            style={{ color: catColor, backgroundColor: `${catColor}18`, borderColor: `${catColor}30` }}
          >
            {challenge.category}
          </span>
          <span className={`difficulty-pill diff-${challenge.difficulty.toLowerCase()}`}>
            {challenge.difficulty}
          </span>
        </div>
      </div>

      <div className="challenge-card-body">
        <h4 className="challenge-title">{challenge.title}</h4>
        <p className="challenge-task">{challenge.task}</p>
      </div>

      <div className="challenge-card-footer">
        <div className="challenge-xp-badge">
          <span className="xp-star">⚡</span>
          <span>+{challenge.xp} XP</span>
        </div>

        {isCompleted ? (
          <button
            className="btn-challenge-status completed"
            onClick={() => onSelect(challenge)}
          >
            <span className="check-mark">✓</span> Completed
          </button>
        ) : (
          <button
            className="btn-challenge-status action"
            onClick={() => onSelect(challenge)}
          >
            View Challenge →
          </button>
        )}
      </div>
    </div>
  );
}
