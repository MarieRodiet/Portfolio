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
import Healthwealth from '../assets/IMG/healthwealth.png'

export const projects = [
  {
    img: Healthwealth,
    name: 'Healthwealth',
    fr: "Cette application web est encore en construction. Le but dans les prochains jour est de créer, publier et utiliser mes propres librairies de composents React. La Modale qui s'affiche pour confirmer l'enregistrement des données ainsi que le tableau et ses fonctionnalités sont mes futurs composents. Il me reste également à faire des audits de performance et à passer la soutenance. Veuillez noter que pour éviter de vous faire inscrire des employeés manuellement et pour pouvoir tester la fonctionnalité du réaffichage du tableau, j'ai utilisé une liste d'employées fictifs. Avec plaisir!",
    en: 'This web application is still in the process of being coded. My goal in the next few days is to create, publish and consume my own react component libraries. The pop-up confirming that the form was successfully submitted as well as the table rendering all the employees are the component libraries to-be. I also need to do some performance test with Lighthouse and pass the soutenance. Please keep in mind that I have added fictious employee data to the table in order to save your time and energy from manually entering it. This way you can test the functionalities of my table. You are welcome!',
    tags: ['REACT', 'NPM', 'LIGHTHOUSE', 'ALGO'],
    website: 'https://marierodiet.github.io/wealthhealth/',
    url: 'https://github.com/MarieRodiet/wealthhealth',
  },
  {
    img: ArgentBank,
    name: 'ArgentBank',
    fr: "Ce projet accède à des données en backend grâce à des requêtes HTTP POST et Put. Les défis à relever étaient d'authentifier l'utilisateur, de stocker le token renvoyé; ainsi que de récupérer et modifier les données avant de les renvoyer. Quelques recherches pour m'initier à Swagger et des tests initiaux des requêtes avec l'aide de POSTMAN, ont rendu ce projet très intéressant. Il vous faudra installer le backend (voir le fichier readme) sur votre ordinateur afin de faire fonctionner mon projet!",
    en: 'This project is linked to a Backend API accessed through POST and PUT HTTP requests. Authentificating the user, storing the token along with fetching and modifying his/her data were the main focus of this project. Some documentation with Swagger and some initial testing of the API with Postman made it extra fun. You will need to install the back end (See readme file) on your machine to make my app work!',
    tags: ['REACT', 'REDUX', 'SWAPPER', 'POSTMAN'],
    url: 'https://github.com/MarieRodiet/argentBank-Front',
  },
  {
    img: SportSee,
    name: 'Sportsee',
    fr: "Cette application récupère des données pour les convertir en graphiques visuellement très explicites et agréables. J'ai utilisé le Factory Pattern (voir pages/App.js) afin de simplifier le changement d'URL pour récupérer les données.",
    en: 'This app fetches data and converts it into amazing looking graphs. I used the factory pattern (see pages/App.js) to simplify the process of bringing in data from different locations. A single boolean is responsible for getting the right URL through which the data is going to be fetched => either from a local server or from a json file located within the root folder.',
    tags: ['API', 'SASS', 'RECHARTS', 'REACT'],
    url: 'https://github.com/MarieRodiet/sportsee_front',
  },
  {
    img: Kasa,
    name: 'Kasa',
    fr: 'Cette Application Web a été créee avec CRA et utilise React Router et React Hooks pour que les composants puissent se réafficher au besoin de la navigation.',
    en: 'This Web application uses React and fetchs data from a local json file. It uses react router, hooks along with some sass to style all that. ',
    tags: ['REACT', 'JSON', 'RESPONSIVE', 'JSX'],
    url: 'https://github.com/MarieRodiet/kasa',
    website: 'https://marierodiet.github.io/kasa/',
  },
  {
    img: LearnAtHome,
    name: 'Learn@Home',
    fr: "Ce petit projet atypique m'a fait découvrir le monde du Web Design, de ces outils, et surtout de ces défis. Il m'a permis d'aller plus loin en créant la documentation nécessaire au client et à l'équipe de développement: Use Cases, User Stories, les Mockups et enfin les maquettes Figma.",
    en: "This little but challenging project involves understanding the client's needs of a website and write precise documentation such as Use Cases and User Stories. The next step of the project was to create the mockup and transform it into a beautiful and professional design",
    tags: ['AGILE', 'FIGMA', 'UI/UX', 'USE CASES'],
    url: 'https://github.com/MarieRodiet/learnAtHome',
    website:
      'https://www.figma.com/file/9Ch3Q6IListIcm51rcarKX/Learn%40Home?node-id=20%3A618',
  },
  {
    img: LesPetitsPlats,
    name: 'Les Petits Plats',
    fr: "La création de cette plateforme de recherche de recettes a poussé les limites de la logique plus loin qu'elles ne l'étaient. J'ai pu optimiser les algorithmes utilisés grâce à JSBench et vérifier l'accessibilité de mon site avec WAVE.",
    en: 'This Web application will show you my algorithms skills through the optimized search filters that I created in order to find recipes.',
    tags: ['JSBENCH', 'ALGO', 'ES6', 'WAVE'],
    url: 'https://github.com/MarieRodiet/Les-Petits-Plats',
    website: 'http://mariemoore.site/LesPetitsPlats/',
  },
  {
    img: Billed,
    name: 'Billed',
    fr: "Les tests unitaires, tests d'intégration et E2E liés au déboguage ont permis de faire de moi une arme redoutable contre les bugs. Mon travail consistait à écrire des tests pour une application déja existante et à corriger ses bugs.",
    en: 'This project is about testing a web application that was coded long ago with jQuery code and no comment. You will need to install the back end (See readme file) on your machine to make my app work!',
    tags: ['JEST', 'E2E TESTS', 'DEBUGGING', 'JQUERY'],
    url: 'https://github.com/MarieRodiet/Billed',
  },
  {
    img: Fisheye,
    name: 'Fisheye',
    fr: "Pratiquer les Design Pattern et les concepts de Programmation Orientée Objet a été un aspect important de ce projet. L'application peut automatiquement afficher le composant image ou video selon le type de media. Merci à Github pages d'héberger mon site!",
    en: 'In this web app coded in Vanilla Javascript I practiced OOP concepts to create templates using classes as well as implementing the factory design pattern. This way, the app can switch automatically from rendering a media template depending on to its type (picture or video). This site is hosted on Github pages',
    tags: ['ACCESSIBILITY', 'FETCH', 'ESLINT'],
    url: 'https://github.com/MarieRodiet/Fisheye',
    website: 'https://marierodiet.github.io/Fisheye/',
  },
  {
    img: SliderPuzzle,
    name: 'Slider Puzzle',
    fr: "J'ai codé ce jeu afin de pratiquer la manipulation du DOM par Javascript, l'élément HTML Canvas et la logique par les algorithmes. Je n'avais pas réalisé à quel point ce programme serait un défi pour moi. J'ai perseveré et voilà! Jouez et faites vous plaisir!",
    en: 'This is a game I coded in order to practice DOM manipulation, canvas and logic in Javascript. It had no idea how complex it would be at the time I started it! I am glad I did not give up and was able to finish it. Play and enjoy!',
    tags: ['JS', 'CANVAS', 'DOM'],
    url: 'https://github.com/MarieRodiet/sliderPuzzleRepo',
    website: 'http://mariemoore.site/SliderPuzzle/',
  },
  {
    img: Booki,
    name: 'Booki',
    fr: "Ce site web tout simple hébergé sur cPanel a été codé en HTML et CSS sans aucune librairie. Il a est (comme tous mes sites web!) responsive. Toutefois, il a la particularité d'avoir été le premier codé en Mobile First. J'ai désormais adopté cette manière de faire du responsive. ",
    en: 'This is a simple website coded in HTML and CSS and hosted on cPanel. Like all other websites here, it is fully responsive. Booki is the first project on which I tested doing Mobile First responsive. I have not switch back to Desktop First ever since!',
    tags: ['HTML', 'CSS', 'SEO'],
    url: 'https://github.com/MarieRodiet/Booki',
    website: 'http://mariemoore.site/Booki/',
  },
  {
    img: OhMyFood,
    name: 'Oh My Food',
    fr: "Ohmyfood est un projet qui m'a fait découvrir les animations en CSS et aussi la fameuse librairie SASS! Deux coups de coeur d'un site que j'ai hébergés sur cPanel également.",
    en: 'This is my first project using Sass and creating fancy animations with css. This site is also hosted on cPanel',
    tags: ['GIT', 'SASS', 'ANIMATION'],
    url: 'https://github.com/MarieRodiet/OhMyFood',
    website: 'http://mariemoore.site/ohmyfood/',
  },
]
