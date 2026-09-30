# 🌱 EcoQuest — Gamified Environmental Education Platform

> **"Small actions. Real impact. One planet."**  
> Problem Statement: *Build an interactive, game-based platform that teaches students eco-friendly habits through challenges, rewards, and real-world tasks rather than textbook theory.*

---

## 🌟 Overview

**EcoQuest** is a hackathon-ready, fully client-side web MVP built with React, Vite, and vanilla CSS, backed by persistent browser `localStorage`. It transforms environmental education into a game where students learn sustainable principles, perform verified real-world actions, earn experience points (XP), unlock badges, sustain eco-streaks, and climb community leaderboards.

---

## 🎮 Gameplay Loop

```
LEARN ➔ ACT ➔ COMPLETE ➔ EARN XP ➔ LEVEL UP ➔ UNLOCK BADGES ➔ BUILD STREAK
```

---

## 🚀 Key Features

1. **Attractive Landing Page**:
   - Hero section with inspiring green typography, live community counters (14,250+ actions, 25+ challenges, 5,400+ students).
   - "Start EcoQuest" quick-launch CTA.
   - Gameplay loop walkthrough and 4 sustainability frontier spotlights (Waste, Water, Energy, Biodiversity).

2. **Main Dashboard**:
   - **Avisha** demo profile with dynamic rank calculation.
   - **820 / 1000 XP** interactive level progress bar with milestone roadmap.
   - **🔥 6 Day Eco Streak** display with animated flame badge.
   - **🌱 Today's Eco Mission** (Daily Challenge highlight) with quick "Take Challenge" launcher.
   - Quick statistics cards: XP, Streak, Completed Actions, Unlocked Badges.
   - Dual columns: Quick challenges list and unlocked badges showcase.

3. **Challenges & Quests Grid**:
   - Category filtering: **All**, **Water**, **Energy**, **Waste**, **Transport**, **Biodiversity**.
   - Instant search bar for habits and challenge keywords.
   - Challenge cards featuring difficulty chips, category tags, XP rewards, and completion status.
   - Core challenges:
     - ♻️ **Waste Warrior** (+30 XP, Waste)
     - ⚡ **Energy Guardian** (+20 XP, Energy — *initially completed*)
     - 💧 **Water Saver** (+20 XP, Water)
     - 🚲 **Green Commute** (+40 XP, Transport)
     - 🌿 **Plant Protector** (+30 XP, Biodiversity)

4. **Educational Challenge Detail Modal**:
   - Comprehensive real-world rationale ("Why this matters").
   - Actionable mission summary.
   - 4-step real-world instructions.
   - **"Did You Know?"** educational environmental facts.
   - **"I Completed It"** button (disabled once claimed to prevent duplicate XP).

5. **Celebration & Reward System**:
   - Multi-burst confetti animation.
   - **Challenge Complete!** celebration dialog.
   - **+30 XP** awarded immediately.
   - **🏆 Badge Unlocked** notification banner.
   - **🌟 Level Up** notification when thresholds are crossed.

6. **Level Progression**:
   - `0–199 XP`: **Eco Beginner**
   - `200–499 XP`: **Green Starter**
   - `500–999 XP`: **Eco Explorer** *(Avisha starts at 820 XP)*
   - `1000–1499 XP`: **Planet Protector**
   - `1500+ XP`: **Eco Champion**

7. **Badges System**:
   - 💧 Water Saver
   - ♻️ Waste Warrior
   - ⚡ Energy Guardian *(unlocked in demo)*
   - 🚲 Green Commuter
   - 🌿 Plant Protector
   - 👑 Eco Champion

8. **Dynamic Leaderboard**:
   - Dynamic user rank and XP updates in real-time.
   - Avisha updates from 820 XP to 850 XP and beyond.
   - Shows top students (Aadhya, Rahul, Meera, Avisha, Karthik) with avatars and podium badges.

9. **My Impact Dashboard**:
   - Total eco actions count.
   - Breakdown by category (Water, Energy, Waste, Transport, Biodiversity).
   - Badges trophy cabinet.
   - **"My Eco Journey"** activity timeline with verified events.

10. **Reset Demo State**:
    - Accessible reset button in header and footer.
    - One-click reset to initial demo state (Avisha, 820 XP, 6-day streak, Energy Guardian completed, Waste Warrior uncompleted).

---

## 📋 The 20-Step Demo Flow

Follow this exact sequence to demonstrate the MVP during hackathon judging:

1. Open **http://localhost:5173/**.
2. View the **Landing Page** with tagline *"Small actions. Real impact. One planet."* and statistics.
3. Click **"Start EcoQuest"**.
4. Arrive at the **Dashboard** displaying **Avisha**, **820 XP**, **Eco Explorer**, and **🔥 6 Day Eco Streak**.
5. Observe the progress bar: **820 / 1000 XP** (64% to Planet Protector).
6. Click **"Challenges"** in the navigation bar.
7. Click **"Waste Warrior"** challenge.
8. Read the educational information (*Why it matters*, *Action steps*, *Did You Know?*).
9. Click the green **"🌱 I Completed It"** button.
10. Watch the confetti burst and the **"Challenge Complete!"** celebration modal appear.
11. Observe the **+30 XP** reward and the **"🏆 Badge Unlocked: Waste Warrior"** banner.
12. Click **"View Dashboard"**.
13. Notice the XP has dynamically updated from **820 XP to 850 XP** (now 70% to Planet Protector).
14. Notice **Eco Actions Completed** changed from **1 to 2**.
15. Click **"Leaderboard"** in the navigation bar.
16. Confirm that Avisha's score on the leaderboard is dynamically updated to **850 XP**.
17. Click **"My Impact"** in the navigation bar.
18. Check that **Total Eco Actions** shows **2**, **Waste Actions** shows **1**, and the **Waste Warrior badge** is shining in the trophy cabinet.
19. Inspect the **"My Eco Journey"** timeline showing *"Completed Waste Warrior (+30 XP)"* and *"Earned Waste Warrior badge"*.
20. **Refresh the browser (F5)** and verify that all progress (850 XP, completed challenges, badges, timeline) remains saved in `localStorage`!

---

## 🛠️ Local Development & Build Commands

```bash
# Navigate to project folder
cd C:\Users\Agni\.gemini\antigravity\scratch\ecoquest

# Run development server
npm run dev

# Run production build
npm run build

# Preview production build
npm run preview
```
