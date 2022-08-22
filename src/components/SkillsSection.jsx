import Resume from '../assets/DOCS/MarieMoorePortfolio.pdf'
import Button from './Button'
export default function SkillsSection() {
  return (
    <div className="skillsSection">
      <a
        className="skillsSection-resume"
        href={Resume}
        target="_blank"
        rel="noopener noreferrer"
        download
      >
        <Button type="button" className="button" content="Resume" />
      </a>

      <div className="skillsSection-skills">
        <span>HTML</span>
        <span>CSS</span>
        <span>SASS</span>
        <span>JAVASCRIPT</span>
        <span>TYPESCRIPT</span>
        <span>REACT</span>
        <span>REDUX</span>
        <span>FIGMA</span>
        <span>GIT</span>
        <span>TESTS</span>
        <span>RESPONSIVE</span>
      </div>
    </div>
  )
}
