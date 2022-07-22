import { ReactComponent as Sun } from '../assets/SVG/sun.svg'
import { ReactComponent as Moon } from '../assets/SVG/moon.svg'

export default function Footer() {
  const isLightTheme = true
  return (
    <footer>
      <span>Copyright 2022 Marie Moore</span>
      <div className="icon">{isLightTheme ? <Moon /> : <Sun />}</div>
    </footer>
  )
}
