import { ReactComponent as Github } from '../assets/SVG/github.svg'
import { ReactComponent as Email } from '../assets/SVG/email.svg'
import { ReactComponent as LinkedIn } from '../assets/SVG/linkedin.svg'
import { profile } from '../data/profile.js'

export default function SocialMedia() {
  return (
    <div className="socialMediaContainer">
      <a
        href={profile.github}
        target="_blank"
        aria-label="github link"
        rel="noopener noreferrer"
      >
        <Github />
      </a>
      <a
        href={profile.email}
        target="_blank"
        aria-label="email me"
        rel="noreferrer"
      >
        <Email />
      </a>
      <a
        href={profile.linkedIn}
        target="_blank"
        aria-label="linkedin link"
        rel="noreferrer"
      >
        <LinkedIn />
      </a>
    </div>
  )
}
