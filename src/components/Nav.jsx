import { slide as Menu } from 'react-burger-menu'
import { HashLink } from 'react-router-hash-link'
import { useState } from 'react'
import { PropTypes } from 'prop-types'
import logo from '../assets/IMG/MM.png'

export default function Nav({ handleLanguageChange, isEnglish }) {
  const [isOpen, setOpen] = useState(false)
  const handleIsOpen = () => {
    setOpen(!isOpen)
  }
  const handleIsClosed = () => {
    setOpen(false)
  }

  return (
    <div>
      <button id="language-toggle" onClick={handleLanguageChange} type="button">
        {isEnglish ? '🇫🇷' : '🇬🇧'}
      </button>
      <nav className="nav">
        <img src={logo} alt="Marie Moore logo" className="nav-logo" />
        <ul className="nav-links">
          <HashLink
            smooth
            className="nav-links-link"
            to="#aboutme"
            scroll={(el) =>
              el.scrollIntoView({ behavior: 'auto', block: 'end' })
            }
          >
            {isEnglish ? 'About Me' : 'A Propos'}
          </HashLink>
          <HashLink
            smooth
            className="nav-links-link"
            to="#projects"
            scroll={(el) =>
              el.scrollIntoView({ behavior: 'auto', block: 'end' })
            }
          >
            {isEnglish ? 'Projects' : 'Projets'}
          </HashLink>
          <HashLink
            smooth
            className="nav-links-link"
            to="#contactme"
            scroll={(el) =>
              el.scrollIntoView({ behavior: 'auto', block: 'end' })
            }
          >
            {isEnglish ? 'Contact Me' : 'Contact'}
          </HashLink>
        </ul>
      </nav>
      <div className="burger-nav">
        <Menu onOpen={handleIsOpen} onClose={handleIsClosed} isOpen={isOpen}>
          <HashLink
            onClick={handleIsClosed}
            smooth
            className="menu-item"
            to="#aboutme"
            scroll={(el) =>
              el.scrollIntoView({ behavior: 'auto', block: 'end' })
            }
          >
            {isEnglish ? 'About Me' : 'A Propos'}
          </HashLink>
          <HashLink
            onClick={handleIsClosed}
            smooth
            className="menu-item"
            to="#projects"
            scroll={(el) =>
              el.scrollIntoView({ behavior: 'auto', block: 'end' })
            }
          >
            {isEnglish ? 'Projects' : 'Projets'}
          </HashLink>
          <HashLink
            onClick={handleIsClosed}
            smooth
            className="menu-item"
            to="#contactme"
            scroll={(el) =>
              el.scrollIntoView({ behavior: 'auto', block: 'end' })
            }
          >
            {isEnglish ? 'Contact Me' : 'Contact'}
          </HashLink>
        </Menu>
      </div>
    </div>
  )
}

Nav.propTypes = {
  handleLanguageChange: PropTypes.func,
  isEnglish: PropTypes.bool,
}
