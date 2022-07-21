import { slide as Menu } from 'react-burger-menu'
import logo from '../assets/MM.png'
export default function Nav() {
  return (
    <div>
      <nav className="nav">
        <img src={logo} alt="Marie Moore logo" className="nav-logo" />
        <ul className="nav-links">
          <li className="nav-links-link">About Me</li>
          <li className="nav-links-link">Projects</li>
          <li className="nav-links-link">Contact Me</li>
        </ul>
      </nav>
      <div className="burger-nav">
        <Menu>
          <a className="menu-item" href="/">
            About Me
          </a>
          <a className="menu-item" href="/projects">
            Projects
          </a>
          <a className="menu-item" href="/form">
            Contact Me
          </a>
        </Menu>
      </div>
    </div>
  )
}
