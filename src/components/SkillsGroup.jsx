import { PropTypes } from 'prop-types'

export default function SkillsGroup({ skillObject, isEnglish, index }) {
  return (
    <div className={`skillsGroup showUp skillsbox-${index}`}>
      <h3>{isEnglish ? skillObject.en : skillObject.fr}</h3>
      <div className="skillsGroup-content">
        {skillObject.skills.map((el) => (
          <span key={el}>{el}</span>
        ))}
      </div>
    </div>
  )
}

SkillsGroup.propTypes = {
  skillObject: PropTypes.object,
  isEnglish: PropTypes.bool,
  index: PropTypes.number,
}
