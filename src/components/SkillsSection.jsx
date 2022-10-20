import { PropTypes } from 'prop-types'
import { useState } from 'react'
import FRResume from '../assets/DOCS/MarieMooreFR.pdf'
import ENResume from '../assets/DOCS/MarieMooreEN.pdf'
import Button from './Button'
import { skills } from '../data/skills'
import SkillsGroup from './SkillsGroup'
import { ReactComponent as Arrow } from '../assets/SVG/angle-down-solid.svg'

export default function SkillsSection({ isEnglish }) {
  const buttonText = isEnglish ? 'Resume' : 'CV'
  const [toggled, updateToggle] = useState(true)
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
        <div className="skillsSection-skills-header">
          <Arrow
            onKeyDown={() => updateToggle(!toggled)}
            onClick={() => updateToggle(!toggled)}
            className={toggled ? 'svg-up' : 'svg-down'}
          />
          <h1 className="skillsSection-skills-header-title">
            {isEnglish ? 'My Skills' : 'Compétences Techniques'}
          </h1>
        </div>

        {!toggled ? (
          <div className="skillGroup-container">
            {skills.map((element, i) => (
              <SkillsGroup
                key={element.en}
                skillObject={element}
                isEnglish={isEnglish}
                index={i}
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}
SkillsSection.propTypes = {
  isEnglish: PropTypes.bool,
}
