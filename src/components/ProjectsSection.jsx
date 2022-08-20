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
        'This project is linked to a Backend API though different HTTP request. Authentification, fetching and modifying data , Documentation with Postman and Swagger',
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
      description:
        'Web application using React and fetching data from a json file.',
      tags: ['REACT', 'JSON', 'RESPONSIVE', '404'],
      url: 'https://github.com/MarieRodiet/kasa',
    },
    {
      img: LearnAtHome,
      name: 'Learn@Home',
      description:
        'Project that involves understanding the client needs in order to write precise documentation, then create the mockup and finally come up with a beautiful and professional design',
      tags: ['AGILE', 'FIGMA', 'UI/UX'],
      url: 'https://github.com/MarieRodiet/learnAtHome',
    },
    {
      img: LesPetitsPlats,
      name: 'Les Petits Plats',
      description:
        'Web application with a couple of search algorithms created in order to filter recipes in multiple ways',
      tags: ['JSBENCH', 'ACCESSIBILITY', 'ALGO', 'BOOTSTRAP'],
      url: 'https://github.com/MarieRodiet/Les-Petits-Plats',
    },
    {
      img: Billed,
      name: 'Billed',
      description:
        'This project is about testing a web application that was coded with old jQuery code and no comment',
      tags: ['JEST', 'E2E TESTS', 'DEBUGGING'],
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
            key={`${`${i} home page ${p.name}`}`}
            className="projectsSection-container-project"
          >
            <h2 className="projectsSection-container-project-name">{p.name}</h2>
            <div className="projectsSection-container-project-content">
              <img
                className="projectsSection-container-project-content-img"
                src={p.img}
                alt={`home page ${p.name}}`}
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
