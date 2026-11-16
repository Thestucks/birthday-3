import React, { useState } from 'react'
import kittyImg from '../assets/hkty.png'

export default function OpeningScreen({ onStart, visible }) {
  const [fading, setFading] = useState(false)

  if (!visible) return null

  const handleClick = () => {
    setFading(true)
    setTimeout(() => {
      onStart()
    }, 700)
  }

  return (
    <div
      className="opening-overlay"
      style={{
        opacity: fading ? 0 : 1,
        transition: 'opacity 0.7s ease'
      }}
    >
      <div className="opening-card">
        <div className="kitty-bow-decoration">
          <img src={kittyImg} alt="Hello Kitty Decoration" className="opening-kitty-img" />
        </div>
        <h1 className="opening-title">Hi Bestie! 🎀</h1>
        <p className="opening-subtitle">Ada paket kejutan kecil yang disiapkan khusus buat kamu...</p>
        <button
          onClick={handleClick}
          className="cute-btn animate-bounce"
        >
          Buka Kado Kamu 🎁
        </button>
      </div>
    </div>
  )
}
