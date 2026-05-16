import React from 'react'
import { profile } from '../data'

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      <div className="hero__content">
        <p className="hero__greeting">Hi, I'm</p>
        <h1 className="hero__name">{profile.name}</h1>
        <p className="hero__tagline">{profile.tagline}</p>
        <p className="hero__location">{profile.location}</p>
        <div className="hero__actions">
          <button type="button" className="btn btn--primary" onClick={() => scrollTo('projects')}>
            View projects
          </button>
          <button type="button" className="btn btn--secondary" onClick={() => scrollTo('contact')}>
            Get in touch
          </button>
        </div>
      </div>
      <div className="hero__scroll" aria-hidden="true">
      
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
