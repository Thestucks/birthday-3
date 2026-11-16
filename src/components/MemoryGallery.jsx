import React, { useState } from 'react'
import LightboxModal from './LightboxModal'
import r1 from '../assets/r1.jpeg'
import r2 from '../assets/r2.jpeg'
import r3 from '../assets/r3.jpeg'
import r4 from '../assets/r4.jpeg'

const MEMORIES = [
  { id: 1, src: r1, caption: 'Momen Manis 🌸' },
  { id: 2, src: r2, caption: 'Momen Bahagia ✨' },
  { id: 3, src: r3, caption: 'Tawa yang selalu hangat 🧸' },
  { id: 4, src: r4, caption: 'Hari-hari indah bersamamu 💖' }
]

export default function MemoryGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  return (
    <>
      <section className="memory-section card-wrapper">
        <h2 className="section-title">
          <i className="fa-solid fa-heart-pulse"></i> Memory Gallery
        </h2>
        <p className="section-subtitle">
          Akan ada lebih banyak lagi fotonya disini hehe 🤭✨
        </p>

        <div className="polaroid-grid">
          {MEMORIES.map((memory) => (
            <div
              key={memory.id}
              className="polaroid-card"
              onClick={() => setSelectedPhoto(memory)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedPhoto(memory)
                }
              }}
            >
              <div className="polaroid-img-wrapper">
                <img
                  src={memory.src}
                  alt={memory.caption}
                  className="polaroid-img"
                  loading="lazy"
                />
              </div>
              <p className="polaroid-caption">{memory.caption}</p>
            </div>
          ))}
        </div>
      </section>

      <LightboxModal
        image={selectedPhoto?.src}
        caption={selectedPhoto?.caption}
        onClose={() => setSelectedPhoto(null)}
      />
    </>
  )
}
