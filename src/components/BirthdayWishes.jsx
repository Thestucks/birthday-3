import React from 'react'

const WISHES = [
  {
    icon: '🌸',
    title: 'Kesehatan',
    desc: 'Semoga selalu diberikan kesehatan, kekuatan, dan dilindungi di setiap langkahmu.'
  },
  {
    icon: '🧸',
    title: 'Kebahagiaan',
    desc: 'Semoga harimu selalu dipenuhi tawa riang dan hati yang damai setiap harinya.'
  },
  {
    icon: '🌟',
    title: 'Kelancaran',
    desc: 'Semoga segala urusan, cita-cita, dan impianmu dipermudah dan berjalan lancar.'
  },
  {
    icon: '💝',
    title: 'Cinta & Hangat',
    desc: 'Semoga selalu dikelilingi oleh orang-orang baik yang tulus menyayangimu.'
  }
]

export default function BirthdayWishes() {
  return (
    <section className="wishes-section card-wrapper">
      <h2 className="section-title">
        <i className="fa-solid fa-wand-magic-sparkles"></i> Birthday Wishes
      </h2>
      <p className="section-subtitle">
        Harapan-harapan terbaik khusus untukmu 🎀
      </p>

      <div className="wishes-grid">
        {WISHES.map((w, index) => (
          <div key={index} className="wish-card">
            <div className="wish-icon">{w.icon}</div>
            <h3>{w.title}</h3>
            <p>{w.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
