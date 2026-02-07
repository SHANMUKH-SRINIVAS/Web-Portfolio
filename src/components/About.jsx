import React from 'react'
import { profile } from '../data'

export default function About() {
  return (
    <section id="about" className="section section--about">
      <div className="container">
        <h2 className="section__title">About</h2>
        <div className="about__grid">
          <div className="about__text">
            <p className="about__lead">{profile.about}</p>
          </div>
          <div className="about__meta">
            <p><strong>Location</strong> {profile.location}</p>
            <p><strong>Email</strong>{' '}
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </p>
            <div className="about__links">
              {profile.linkedin && (
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  LinkedIn
                </a>
              )}
              {profile.github && (
                <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  GitHub
                </a>
              )}
              {profile.resumeUrl && profile.resumeUrl !== '#' && (
                <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
                  Resume (PDF)
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
