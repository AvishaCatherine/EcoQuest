EcoQuest 🌱

Gamified Environmental Education Platform

EcoQuest is an interactive environmental education platform that transforms eco-friendly habits into engaging real-world challenges.

Instead of learning environmental concepts only through textbook theory, students learn, take action, complete challenges, earn XP, unlock badges, and build eco-friendly habits.

🚀 Live Demo

Try EcoQuest:
https://eco-quest-tawny.vercel.app/

---

Problem Statement

Students often learn about environmental sustainability through theoretical content, but this does not always translate into everyday action.

EcoQuest bridges this gap by turning environmental education into a gamified experience based on real-world activities.

---

Our Solution

EcoQuest follows a simple gameplay loop:

LEARN → ACT → COMPLETE → EARN XP → LEVEL UP → UNLOCK BADGES

Students can complete practical environmental challenges such as:

- 💧 Saving water
- ♻️ Separating waste
- 🚲 Using greener transportation
- ⚡ Saving electricity
- 🌱 Caring for plants

---

Features

🎯 Environmental Challenges

Students can explore challenges across multiple categories:

- Water
- Energy
- Waste
- Transport
- Biodiversity

⭐ XP & Level System

Users earn XP by completing environmental challenges.

XP| Level
0–199| Eco Beginner
200–499| Green Starter
500–999| Eco Explorer
1000–1499| Planet Protector
1500+| Eco Champion

🏆 Badges

Users can unlock badges by completing specific challenges:

- Water Saver
- Waste Warrior
- Energy Guardian
- Green Commuter
- Plant Protector
- Eco Champion

🔥 Eco Streak

Users can maintain a streak by consistently participating in eco-friendly activities.

📊 Personal Impact Dashboard

The platform tracks completed eco-actions and displays progress across different environmental categories.

🏅 Leaderboard

A gamified leaderboard allows students to compare their XP and progress with other participants.

📚 Micro-Learning

Every challenge includes a short explanation of why the action matters, connecting real-world activities with environmental education.

💾 Progress Persistence

User progress is stored using browser "localStorage", allowing XP, completed challenges, badges, and progress to remain after refreshing the page.

---

Example Challenges

Challenge| Category| Reward
Water Saver| Water| +20 XP
Waste Warrior| Waste| +30 XP
Green Commute| Transport| +40 XP
Energy Guardian| Energy| +20 XP
Plant Protector| Biodiversity| +30 XP

---

Technology Stack

- React
- Vite
- JavaScript
- CSS
- localStorage
- Vercel for deployment

The MVP runs entirely on the client side without requiring a backend or external database.

---

Application Flow

Landing Page
     ↓
Start EcoQuest
     ↓
Dashboard
     ↓
Explore Challenges
     ↓
Select Challenge
     ↓
Learn Why It Matters
     ↓
Complete Real-World Action
     ↓
Earn XP
     ↓
Unlock Badge
     ↓
Update Streak & Progress
     ↓
Leaderboard + Impact Dashboard

---

Demo

The demonstration starts with a sample student profile:

Avisha

- XP: 820
- Level: Eco Explorer
- Streak: 6 days

A challenge can then be completed to demonstrate the gamification cycle.

Example:

820 XP → Complete Waste Warrior → +30 XP → 850 XP

The user's progress, badge status, and impact statistics update automatically.

---

Project Structure

EcoQuest/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── data/
│   ├── utils/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md

---

Getting Started

Clone the repository

git clone https://github.com/AvishaCatherine/EcoQuest.git

Enter the project directory

cd EcoQuest

Install dependencies

npm install

Start the development server

npm run dev

The application will normally be available at:

http://localhost:5173

---

Future Scope

The current version is a hackathon MVP. Future versions could include:

- Student accounts and authentication
- Cloud-based progress synchronization
- School/class-based competitions
- Teacher and administrator dashboards
- Verified real-world activity submissions
- Community environmental campaigns
- Location-based environmental challenges
- Advanced analytics
- Multilingual support
- Mobile application

---

Vision

EcoQuest aims to make environmental education more interactive, actionable, and habit-oriented by connecting what students learn with what they do in their everyday lives.

«Small actions. Real impact. One planet.»

---

License

This project was developed as a hackathon project.
