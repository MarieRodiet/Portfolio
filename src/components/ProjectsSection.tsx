import { useState } from 'react'
import { projects, types } from '../data/projects'
import { ReactComponent as Arrow } from '../assets/SVG/angle-down-solid.svg'

type Props = {
  isEnglish: boolean
}
export default function ProjectsSection({ isEnglish }: Props) {
  const [toggled, updateToggle] = useState(false)
  const projects_types = Object.values(types || {})
  const [selectedType, setType] = useState(projects_types.at(0))
  const filteredProjects =
    selectedType === projects_types[0]
      ? projects
      : projects.filter((p) => p.type === selectedType)

  return (
    <section className="projectsSection">
      <div className="projectsSection-header">
        <Arrow
          onKeyDown={() => updateToggle(!toggled)}
          onClick={() => updateToggle(!toggled)}
          className={toggled ? 'svg-up' : 'svg-down'}
        />
        <h1 className="projectsSection-header-title" id="projects">
          {isEnglish ? 'Projects' : 'Projets'}
        </h1>
      </div>

      {!toggled ? (
        <div>
          <select
            className="projectsSection-selectTypes"
            value={selectedType}
            onChange={(e) => {
              const selected = (e.target as HTMLSelectElement).value as types
              setType(selected)
            }}
          >
            {projects_types.map((t, i) => (
              <option
                key={`${`${i}`}`}
                value={`${`${t}`}`}
                onClick={() => setType(t)}
              >
                {t}
              </option>
            ))}
          </select>

          <div className="projectsSection-container">
            {filteredProjects.map((p, i) => (
              <div
                key={`${`${i} home page ${p.name}`}`}
                className="projectsSection-container-project"
              >
                <h2 className="projectsSection-container-project-name">
                  {p.name}
                </h2>
                <div className="projectsSection-container-project-content">
                  <div className="projectsSection-container-project-content-links">
                    <img
                      className="projectsSection-container-project-content-links-img"
                      src={p.img}
                      alt={`home page ${p.name}}`}
                    />
                    <div className="projectsSection-container-project-content-links-linksContainer">
                      <a
                        className="projectsSection-container-project-content-links-linksContainer-website"
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {isEnglish ? 'See on Github' : 'Voir sur Github'}
                      </a>
                      {p.website ? (
                        <a
                          className="projectsSection-container-project-content-links-linksContainer-website"
                          href={p.website}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {isEnglish ? 'See it live!' : 'Voir en live!'}
                        </a>
                      ) : null}
                    </div>
                  </div>
                  <div className="projectsSection-container-project-content-description">
                    {isEnglish ? p.en : p.fr}
                  </div>
                  <div className="projectsSection-container-project-content-tags">
                    {p.tags.map((element, j) => (
                      <span key={`${j + element}`}>{element}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  )
}
