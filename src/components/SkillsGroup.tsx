type Props = {
  skillObject: SkillObjectProps
  isEnglish: boolean
  index: number
}

type SkillObjectProps = {
    en: string
    fr: string
    skills: string[]
}

export default function SkillsGroup({ skillObject, isEnglish, index }: Props) {
  return (
    <div className={`skillsGroup skillsbox-${index}`}>
      <h3>{isEnglish ? skillObject.en : skillObject.fr}</h3>
      <div className="skillsGroup-content">
        {skillObject.skills.map((el) => (
          <span key={el}>{el}</span>
        ))}
      </div>
    </div>
  )
}

