import React, { useState, useEffect, useRef } from 'react'

const LETTER_MESSAGE = `Dear Bestie, 🎀

Selamat ulang tahun! Semoga di usiamu yang baru ini, kamu senantiasa dilimpahi kebahagiaan, kesehatan, dan dikelilingi oleh cinta dari orang-orang terbaik di sekitarmu.

Makasih ya sudah selalu menjadi sosok yang baik, hangat, dan membawa senyuman di hari-hari yang biasa. Semoga semua impian dan usahamu dipermudah langkah demi langkah.

Hari ini adalah harimu, jadi tersenyumlah yang lebar dan nikmati setiap detik kebahagiaan hari ini!

Dengan tulus,
Someone who cares about you 💖`

export default function LetterSection({ resetTrigger }) {
  const [isOpen, setIsOpen] = useState(false)
  const [typedText, setTypedText] = useState('')
  const letterContentRef = useRef(null)

  // Reset when resetTrigger changes
  useEffect(() => {
    if (resetTrigger > 0) {
      setIsOpen(false)
      setTypedText('')
    }
  }, [resetTrigger])

  useEffect(() => {
    let timer = null
    let index = 0

    if (isOpen) {
      setTypedText('')
      // Wait for envelope opening animation (800ms)
      const startTimer = setTimeout(() => {
        timer = setInterval(() => {
          if (index < LETTER_MESSAGE.length) {
            setTypedText(LETTER_MESSAGE.slice(0, index + 1))
            index++
            if (letterContentRef.current) {
              letterContentRef.current.scrollTop = letterContentRef.current.scrollHeight
            }
          } else {
            clearInterval(timer)
          }
        }, 40)
      }, 700)

      return () => {
        clearTimeout(startTimer)
        if (timer) clearInterval(timer)
      }
    } else {
      setTypedText('')
    }
  }, [isOpen])

  const toggleEnvelope = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <section className="letter-section card-wrapper">
      <h2 className="section-title">
        <i className="fa-solid fa-envelope-open-text"></i> Surat Untuk Bestie
      </h2>
      <p className="section-subtitle">
        Tap amplop di bawah ini untuk membaca suratnya 💌
      </p>

      <div className="envelope-wrapper">
        <div
          className={`envelope ${isOpen ? 'open' : ''}`}
          onClick={toggleEnvelope}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') toggleEnvelope()
          }}
          aria-expanded={isOpen}
          title="Klik untuk membuka / menutup surat"
        >
          <div className="front"></div>
          <div className="back"></div>
          <div className="letter-content" ref={letterContentRef}>
            <div className="letter-text">
              {typedText}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
