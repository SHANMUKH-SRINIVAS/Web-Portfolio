import React from 'react'
import { education } from '../data'

export default function Education() {
  return (
    <section id="education" className="section section--education">
      <div className="container">
        <h2 className="section__title">Education</h2>
        <div className="education__grid">
          {education.map((item) => (
            <article key={item.id} className="edu-card">
              <h3 className="edu-card__degree">{item.degree}</h3>
              <p className="edu-card__institution">{item.institution}</p>
              <p className="edu-card__meta">
                {item.period} · {item.location}
              </p>
              {item.highlights && item.highlights.length > 0 && (
                <ul className="edu-card__highlights">
                  {item.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
