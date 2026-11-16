import React, { useState, useRef } from 'react'
import confetti from 'canvas-confetti'

export default function CakeSection({ onReplay }) {
  const [blown, setBlown] = useState(false)
  const [showReveal, setShowReveal] = useState(false)
  const revealRef = useRef(null)

  const playBlowSound = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext
      if (!AudioCtx) return
      const audioCtx = new AudioCtx()
      const bufferSize = audioCtx.sampleRate * 0.4
      const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate)
      const data = buffer.getChannelData(0)
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1
      }
      const noise = audioCtx.createBufferSource()
      noise.buffer = buffer

      const filter = audioCtx.createBiquadFilter()
      filter.type = 'lowpass'
      filter.frequency.setValueAtTime(400, audioCtx.currentTime)
      filter.exponentialRampToValueAtTime(10, audioCtx.currentTime + 0.4)

      noise.connect(filter)
      filter.connect(audioCtx.destination)
      noise.start()
    } catch (e) {
      console.log('AudioContext blocked or not supported', e)
    }
  }

  const triggerHeavyConfetti = () => {
    const duration = 3000
    const end = Date.now() + duration
    const colors = ['#ffb7c5', '#ff4f79', '#ffe4e1', '#ffc2d1', '#fffcf9']

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors
      })
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors
      })

      if (Date.now() < end) {
        requestAnimationFrame(frame)
      }
    }
    frame()
  }

  const handleCandleClick = () => {
    if (!blown) {
      setBlown(true)
      playBlowSound()

      setTimeout(() => {
        setShowReveal(true)
        triggerHeavyConfetti()
        if (revealRef.current) {
          revealRef.current.scrollIntoView({ behavior: 'smooth' })
        }
      }, 600)
    }
  }

  const handleReplayClick = () => {
    setBlown(false)
    setShowReveal(false)
    if (onReplay) {
      onReplay()
    }
  }

  return (
    <section className="cake-section card-wrapper">
      <h2 className="section-title">
        <i className="fa-solid fa-cake-candles"></i> Tiup Lilinnya!
      </h2>
      <p className="section-subtitle">
        Make a wish, lalu klik lilin untuk meniupnya 🎂
      </p>

      <div className="cake-container">
        <div
          className="cake"
          onClick={handleCandleClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') handleCandleClick()
          }}
          title={blown ? 'Lilin sudah ditiup' : 'Klik untuk meniup lilin'}
        >
          <div className="plate"></div>
          <div className="layer layer-bottom"></div>
          <div className="layer layer-middle"></div>
          <div className="layer layer-top"></div>
          <div className="icing"></div>
          <div className="drips"></div>
          <div className={`candle ${blown ? 'blown' : ''}`}>
            {!blown && <div className="flame"></div>}
          </div>
        </div>
      </div>

      {showReveal && (
        <div ref={revealRef} className="wishes-reveal-container">
          <h3 className="reveal-title">Happy Birthday Bestie! 🎀✨</h3>
          <p className="reveal-msg">
            Semoga semua keinginanmu terwujud di tahun yang baru ini. Kamu berharga, dan kamu sangat
            disayangi! ❤️
          </p>
          <button onClick={handleReplayClick} className="cute-btn">
            Mulai Ulang Surprise 🔄
          </button>
        </div>
      )}
    </section>
  )
}
