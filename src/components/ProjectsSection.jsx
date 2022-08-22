import SportSee from '../assets/IMG/sportsee.png'
import ArgentBank from '../assets/IMG/argentbank.png'
import Kasa from '../assets/IMG/kasa.png'
import LearnAtHome from '../assets/IMG/learnathome.png'
import LesPetitsPlats from '../assets/IMG/lespetitsplats.png'
import Billed from '../assets/IMG/billed.png'
import Fisheye from '../assets/IMG/fisheye.png'
import SliderPuzzle from '../assets/IMG/sliderpuzzle.png'
import Booki from '../assets/IMG/booki.png'
import OhMyFood from '../assets/IMG/ohmyfood.png'

export default function ProjectsSection() {
  const projects = [
    {
      img: ArgentBank,
      name: 'ArgentBank',
      description:
        'This project is linked to a Backend API accessed through POST and PUT HTTP requests. Authentificating the user, storing the token along with fetching and modifying his/her data were the main focus of this project. Some documentation with Swagger and some initial testing of the API with Postman made it extra fun. You will need to install the back end (See readme file) on your machine to make my app work!',
      tags: ['REACT', 'REDUX', 'SWAPPER', 'POSTMAN'],
      url: 'https://github.com/MarieRodiet/argentBank-Front',
    },
    {
      img: SportSee,
      name: 'Sportsee',
      description:
        'This app fetches data and converts it into amazing looking graphs. I used the factory pattern (see pages/App.js) to simplify the process of bringing in data from different locations. A single boolean is responsible for getting the right URL through which the data is going to be fetched => either from a local server or from a json file located within the root folder',
      tags: ['API', 'SASS', 'RECHARTS', 'REACT'],
      url: 'https://github.com/MarieRodiet/sportsee_front',
    },
    {
      img: Kasa,
      name: 'Kasa',
      description:
        'This Web application uses React and fetchs data from a local json file. It uses react router, hooks along with some sass to style all that ',
      tags: ['REACT', 'JSON', 'RESPONSIVE', 'JSX'],
      url: 'https://github.com/MarieRodiet/kasa',
    },
    {
      img: LearnAtHome,
      name: 'Learn@Home',
      description:
        "This little but challenging project involves understanding the client's needs of a website and write precise documentation such as Use Cases and User Stories. The next step of the project was to create the mockup and transform it into a beautiful and professional design",
      tags: ['AGILE', 'FIGMA', 'UI/UX', 'DOC'],
      url: 'https://github.com/MarieRodiet/learnAtHome',
      website:
        'https://www.figma.com/file/9Ch3Q6IListIcm51rcarKX/Learn%40Home?node-id=20%3A618',
    },
    {
      img: LesPetitsPlats,
      name: 'Les Petits Plats',
      description:
        'This Web application will show you my algorithms skills through the optimized search filters that I created in order to find recipes',
      tags: ['JSBENCH', 'ALGO', 'ES6', 'WAVE'],
      url: 'https://github.com/MarieRodiet/Les-Petits-Plats',
      website: 'http://mariemoore.site/LesPetitsPlats/',
    },
    {
      img: Billed,
      name: 'Billed',
      description:
        'This project is about testing a web application that was coded long ago with jQuery code and no comment. You will need to install the back end (See readme file) on your machine to make my app work!',
      tags: ['JEST', 'E2E TESTS', 'DEBUGGING'],
      url: 'https://github.com/MarieRodiet/Billed',
    },
    {
      img: Fisheye,
      name: 'Fisheye',
      description:
        'In this web app coded in Vanilla Javascript I used ES6 and the factory design pattern in order to switch the media template depending on to its type (picture or video). This site is hosted on Github pages',
      tags: ['ACCESSIBILITY', 'FETCH', 'ESLINT'],
      url: 'https://github.com/MarieRodiet/Fisheye',
      website: 'https://marierodiet.github.io/Fisheye/',
    },
    {
      img: SliderPuzzle,
      name: 'Slider Puzzle',
      description:
        'This is a little game I coded in order to practice DOM manipulation, canvas and logic in Javascript',
      tags: ['JS', 'CANVAS', 'DOM'],
      url: 'https://github.com/MarieRodiet/sliderPuzzleRepo',
      website: 'http://mariemoore.site/SliderPuzzle/',
    },
    {
      img: Booki,
      name: 'Booki',
      description:
        'This is a simple website coded in HTML and CSS and hosted on cPanel.',
      tags: ['HTML', 'CSS', 'SEO'],
      url: 'https://github.com/MarieRodiet/Booki',
      website: 'http://mariemoore.site/Booki/',
    },
    {
      img: OhMyFood,
      name: 'Oh My Food',
      description:
        'This is my first project using Sass and creating fancy animations with css. This site is also hosted on cPanel',
      tags: ['GIT', 'SASS', 'ANIMATION'],
      url: 'https://github.com/MarieRodiet/OhMyFood',
      website: 'http://mariemoore.site/ohmyfood/',
    },
  ]
  return (
    <section className="projectsSection" id="projects">
      <h1 className="projectsSection-title">Projects</h1>
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
                    See code
                  </a>
                  {p.website ? (
                    <a
                      className="projectsSection-container-project-content-links-linksContainer-website"
                      href={p.website}
                      target="_blank"
                    >
                      See it live!
                    </a>
                  ) : null}
                </div>
              </div>
              <div className="projectsSection-container-project-content-description">
                {p.description}
              </div>
              <div className="projectsSection-container-project-content-tags">
                {p.tags.map((element, j) => (
                  <span key={`${j + element}`}>{element}</span>
                ))}
              </div>
            </div>
            {/* //   </a> */}
          </div>
        ))}
      </div>
    </section>
  )
}
