import SportSee from '../assets/IMG/sportsee.png'
import ArgentBank from '../assets/IMG/argentbank.png'
import Kasa from '../assets/IMG/kasa.png'
import LearnAtHome from '../assets/IMG/learnathome.png'
import LesPetitsPlats from '../assets/IMG/lespetitsplats.png'
import Fisheye from '../assets/IMG/fisheye.png'
import Healthwealth from '../assets/IMG/healthwealth.png'
import Table from '../assets/IMG/table.png'
import Markdown from '../assets/IMG/markdown.png'
import Portfolio from '../assets/IMG/portfolio.png'
import DrumMachine from '../assets/IMG/drummachine.png'
import Booki from '../assets/IMG/booki.png'

export const projects = [
  {
    img: Portfolio,
    name: 'Portfolio',
    fr: ' Une application React codée initialement en JavaScript Vanilla, et ensuite convertie en Typescript. Elle utilise SASS pour le prétraitement CSS afin de respecter le principe DRY. ',
    en: 'This React application, initially in Vanilla JavaScript, was later converted to Typescript. It employs SASS for CSS preprocessing to adhere to the DRY principle. ',
    tags: ['TYPESCRIPT', 'SASS', 'ANIMATIONS'],
    website: 'https://mariemoore.site',
    url: 'https://github.com/MarieRodiet/portfolio',
  },
  {
    img: DrumMachine,
    name: 'Drum Machine',
    fr: "Cette application simpliste m'a permit de découvrir la fameuse framework Material UI, outil permettant un developpement simple et très rapide.  ",
    en: 'A web app for practicing DOM Manipulation with Typescript and utilizing Material UI for rapid development.',
    tags: ['TYPESCRIPT', 'MATERIAL', 'DOM'],
    website: 'https://marierodiet.github.io/drum-machine/',
    url: 'https://github.com/MarieRodiet/drum-machine',
  },
  {
    img: Markdown,
    name: 'MD Previewer',
    fr: "Previewer dans lequel la saisie d'un texte Markdown se voit immédiatement convertie. Elle est stylée avec Tailwind CSS et utilise la bibliothèque Marked JS.",
    en: 'This app allows users to input Markdown text and view the formatted output instantly. Developed with Typescript, styled with Tailwind CSS, and Markdown conversion by the Marked library.',
    tags: ['TYPESCRIPT', 'TAILWING', 'MARKED'],
    website: 'https://marierodiet.github.io/markedown-previewer/',
    url: 'https://github.com/MarieRodiet/markedown-previewer',
  },
  {
    img: Table,
    name: 'Data Table Library',
    fr: 'Une bibliothèque de composant React compilée avec Vite, offrant des fonctionnalités telles que la pagination, le filtrage et le tri. Très personnalisable avec des thèmes et des fonctionnalités optionnelles. ',
    en: 'A React component library compiled with Vite, offering features like pagination, filtering, and sorting. Highly customizable with themes and optional features.',
    tags: ['NPM', 'VITE', 'TESTING'],
    website: 'https://www.npmjs.com/package/table-react-component-library',
    url: 'https://github.com/MarieRodiet/table-react-component-library',
  },
  {
    img: Healthwealth,
    name: 'Healthwealth',
    fr: 'Application web utilisant les hooks de React, le store Redux et Lighthouse pour la gestion des données des employés et le test de performance.',
    en: 'Web application employing React hooks, Redux store, and Lighthouse for managing employee data and testing performance. ',
    tags: ['REACT', 'LIGHTHOUSE', 'REDUX'],
    website: 'https://marierodiet.github.io/wealthhealth/',
    url: 'https://github.com/MarieRodiet/wealthhealth',
  },
  {
    img: ArgentBank,
    name: 'ArgentBank',
    fr: "Un projet frontend intégré à une API backend pour l'authentification des utilisateurs, le stockage et la manipulation des données. La documentation a été facilitée avec Swagger et les tests initiaux ont été effectués avec Postman.",
    en: 'A frontend project integrated with a backend API for user authentication, data storage, and manipulation. ',
    tags: ['REDUX', 'SWAGGER', 'POSTMAN'],
    url: 'https://github.com/MarieRodiet/argentBank-Front',
  },
  {
    img: SportSee,
    name: 'Sportsee',
    fr: 'Développé avec Create React App, utilisant React Router et Hooks pour une navigation fluide et un réaffichage des composants. ',
    en: 'Fetches data to generate visually appealing graphs. Utilizes the factory pattern for URL management.',
    tags: ['API', 'RECHARTS', 'REACT'],
    url: 'https://github.com/MarieRodiet/sportsee_front',
  },
  {
    img: Kasa,
    name: 'Kasa',
    fr: 'Cette Application Web a été créee avec CRA et utilise React Router et React Hooks pour que les composants puissent se réafficher au besoin de la navigation.',
    en: 'Developed with Create React App, employing React Router and Hooks for seamless navigation and component re-rendering.',
    tags: ['REACT', 'HOOKS', 'ROUTER'],
    url: 'https://github.com/MarieRodiet/kasa',
    website: 'https://marierodiet.github.io/kasa/',
  },
  {
    img: LearnAtHome,
    name: 'Learn@Home',
    fr: " Un projet mettant l'accent sur les principes de conception Web et la documentation, comprenant des cas d'utilisation, des histoires d'utilisateurs, des diagrammes, des maquettes et des fichiers Figma. ",
    en: 'A project emphasizing Web Design principles and documentation, including Use Cases, User Stories, diagrams, mockups, and Figma files. ',
    tags: ['AGILE', 'FIGMA', 'UI/UX'],
    url: 'https://github.com/MarieRodiet/learnAtHome',
    website:
      'https://www.figma.com/file/9Ch3Q6IListIcm51rcarKX/Learn%40Home?node-id=20%3A618',
  },
  {
    img: LesPetitsPlats,
    name: 'Les Petits Plats',
    fr: "Une plateforme de recherche de recettes mettant en valeur des filtres de recherche optimisés et des vérifications d'accessibilité.",
    en: 'A recipe search platform showcasing optimized search filters and accessibility checks.',
    tags: ['JSBENCH', 'ALGORYTHMS', 'WAVE'],
    url: 'https://github.com/MarieRodiet/Les-Petits-Plats',
    website: 'http://mariemoore.site/LesPetitsPlats/',
  },
  {
    img: Fisheye,
    name: 'Fisheye',
    fr: ' Application Web codée en JavaScript Vanilla mettant en œuvre des concepts OOP et le pattern factory pour le rendu des médias.',
    en: 'Web app coded in Vanilla JavaScript implementing OOP concepts and the factory design pattern for media rendering. ',
    tags: ['ACCESSIBILITY', 'FETCH', 'ROUTER'],
    url: 'https://github.com/MarieRodiet/Fisheye',
    website: 'https://marierodiet.github.io/Fisheye/',
  },
  {
    img: Booki,
    name: 'Booki',
    fr: 'Site Web simple codé en HTML/CSS et hébergé sur cPanel. Entièrement responsive avec une approche Mobile First.  ',
    en: 'Simple website coded in HTML/CSS, responsive with a Mobile First approach, and hosted on cPanel.',
    tags: ['HTML/CSS', 'SEO', 'RESPONSIVE'],
    url: 'https://github.com/MarieRodiet/Booki',
    website: 'http://mariemoore.site/Booki/',
  },
]
