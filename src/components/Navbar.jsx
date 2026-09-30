import React, { useState } from 'react';
import { getLevelInfo } from '../utils/levelSystem';

export default function Navbar({ activePage, setActivePage, userState, onResetDemo }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const levelInfo = getLevelInfo(userState.xp);

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'challenges', label: 'Challenges', icon: '🎯' },
    { id: 'leaderboard', label: 'Leaderboard', icon: '🏆' },
    { id: 'impact', label: 'My Impact', icon: '🌍' }
  ];

  const handleNav = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-brand" onClick={() => handleNav('landing')}>
          <div className="brand-logo-icon">🌱</div>
          <div className="brand-text">
            <span className="brand-name">EcoQuest</span>
            <span className="brand-tagline">Learn • Act • Impact</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-link-btn ${activePage === item.id ? 'active' : ''}`}
              onClick={() => handleNav(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* User Status Pills & Quick Actions */}
        <div className="navbar-user-actions">
          <div className="streak-badge-pill" title="Current Daily Streak">
            <span className="flame-icon">🔥</span>
            <span className="streak-count">{userState.streak}d</span>
          </div>

          <div className="user-profile-pill" onClick={() => handleNav('dashboard')} title="View Dashboard">
            <div className="user-avatar-sm">🦊</div>
            <div className="user-meta-sm">
              <span className="user-name-sm">{userState.userName}</span>
              <span className="user-xp-sm">{userState.xp} XP</span>
            </div>
            <span className="level-badge-sm" title={levelInfo.level}>
              {levelInfo.badge}
            </span>
          </div>

          <button
            className="btn-reset-demo"
            onClick={onResetDemo}
            title="Reset demo data to initial state"
          >
            Reset Demo
          </button>

          {/* Mobile hamburger button */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <div className="mobile-nav-items">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`mobile-nav-btn ${activePage === item.id ? 'active' : ''}`}
                onClick={() => handleNav(item.id)}
              >
                <span className="nav-icon">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
            <div className="mobile-drawer-footer">
              <button className="btn-reset-demo mobile-reset" onClick={() => { onResetDemo(); setMobileMenuOpen(false); }}>
                🔄 Reset Demo Data
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
