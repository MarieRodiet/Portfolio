import { PropTypes } from 'prop-types'
import { projects } from '../data/projects'
export default function ProjectsSection({ isEnglish }) {
  return (
    <section className="projectsSection">
      <h1 className="projectsSection-title" id="projects">
        {isEnglish ? 'Projects' : 'Projets'}
      </h1>
      <div className="projectsSection-container">
        {projects.map((p, i) => (
          <div
            key={`${`${i} home page ${p.name}`}`}
            className="projectsSection-container-project"
          >
            <h2 className="projectsSection-container-project-name">{p.name}</h2>
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
                  >
                    {isEnglish ? 'See on Github' : 'Voir sur Github'}
                  </a>
                  {p.website ? (
                    <a
                      className="projectsSection-container-project-content-links-linksContainer-website"
                      href={p.website}
                      target="_blank"
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
    </section>
  )
}
ProjectsSection.propTypes = {
  isEnglish: PropTypes.bool,
}
