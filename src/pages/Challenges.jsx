import React, { useState } from 'react';
import ChallengeCard from '../components/ChallengeCard';
import { CHALLENGES, CATEGORIES } from '../data/challenges';

export default function Challenges({ userState, onSelectChallenge }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredChallenges = CHALLENGES.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All' || item.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.task.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const completedCount = userState.completedChallenges.length;

  return (
    <div className="page-container challenges-page">
      {/* Page Header */}
      <div className="page-header-row">
        <div>
          <span className="page-eyebrow">Eco Quests</span>
          <h1 className="page-title">Environmental Challenges</h1>
          <p className="page-subtitle">
            Choose a mission, apply eco-principles in your real life, and earn XP to level up.
          </p>
        </div>

        <div className="header-completion-stats">
          <div className="completion-ring-text">
            <span className="completion-number">{completedCount} / {CHALLENGES.length}</span>
            <span className="completion-label">Completed</span>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="challenges-filter-bar">
        <div className="category-tabs">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`cat-tab-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat === 'All' && '🌐 '}
              {cat === 'Water' && '💧 '}
              {cat === 'Energy' && '⚡ '}
              {cat === 'Waste' && '♻️ '}
              {cat === 'Transport' && '🚲 '}
              {cat === 'Biodiversity' && '🌿 '}
              {cat}
            </button>
          ))}
        </div>

        <div className="challenges-search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search challenges or habits..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className="clear-search-btn" onClick={() => setSearchQuery('')}>✕</button>
          )}
        </div>
      </div>

      {/* Challenges Grid */}
      {filteredChallenges.length > 0 ? (
        <div className="challenges-grid">
          {filteredChallenges.map((challenge) => {
            const isCompleted = userState.completedChallenges.includes(challenge.id);
            return (
              <ChallengeCard
                key={challenge.id}
                challenge={challenge}
                isCompleted={isCompleted}
                onSelect={onSelectChallenge}
              />
            );
          })}
        </div>
      ) : (
        <div className="empty-state-box">
          <span className="empty-icon">🍃</span>
          <h3>No challenges found</h3>
          <p>Try switching categories or clearing your search term.</p>
          <button className="btn-reset-filter" onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}>
            Show All Challenges
          </button>
        </div>
      )}
    </div>
  );
}
