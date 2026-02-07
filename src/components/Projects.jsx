import React from 'react'
import { projects } from '../data'

export default function Projects() {
  return (
    <section id="projects" className="section section--projects">
      <div className="container">
        <h2 className="section__title">Projects</h2>
        <p className="section__subtitle">
          Click through to see live demos and source code.
        </p>
        <div className="projects__grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              {project.image && (
                <div className="project-card__image">
                  <img src={project.image} alt="" />
                </div>
              )}
              <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.description}</p>
                <div className="project-card__tech">
                  {project.tech.map((t) => (
                    <span key={t} className="project-card__tag">{t}</span>
                  ))}
                </div>
                <div className="project-card__links">
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__link project-card__link--primary"
                    >
                      Live demo
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__link project-card__link--secondary"
                    >
                      Code
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
