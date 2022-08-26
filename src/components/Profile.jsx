import { PropTypes } from 'prop-types'
import profilePicture from '../assets/IMG/profile-picture.png'

export default function Profile({ isEnglish }) {
  return (
    <div className="profile" id="aboutme">
      <div className="profile-text">
        <h1 className="profile-text-name">Marie Moore</h1>
        {isEnglish ? (
          <p className="profile-text-intro">
            Hello! I am a front-end web developper committed to building website
            that are professional, accessible and responsive while keeping in
            mind technical constraints. I started my journey in programming
            beginning of 2020 in Oregon, USA. I learned to code Fullstack web
            sites through ASP.Net Core MVC and Entity Framework Core. I oriented
            my focus toward Front End and is now specialized in React and Redux.
            Since my move back to France, I keep building on my skills in
            different frontend web technologies as well as UX/UI Design. Please
            feel free to contact me directly via the form below or the social
            network of your choice. Thanks for visiting!
          </p>
        ) : (
          <p className="profile-text-intro">
            Bonjour! Je suis une développeuse web Front End spécialisée en
            Javascript React. Je m&apos; engage à créer des sites
            professionnels, accessibles et responsive en gardant en tête les
            contraintes techniques. J&apos;ai débuté ma reconversion début 2020
            aux USA dans la programmation de site web Full Stack. A
            l&apos;époque je codais des applications web connectée à une base de
            données a travers ASP.NET Core MVC et Entity Framework Core. Je me
            suis graduellement orientée vers le Front End puis spécialisée en
            React et Redux. Depuis mon retour en France, je monte
            quotidiennement en compétence notamment dans le Web Design.
            N&apos;hésitez pas à me contacter par le formulaire ou le réseau
            social de votre choix! Merci de votre visite!
          </p>
        )}
      </div>
      <div className="profile-imgContainer">
        <img
          className="profile-imgContainer-picture"
          src={profilePicture}
          alt="Marie Moore profile"
        />
      </div>
    </div>
  )
}
Profile.propTypes = {
  isEnglish: PropTypes.bool,
}
