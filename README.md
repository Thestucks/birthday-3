# Birthday Surprise Web App 🎀

A cute, interactive Hello Kitty themed birthday surprise web application built with **React** and **Vite**.

Demo: [https://thestucks.github.io/birthday-3/](https://thestucks.github.io/birthday-3/)

## ✨ Features
- **Opening Surprise Screen**: Interactive gift opening card with smooth fade transition and confetti burst.
- **Floating Cute Elements**: Floating hearts, sparkles, ribbons, and bows.
- **Polaroid Memory Gallery**: Scrapbook-style polaroid cards with tilt hover effects and full-size Lightbox modal.
- **Interactive Letter Envelope**: 3D envelope opening animation with typewriter text effect that auto-scrolls.
- **Birthday Wishes Cards**: 4 cute wishing cards for health, happiness, success, and love.
- **Birthday Cake with Blowable Candle**: Interactive 3D CSS cake with realistic blow sound effect (synthesized via Web Audio API), flame extinguish, and heavy confetti shower.
- **Replay Button**: Replay the surprise experience anytime.
- **Background Music**: Floating music toggle button with audio loop.

## 🛠️ Tech Stack
- **React 18**
- **Vite**
- **Canvas Confetti**
- **Web Audio API**
- **FontAwesome & Google Fonts**

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Installation
```bash
# Clone the repository
git clone https://github.com/Thestucks/birthday-3.git
cd birthday-3

# Install dependencies
npm install

# Run local dev server
npm run dev
```

### Build & Deploy
```bash
# Build for production
npm run build

# Deploy to GitHub Pages manually (or use automated GitHub Actions)
npm run deploy
```

## 🌐 GitHub Pages Deployment
This repository is configured to automatically build and deploy to GitHub Pages on every push to the `main` branch via GitHub Actions (`.github/workflows/deploy.yml`).

To enable GitHub Pages in your repository settings:
1. Go to repository **Settings** > **Pages**.
2. Under **Build and deployment** > **Source**, select **GitHub Actions**.
