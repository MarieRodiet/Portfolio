import PropTypes from 'prop-types'
import { ReactComponent as Check } from '../assets/SVG/check-solid.svg'

export default function Button({ buttonText, isSent, loading }) {
  return (
    <button type="submit" className="button" disabled={isSent}>
      {loading ? <Check className="button-check" /> : buttonText}
    </button>
  )
}

Button.propTypes = {
  buttonText: PropTypes.string,
  isSent: PropTypes.bool,
  loading: PropTypes.bool,
}
