import { useState } from 'react'
import FRResume from '../assets/DOCS/MarieMooreFR.pdf'
import ENResume from '../assets/DOCS/MarieMooreEN.pdf'
import { ReactComponent as Arrow } from '../assets/SVG/angle-down-solid.svg'
import { ReactComponent as Css } from '../assets/SVG/skills/css.svg'
import { ReactComponent as Docker } from '../assets/SVG/skills/docker.svg'
import { ReactComponent as Figma } from '../assets/SVG/skills/figma.svg'
import { ReactComponent as Git } from '../assets/SVG/skills/git.svg'
import { ReactComponent as Html } from '../assets/SVG/skills/html.svg'
import { ReactComponent as Java } from '../assets/SVG/skills/java.svg'
import { ReactComponent as Javascript } from '../assets/SVG/skills/javascript.svg'
import { ReactComponent as Jest } from '../assets/SVG/skills/jest.svg'
import { ReactComponent as MaterialUI } from '../assets/SVG/skills/material-ui.svg'
import { ReactComponent as MongoDB } from '../assets/SVG/skills/mongodb.svg'
import { ReactComponent as Prettier } from '../assets/SVG/skills/prettier.svg'
import { ReactComponent as React } from '../assets/SVG/skills/react.svg'
import { ReactComponent as Redux } from '../assets/SVG/skills/redux.svg'
import { ReactComponent as Sass } from '../assets/SVG/skills/sass.svg'
import { ReactComponent as Tailwind } from '../assets/SVG/skills/tailwind.svg'
import { ReactComponent as Typescript } from '../assets/SVG/skills/typescript.svg'
import { ReactComponent as VsCode } from '../assets/SVG/skills/vscode.svg'
import { ReactComponent as Terminal } from '../assets/SVG/skills/terminal.svg'
import { ReactComponent as Spring } from '../assets/SVG/skills/spring.svg'
import { ReactComponent as Postman } from '../assets/SVG/skills/postman.svg'
import { ReactComponent as Npm } from '../assets/SVG/skills/npm.svg'
import { ReactComponent as Maven } from '../assets/SVG/skills/maven.svg'
import { ReactComponent as Intellij } from '../assets/SVG/skills/intellij.svg'
import { ReactComponent as Diagram } from '../assets/SVG/skills/diagram.svg'

type Props = {
  isEnglish: boolean
}
export default function SkillsSection({ isEnglish }: Props) {
  const [toggled, updateToggle] = useState(false)
  return (
    <div className="skillsSection">
      <a
        className="skillsSection-resume"
        href={isEnglish ? ENResume : FRResume}
        target="_blank"
        rel="noopener noreferrer"
        download
      >
        <button type="button" className="button">
          {isEnglish ? 'Resume' : 'CV'}
        </button>
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
            <div className="skills-logos">
              <Css />
              <Docker />
              <Figma />
              <Git />
              <Html />
              <Java />
              <Javascript />
              <Jest />
              <MaterialUI />
              <MongoDB />
              <Prettier />
              <React />
              <Redux />
              <Sass />
              <Tailwind />
              <Typescript />
              <VsCode />
              <Postman />
              <Spring />
              <Npm />
              <Intellij />
              <Maven />
              <Diagram />
              <Terminal />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}
