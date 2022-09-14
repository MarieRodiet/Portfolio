import { PropTypes } from 'prop-types'

export default function Footer({ text, SVG }) {
  return (
    <footer>
      <span>{text}</span>
      <div className="icon">{SVG}</div>
    </footer>
  )
}

Footer.propTypes = {
  text: PropTypes.string,
  SVG: PropTypes.string,
}
