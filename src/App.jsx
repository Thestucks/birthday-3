import React, { useState, useRef } from 'react'
import confetti from 'canvas-confetti'
import OpeningScreen from './components/OpeningScreen'
import FloatingDecorations from './components/FloatingDecorations'
import HeroSection from './components/HeroSection'
import IntroSection from './components/IntroSection'
import MemoryGallery from './components/MemoryGallery'
import LetterSection from './components/LetterSection'
import BirthdayWishes from './components/BirthdayWishes'
import CakeSection from './components/CakeSection'
import MusicToggle from './components/MusicToggle'
import Footer from './components/Footer'
import hbdAudio from './assets/hbdsong.mp3'

export default function App() {
  const [started, setStarted] = useState(false)
  const [isPlayingMusic, setIsPlayingMusic] = useState(false)
  const [resetLetterCount, setResetLetterCount] = useState(0)
  const audioRef = useRef(null)

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ffb7c5', '#ff4f79', '#ffe4e1', '#fffcf9']
    })
  }

  const handleStart = () => {
    setStarted(true)
    triggerConfetti()

    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlayingMusic(true)
        })
        .catch(() => {
          console.log('Autoplay was prevented by browser policy')
        })
    }
  }

  const handleToggleMusic = () => {
    if (!audioRef.current) return

    if (audioRef.current.paused) {
      audioRef.current
        .play()
        .then(() => setIsPlayingMusic(true))
        .catch((e) => console.log('Playback error:', e))
    } else {
      audioRef.current.pause()
      setIsPlayingMusic(false)
    }
  }

  const handleReplay = () => {
    setResetLetterCount((prev) => prev + 1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setTimeout(() => {
      triggerConfetti()
    }, 700)
  }

  return (
    <div className="app-container">
      {/* Background Audio */}
      <audio ref={audioRef} loop preload="auto">
        <source src={hbdAudio} type="audio/mpeg" />
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
      </audio>

      {/* Floating Sparkles & Hearts */}
      <FloatingDecorations />

      {/* Floating Music Toggle */}
      <MusicToggle
        visible={started}
        isPlaying={isPlayingMusic}
        onToggle={handleToggleMusic}
      />

      {/* 1. Opening Screen */}
      <OpeningScreen visible={!started} onStart={handleStart} />

      {/* Main Birthday Content */}
      {started && (
        <main id="main-content" className="main-container">
          <HeroSection />
          <IntroSection />
          <MemoryGallery />
          <LetterSection resetTrigger={resetLetterCount} />
          <BirthdayWishes />
          <CakeSection onReplay={handleReplay} />
          <Footer />
        </main>
      )}
    </div>
  )
}
