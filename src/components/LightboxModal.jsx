import React, { useEffect } from 'react'

export default function LightboxModal({ image, caption, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  if (!image) return null

  return (
    <div
      className="lightbox-modal"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <button
        type="button"
        className="close-lightbox"
        onClick={onClose}
        aria-label="Close modal"
      >
        &times;
      </button>
      <img
        src={image}
        alt={caption || 'Memory preview'}
        className="lightbox-content"
      />
      {caption && <div id="lightbox-caption">{caption}</div>}
    </div>
  )
}
