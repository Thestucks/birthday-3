import React from 'react'

export default function MusicToggle({ isPlaying, onToggle, visible }) {
  if (!visible) return null

  return (
    <button
      onClick={onToggle}
      className="music-btn"
      aria-label={isPlaying ? 'Pause music' : 'Play music'}
      title={isPlaying ? 'Matikan musik' : 'Putar musik'}
    >
      <i className={`fas ${isPlaying ? 'fa-volume-up' : 'fa-volume-mute'}`}></i>
    </button>
  )
}
