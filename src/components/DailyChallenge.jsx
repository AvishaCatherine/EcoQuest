import React from 'react';

export default function DailyChallenge({ challenge, isCompleted, onTakeChallenge }) {
  if (!challenge) return null;

  return (
    <div className="daily-challenge-card">
      <div className="daily-challenge-badge-tag">
        <span className="sparkle-icon">🌱</span>
        <span>Today's Eco Mission</span>
      </div>

      <div className="daily-challenge-grid">
        <div className="daily-challenge-content">
          <div className="daily-header-row">
            <span className="daily-icon">{challenge.icon}</span>
            <div>
              <span className="daily-category">{challenge.category} Quest</span>
              <h3 className="daily-title">{challenge.title}</h3>
            </div>
          </div>
          <p className="daily-task-desc">"{challenge.task}"</p>
          <div className="daily-meta">
            <span className="daily-xp-pill">+{challenge.xp} XP</span>
            <span className="daily-diff-pill">{challenge.difficulty} Difficulty</span>
          </div>
        </div>

        <div className="daily-challenge-action">
          {isCompleted ? (
            <button
              className="btn-daily-action completed"
              onClick={() => onTakeChallenge(challenge)}
            >
              ✓ Mission Completed
            </button>
          ) : (
            <button
              className="btn-daily-action take"
              onClick={() => onTakeChallenge(challenge)}
            >
              Take Challenge →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
