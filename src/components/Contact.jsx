import React from 'react'
import { profile } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="section section--contact">
      <div className="container">
        <h2 className="section__title">Get in touch</h2>
        <p className="contact__text">
          I'm open to new opportunities and happy to chat. Reach out via email or LinkedIn.
        </p>
        <div className="contact__links">
          <a href={`mailto:${profile.email}`} className="btn btn--primary">
            Email me
          </a>
          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--secondary"
            >
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
