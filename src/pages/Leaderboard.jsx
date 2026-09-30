import React from 'react';
import { INITIAL_LEADERBOARD } from '../data/leaderboard';
import { getLevelInfo } from '../utils/levelSystem';

export default function Leaderboard({ userState }) {
  const userLevel = getLevelInfo(userState.xp).level;

  // Build dynamic leaderboard list combining other players and updated current user
  const combinedPlayers = INITIAL_LEADERBOARD.map((player) => {
    if (player.isCurrentUser) {
      return {
        ...player,
        name: userState.userName,
        xp: userState.xp,
        level: userLevel,
        badge: userState.xp >= 1000 ? '🛡️' : '✨'
      };
    }
    return player;
  });

  // Sort descending by XP
  combinedPlayers.sort((a, b) => b.xp - a.xp);

  // Assign updated dynamic ranks
  const rankedPlayers = combinedPlayers.map((player, index) => ({
    ...player,
    rank: index + 1
  }));

  const currentUserData = rankedPlayers.find((p) => p.isCurrentUser);

  const getRankBadge = (rank) => {
    switch (rank) {
      case 1: return { text: '1st', bg: '#fef3c7', color: '#b45309', icon: '🥇' };
      case 2: return { text: '2nd', bg: '#f1f5f9', color: '#475569', icon: '🥈' };
      case 3: return { text: '3rd', bg: '#ffedd5', color: '#9a3412', icon: '🥉' };
      default: return { text: `#${rank}`, bg: '#f8fafc', color: '#64748b', icon: null };
    }
  };

  return (
    <div className="page-container leaderboard-page">
      {/* Header */}
      <div className="page-header-row">
        <div>
          <span className="page-eyebrow">Community Standings</span>
          <h1 className="page-title">Global Eco Leaderboard</h1>
          <p className="page-subtitle">
            See how your environmental actions stack up against fellow student guardians.
          </p>
        </div>

        {/* Current user snapshot */}
        <div className="leaderboard-user-card">
          <div className="user-snapshot-avatar">🦊</div>
          <div className="user-snapshot-details">
            <span className="user-snapshot-label">Your Current Rank</span>
            <div className="user-snapshot-rank">
              Rank #{currentUserData?.rank || 4} • <strong className="user-snapshot-xp">{userState.xp} XP</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Leaderboard Table / Card List */}
      <div className="leaderboard-table-card">
        <div className="leaderboard-table-header">
          <div className="col-rank">Rank</div>
          <div className="col-user">Guardian</div>
          <div className="col-level">Rank Tier</div>
          <div className="col-xp">Total XP</div>
          <div className="col-badge">Trophy</div>
        </div>

        <div className="leaderboard-rows-wrap">
          {rankedPlayers.map((player) => {
            const rankStyle = getRankBadge(player.rank);
            const isMe = player.isCurrentUser;

            return (
              <div
                key={player.id}
                className={`leaderboard-row ${isMe ? 'is-current-user' : ''}`}
              >
                <div className="col-rank">
                  <div
                    className="rank-pill"
                    style={{ backgroundColor: rankStyle.bg, color: rankStyle.color }}
                  >
                    {rankStyle.icon ? (
                      <span className="rank-emoji">{rankStyle.icon}</span>
                    ) : (
                      <span className="rank-num">{rankStyle.text}</span>
                    )}
                  </div>
                </div>

                <div className="col-user">
                  <div className="user-avatar-disc">{player.avatar}</div>
                  <div className="user-name-box">
                    <span className="user-player-name">
                      {player.name}
                      {isMe && <span className="you-tag">YOU</span>}
                    </span>
                    <span className="mobile-level-hint">{player.level}</span>
                  </div>
                </div>

                <div className="col-level">
                  <span className="level-chip">{player.level}</span>
                </div>

                <div className="col-xp">
                  <span className="xp-highlight-num">{player.xp}</span>
                  <span className="xp-unit">XP</span>
                </div>

                <div className="col-badge">
                  <span className="trophy-emoji">{player.badge}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Motivational Note */}
      <div className="leaderboard-footer-banner">
        <span className="banner-icon">💡</span>
        <div className="banner-content">
          <h4>Every completed challenge adds XP to your rank instantly!</h4>
          <p>Complete challenges today to climb higher and unlock new environmental guardian tiers.</p>
        </div>
      </div>
    </div>
  );
}
