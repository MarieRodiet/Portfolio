import { useForm } from 'react-hook-form'
import { ReactComponent as Github } from '../assets/SVG/github.svg'
import { ReactComponent as Email } from '../assets/SVG/email.svg'
import { ReactComponent as LinkedIn } from '../assets/SVG/linkedin.svg'

export default function FormSection() {
  const { register, handleSubmit } = useForm()
  return (
    <div className="formSection">
      <h1 className="formSection-header">Let&apos;s connect</h1>
      <form className="formSection-form" onSubmit={handleSubmit}>
        <div className="formSection-form-inputWrapper">
          <label htmlFor="name">Name</label>
          <input
            required
            id="name"
            type="name"
            name="name"
            placeholder="First and Last name"
            autoComplete="name"
            {...register('name', { required: true })}
          />
        </div>
        <div className="formSection-form-inputWrapper">
          <label htmlFor="email">Email</label>
          <input
            required
            id="email"
            type="text"
            name="email"
            autoComplete="email"
            placeholder="your@email.com"
            {...register('email', { required: true })}
          />
        </div>
        <div className="formSection-form-inputWrapper">
          <label htmlFor="Message">Message</label>
          <textarea
            required
            id="Message"
            type="Message"
            name="Message"
            placeholder="Message"
            {...register('message', { required: true })}
          />
        </div>
        <button className="formSection-form-btn" type="submit">
          Contact Me
        </button>
      </form>
      <div className="formSection-socialMediaContainer">
        <a href="https://github.com/MarieRodiet" target="_blank">
          <Github className="formSection-socialMediaContainer-link" />
        </a>
        <a href="mailto:marie.rodiet@gmail.com">
          <Email className="formSection-socialMediaContainer-link" />
        </a>
        <a href="https://www.linkedin.com/in/marie-rodiet-moore/">
          <LinkedIn className="formSection-socialMediaContainer-link" />
        </a>
      </div>
    </div>
  )
}
