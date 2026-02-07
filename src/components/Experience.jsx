import React from 'react'
import { experience } from '../data'

export default function Experience() {
  return (
    <section id="experience" className="section section--experience">
      <div className="container">
        <h2 className="section__title">Experience</h2>
        <div className="timeline">
          {experience.map((item) => (
            <article key={item.id} className="timeline__item">
              <div className="timeline__marker" />
              <div className="timeline__content">
                <div className="timeline__header">
                  <h3 className="timeline__role">{item.role}</h3>
                  <p className="timeline__company">{item.company}</p>
                  <p className="timeline__meta">
                    {item.period} · {item.location}
                  </p>
                </div>
                <ul className="timeline__points">
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
