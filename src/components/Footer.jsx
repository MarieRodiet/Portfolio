import { PropTypes } from 'prop-types'
import { ReactComponent as Sun } from '../assets/SVG/sun.svg'
import { ReactComponent as Moon } from '../assets/SVG/moon.svg'

export default function Footer({ text, isLightTheme, handleTheme }) {
  return (
    <footer>
      <span>{text}</span>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div className="icon" onClick={handleTheme} onKeyDown={handleTheme}>
        {isLightTheme ? <Sun /> : <Moon />}
      </div>
    </footer>
  )
}

Footer.propTypes = {
  text: PropTypes.string,
  isLightTheme: PropTypes.bool,
  handleTheme: PropTypes.func,
}
