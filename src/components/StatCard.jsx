import React from 'react';

export default function StatCard({ icon, label, value, subtext, color = '#10b981', onClick }) {
  return (
    <div
      className={`stat-card ${onClick ? 'clickable' : ''}`}
      onClick={onClick}
      style={{ '--stat-color': color }}
    >
      <div className="stat-card-icon-wrap" style={{ backgroundColor: `${color}15`, color }}>
        <span className="stat-card-icon">{icon}</span>
      </div>
      <div className="stat-card-content">
        <span className="stat-card-label">{label}</span>
        <div className="stat-card-value">{value}</div>
        {subtext && <span className="stat-card-subtext">{subtext}</span>}
      </div>
    </div>
  );
}
