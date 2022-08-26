import { PropTypes } from 'prop-types'
import FRResume from '../assets/DOCS/MarieMooreFR.pdf'
import ENResume from '../assets/DOCS/MarieMooreEN.pdf'
import Button from './Button'

export default function SkillsSection({ isEnglish }) {
  const buttonText = isEnglish ? 'Resume' : 'CV'
  const skills = [
    'HTML',
    'CSS',
    'SASS',
    'JAVASCRIPT',
    'TYPESCRIPT',
    'REACT',
    'REDUX',
    'FIGMA',
    'GIT',
    'TESTS',
    'RESPONSIVE',
    'ACCESSIBILITY',
  ]
  return (
    <div className="skillsSection">
      <a
        className="skillsSection-resume"
        href={isEnglish ? ENResume : FRResume}
        target="_blank"
        rel="noopener noreferrer"
        download
      >
        <Button type="button" className="button" buttonText={buttonText} />
      </a>

      <div className="skillsSection-skills">
        {skills.map((element) => (
          <span key={element}>{element}</span>
        ))}
      </div>
    </div>
  )
}
SkillsSection.propTypes = {
  isEnglish: PropTypes.bool,
}
