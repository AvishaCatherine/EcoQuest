import React from 'react';

export default function Landing({ onStartQuest }) {
  return (
    <div className="landing-page">
      {/* Background ambient decorative shapes */}
      <div className="landing-ambient-bg">
        <div className="ambient-blob blob-1"></div>
        <div className="ambient-blob blob-2"></div>
      </div>

      <div className="landing-container">
        {/* Hero Section */}
        <section className="landing-hero">
          <div className="hero-badge">
            <span className="badge-sparkle">🌱</span>
            <span>The Gamified Environmental Education Platform</span>
          </div>

          <h1 className="hero-title">
            Small actions. <span className="highlight-green">Real impact.</span> <br />
            One planet.
          </h1>

          <p className="hero-description">
            Turn daily sustainable choices into an adventure. Complete real-world eco-challenges,
            earn XP, level up your environmental guardian rank, unlock achievements, and build
            lasting green habits with students worldwide.
          </p>

          <div className="hero-cta-group">
            <button className="btn-hero-start" onClick={onStartQuest}>
              <span className="btn-icon">🚀</span>
              <span>Start EcoQuest</span>
            </button>
            <div className="hero-note">No sign-up required • Instant demo access</div>
          </div>
        </section>

        {/* Live Impact Stats */}
        <section className="landing-stats-grid">
          <div className="landing-stat-card">
            <div className="stat-icon-wrap">⚡</div>
            <div className="stat-big-number">14,250+</div>
            <div className="stat-text-label">Eco Actions Completed</div>
          </div>

          <div className="landing-stat-card">
            <div className="stat-icon-wrap">🎯</div>
            <div className="stat-big-number">25+</div>
            <div className="stat-text-label">Hands-on Challenges</div>
          </div>

          <div className="landing-stat-card">
            <div className="stat-icon-wrap">🎓</div>
            <div className="stat-big-number">5,400+</div>
            <div className="stat-text-label">Active Student Protectors</div>
          </div>
        </section>

        {/* How It Works: Gameplay Loop */}
        <section className="landing-loop-section">
          <div className="section-header-center">
            <span className="section-eyebrow">The Gameplay Loop</span>
            <h2 className="section-heading">How EcoQuest Teaches By Doing</h2>
          </div>

          <div className="gameplay-loop-steps">
            <div className="loop-step-card">
              <div className="loop-step-badge">1</div>
              <div className="loop-icon">📖</div>
              <h3>Learn</h3>
              <p>Discover real-world context and the science behind micro-habits.</p>
            </div>

            <div className="loop-connector">➔</div>

            <div className="loop-step-card">
              <div className="loop-step-badge">2</div>
              <div className="loop-icon">🏃‍♂️</div>
              <h3>Act</h3>
              <p>Execute actionable tasks at home, school, and your neighborhood.</p>
            </div>

            <div className="loop-connector">➔</div>

            <div className="loop-step-card">
              <div className="loop-step-badge">3</div>
              <div className="loop-icon">⚡</div>
              <h3>Earn XP</h3>
              <p>Log your verified completion and score experience points.</p>
            </div>

            <div className="loop-connector">➔</div>

            <div className="loop-step-card">
              <div className="loop-step-badge">4</div>
              <div className="loop-icon">🏆</div>
              <h3>Level Up</h3>
              <p>Unlock coveted badges, climb leaderboards, and sustain your streak.</p>
            </div>
          </div>
        </section>

        {/* Feature Highlights Grid */}
        <section className="landing-features-grid">
          <div className="feature-box">
            <div className="feature-icon">♻️</div>
            <h3>Waste & Recycling</h3>
            <p>Master sorting, avoid single-use plastics, and minimize landfill footprints.</p>
          </div>

          <div className="feature-box">
            <div className="feature-icon">💧</div>
            <h3>Water Conservation</h3>
            <p>Cut freshwater waste with mindful daily practices that preserve critical reserves.</p>
          </div>

          <div className="feature-box">
            <div className="feature-icon">⚡</div>
            <h3>Energy Stewardship</h3>
            <p>Defeat phantom loads, optimize home lighting, and lower grid reliance.</p>
          </div>

          <div className="feature-box">
            <div className="feature-icon">🌿</div>
            <h3>Urban Biodiversity</h3>
            <p>Nurture pollinators, plant native greenery, and revive local microclimates.</p>
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="landing-bottom-cta">
          <div className="cta-banner-content">
            <h2>Ready to start your environmental journey?</h2>
            <p>Join Avisha and fellow eco-explorers in making an immediate tangible impact.</p>
            <button className="btn-hero-start secondary" onClick={onStartQuest}>
              Launch Your First Quest →
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
