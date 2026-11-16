import React from 'react'
import kittyImg from '../assets/hkty.png'

export default function HeroSection() {
  return (
    <header className="hero-section">
      <div className="hero-card">
        <img src={kittyImg} alt="Hello Kitty" className="hero-kitty-img" />
        <div className="badge">01 • 01 • 2026</div>
        <h1 className="hero-title animate-pop">
          Happy Birthday, <span className="highlight-name">Bestie</span>! 🎉
        </h1>
        <p className="hero-tagline">“Hari ini semua hal manis harus jadi milik kamu.”</p>
      </div>
    </header>
  )
}
