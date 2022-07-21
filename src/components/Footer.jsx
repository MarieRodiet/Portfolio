import { ReactComponent as Sun } from '../assets/sun.svg'
import { ReactComponent as Moon } from '../assets/moon.svg'

export default function Footer() {
  const isLightTheme = true
  return (
    <footer>
      <span>Copyright 2022 Marie Moore</span>
      <div>${isLightTheme ? <Moon /> : <Sun />}</div>
    </footer>
  )
}
