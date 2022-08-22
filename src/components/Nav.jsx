import { slide as Menu } from 'react-burger-menu'
import { HashLink } from 'react-router-hash-link'
import { useState } from 'react'
import logo from '../assets/IMG/MM.png'

export default function Nav() {
  const [isOpen, setOpen] = useState(false)
  const handleIsOpen = () => {
    setOpen(!isOpen)
  }
  const handleIsClosed = () => {
    setOpen(false)
  }
  return (
    <div>
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
            About Me
          </HashLink>
          <HashLink
            smooth
            className="nav-links-link"
            to="#projects"
            scroll={(el) =>
              el.scrollIntoView({ behavior: 'auto', block: 'end' })
            }
          >
            Projects
          </HashLink>
          <HashLink
            smooth
            className="nav-links-link"
            to="#contactme"
            scroll={(el) =>
              el.scrollIntoView({ behavior: 'auto', block: 'end' })
            }
          >
            Contact Me
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
            About Me
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
            Projects
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
            Contact Me
          </HashLink>
        </Menu>
      </div>
    </div>
  )
}
