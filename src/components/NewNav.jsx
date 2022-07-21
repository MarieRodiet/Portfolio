import { slide as Menu } from 'react-burger-menu'

export default function NewNav() {
  return (
    <Menu>
      <a className="menu-item" href="/">
        About Me
      </a>
      <a className="menu-item" href="/salads">
        Projects
      </a>
      <a className="menu-item" href="/pizzas">
        Contact Me
      </a>
    </Menu>
  )
}
