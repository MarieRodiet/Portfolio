import PropTypes from 'prop-types'

export default function Button({ buttonText }) {
  return (
    <button type="submit" className="button">
      {buttonText}
    </button>
  )
}

Button.propTypes = {
  buttonText: PropTypes.string,
}
