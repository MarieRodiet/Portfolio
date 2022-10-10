import { useState } from 'react'
import { send } from 'emailjs-com'
import { PropTypes } from 'prop-types'
import Button from './Button'

export default function FormSection({ isEnglish }) {
  const [clickedMessageButton, setClickedMessageButton] = useState(false)
  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
    reply_to: '',
  })
  const [loading, setLoading] = useState(false)

  const buttonText = () => {
    if (clickedMessageButton) {
      if (isEnglish) {
        return 'Thanks!'
      }
      return 'Merci!'
    }

    if (isEnglish) {
      return 'Send'
    }
    return 'Envoyer'
  }

  const onSubmit = (e) => {
    setLoading(true)
    e.preventDefault()
    send('service_dyz2255', 'template_cqdshuy', toSend, 'v6m1Gves3KCpgNMLl')
      .then(() => {
        setClickedMessageButton(!clickedMessageButton)
        setLoading(false)
      })
      .catch((err) => {
        throw err
      })
  }
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value })
  }
  return (
    <div className="formSection" id="contactme">
      <h1 className="formSection-header">
        {isEnglish ? "Let's connect!" : 'Contactez-moi!'}
      </h1>
      <form className="formSection-form" onSubmit={onSubmit}>
        <div className="formSection-form-inputWrapper">
          <label htmlFor="name">Name</label>
          <input
            required
            id="name"
            type="text"
            name="from_name"
            placeholder={isEnglish ? 'First and Last name' : 'Nom et Prénom'}
            value={toSend.from_name}
            onChange={handleChange}
          />
        </div>
        <div className="formSection-form-inputWrapper">
          <label htmlFor="email">Email</label>
          <input
            required
            id="email"
            type="email"
            name="reply_to"
            placeholder="email@gmail.com"
            value={toSend.reply_to}
            onChange={handleChange}
          />
        </div>
        <div className="formSection-form-inputWrapper">
          <label htmlFor="Message">Message</label>
          <textarea
            required
            id="Message"
            type="text"
            name="message"
            placeholder="Message"
            value={toSend.message}
            onChange={handleChange}
          />
        </div>
        <Button
          className="button"
          type="submit"
          buttonText={buttonText()}
          isSent={clickedMessageButton}
          loading={loading}
        />
      </form>
    </div>
  )
}

FormSection.propTypes = {
  isEnglish: PropTypes.bool,
}
