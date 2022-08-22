import PropTypes from 'prop-types'

export default function Button(props) {
  return (
    <button type="submit" className="button">
      {props.content}
    </button>
  )
}

Button.propTypes = {
  content: PropTypes.string,
}
