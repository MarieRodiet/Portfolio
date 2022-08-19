import SportSee from '../assets/IMG/sportsee.png'
import ArgentBank from '../assets/IMG/argentbank.png'
import Kasa from '../assets/IMG/kasa.png'
import LearnAtHome from '../assets/IMG/learnathome.png'
import LesPetitsPlats from '../assets/IMG/lespetitsplats.png'
import Billed from '../assets/IMG/billed.png'

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
    {
      img: Kasa,
      name: 'Kasa',
      description: '',
      tags: ['REACT', 'JSON', 'RESPONSIVE', '404'],
      url: 'https://github.com/MarieRodiet/kasa',
    },
    {
      img: LearnAtHome,
      name: 'Learn@Home',
      description: '',
      tags: ['USER STORIES', 'FIGMA', 'USE CASES', 'UI/UX'],
      url: 'https://github.com/MarieRodiet/learnAtHome',
    },
    {
      img: LesPetitsPlats,
      name: 'Les Petits Plats',
      description: '',
      tags: ['JSBENCH', 'ACCESSIBILITY', 'ALGORITHMS', 'BOOTSTRAP'],
      url: 'https://github.com/MarieRodiet/Les-Petits-Plats',
    },
    {
      img: Billed,
      name: 'Billed',
      description: '',
      tags: ['JEST', 'E2E TESTS', 'CHROME DEBUGGER'],
      url: 'https://github.com/MarieRodiet/Billed',
    },
  ]
  return (
    <section className="projectsSection" id="projects">
      <h1 className="projectsSection-title">Projects</h1>
      <div className="projectsSection-container">
        {projects.map((p, i) => (
          <a
            href={p.url}
            target="_blank"
            key={`${i + p.name}`}
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
                {p.tags.map((element, j) => (
                  <span key={`${j + element}`}>{element}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
