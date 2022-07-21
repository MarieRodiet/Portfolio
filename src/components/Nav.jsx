import { useState } from 'react'
import { ReactComponent as BurgerMenu } from '../assets/burger-menu.svg'

export default function Nav() {
  const [showLinks, setShowLinks] = useState(false)

  //   useEffect(() => {
  //     const ul = document.querySelector('.nav-burger-links')
  //     if (ul.hasChildNodes) {
  //       const links = ul.childNodes
  //       console.log(links)
  //     }
  //   })
  return (
    <div>
      <nav className="nav">
        <div className="nav-logo"></div>
        <ul className="nav-links">
          <li className="nav-links-link">About Me</li>
          <li className="nav-links-link">Projects</li>
          <li className="nav-links-link">Contact Me</li>
        </ul>
        <BurgerMenu
          className="nav-burger"
          onClick={() => setShowLinks(!showLinks)}
        />

        {showLinks ? (
          <ul className="nav-burger-links">
            <li className="nav-burger-links-link">About Me</li>
            <li className="nav-burger-links-link">Projects</li>
            <li className="nav-burger-links-link">Contact Me</li>
          </ul>
        ) : null}
      </nav>
    </div>
  )
}
