import { useState } from 'react'
import { send } from 'emailjs-com'
import { ReactComponent as Github } from '../assets/SVG/github.svg'
import { ReactComponent as Email } from '../assets/SVG/email.svg'
import { ReactComponent as LinkedIn } from '../assets/SVG/linkedin.svg'

export default function FormSection() {
  const [clickedMessageButton, setClickedMessageButton] = useState(false)
  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
    reply_to: '',
  })
  const onSubmit = (e) => {
    e.preventDefault()
    send('service_dyz2255', 'template_cqdshuy', toSend, 'v6m1Gves3KCpgNMLl')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text)
        setClickedMessageButton(!clickedMessageButton)
      })
      .catch((err) => {
        console.error('FAILED...', err)
      })
  }
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value })
  }
  return (
    <div className="formSection" id="contactme">
      <h1 className="formSection-header">Let&apos;s connect</h1>
      <form className="formSection-form" onSubmit={onSubmit}>
        <div className="formSection-form-inputWrapper">
          <label htmlFor="name">Name</label>
          <input
            required
            id="name"
            type="text"
            name="from_name"
            placeholder="First and Last name"
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
            placeholder="youremail@gmail.com"
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
        {clickedMessageButton ? (
          <button className="formSection-form-sentBtn" type="submit">
            Thank you for reaching out!
          </button>
        ) : (
          <button className="formSection-form-btn" type="submit">
            Contact Me
          </button>
        )}
      </form>
      <div className="formSection-socialMediaContainer">
        <a
          href="https://github.com/MarieRodiet"
          target="_blank"
          aria-label="github link"
        >
          <Github className="formSection-socialMediaContainer-link" />
        </a>
        <a href="mailto:marie.rodiet@gmail.com" aria-label="email me">
          <Email className="formSection-socialMediaContainer-link" />
        </a>
        <a
          href="https://www.linkedin.com/in/marie-rodiet-moore/"
          aria-label="linkedin link"
        >
          <LinkedIn className="formSection-socialMediaContainer-link" />
        </a>
      </div>
    </div>
  )
}
