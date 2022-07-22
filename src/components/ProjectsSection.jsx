import SportSee from '../assets/IMG/sportsee.png'
import ArgentBank from '../assets/IMG/argentbank.png'

export default function ProjectsSection() {
  const projects = [
    {
      img: ArgentBank,
      name: 'ArgentBank',
      description:
        'Use of Backend API for Authentification and fetching data, Documentation with Postman and Swagger',
      tags: ['REACT', 'REDUX', 'SWAPPER', 'POSTMAN'],
      url: 'https://github.com/MarieRodiet/argentBank-Front',
    },
    {
      img: SportSee,
      name: 'Sportsee',
      description: 'An app fetching data and converting it in amazing graphs',
      tags: ['HTML', 'SASS', 'RECHARTS', 'REACT'],
      url: 'https://github.com/MarieRodiet/sportsee_front',
    },
  ]
  return (
    <section className="projectsSection">
      <h1 className="projectsSection-title">Projects</h1>
      <div className="projectsSection-container">
        {projects.map((p) => (
          <a
            href={p.url}
            target="_blank"
            key={p.name}
            className="projectsSection-container-project"
          >
            <h3 className="projectsSection-container-project-name">{p.name}</h3>
            <div className="projectsSection-container-project-content">
              <img
                className="projectsSection-container-project-content-img"
                src={p.img}
                alt="project"
              />
              <div className="projectsSection-container-project-content-description">
                {p.description}
              </div>
              <div className="projectsSection-container-project-content-tags">
                {p.tags.map((element) => (
                  <span>{element}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
