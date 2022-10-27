import { slide as Menu } from 'react-burger-menu'
import { HashLink } from 'react-router-hash-link'
import { useState } from 'react'
import logo from '../assets/IMG/MM.png'
import { useRef } from 'react'

type Props = {
  handleLanguageChange: React.MouseEventHandler
  isEnglish: boolean
}
export default function Nav({ handleLanguageChange, isEnglish }: Props) {
  const [isOpen, setOpen] = useState(false)
  const handleIsOpen = () => {
    setOpen(!isOpen)
  }
  const handleIsClosed = () => {
    setOpen(false)
  }

  const LinkOne = useRef<HTMLInputElement | null>(null)

  const scrolLWithUseRef = () => {
    LinkOne.current?.scrollIntoView({ block: 'start', behavior: 'smooth' })
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
            onClick={scrolLWithUseRef}
          >
            {isEnglish ? 'About Me' : 'A Propos'}
          </HashLink>
          <HashLink
            smooth
            className="nav-links-link"
            to="#projects"
            onClick={scrolLWithUseRef}
          >
            {isEnglish ? 'Projects' : 'Projets'}
          </HashLink>
          <HashLink
            smooth
            className="nav-links-link"
            to="#contactme"
            onClick={scrolLWithUseRef}
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
          >
            {isEnglish ? 'About Me' : 'A Propos'}
          </HashLink>
          <HashLink
            onClick={handleIsClosed}
            smooth
            className="menu-item"
            to="#projects"
          >
            {isEnglish ? 'Projects' : 'Projets'}
          </HashLink>
          <HashLink
            onClick={handleIsClosed}
            smooth
            className="menu-item"
            to="#contactme"
          >
            {isEnglish ? 'Contact Me' : 'Contact'}
          </HashLink>
        </Menu>
      </div>
    </div>
  )
}
