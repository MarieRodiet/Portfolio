import '../style/base/globals.scss'
import { HashRouter } from 'react-router-dom'
import { useState } from 'react'
import Profile from '../components/Profile'
import Nav from '../components/Nav'
import SkillsSection from '../components/SkillsSection'
import Footer from '../components/Footer'
import ProjectsSection from '../components/ProjectsSection'
import FormSection from '../components/FormSection'
import { ReactComponent as Sun } from '../assets/SVG/sun.svg'
import { ReactComponent as Moon } from '../assets/SVG/moon.svg'
import SocialMedia from '../components/SocialMedia'

function App() {
  const [isEnglish, toggleLanguage] = useState(true)
  const [isLightTheme, setLightTheme] = useState(true)
  const handleLanguageChange = () => {
    toggleLanguage(!isEnglish)
  }
  return (
    <div className="App" id="outer-container">
      <HashRouter>
        <Nav
          handleLanguageChange={handleLanguageChange}
          isEnglish={isEnglish}
        />
        <Profile isEnglish={isEnglish} />
        <SkillsSection isEnglish={isEnglish} />
        <ProjectsSection isEnglish={isEnglish} />
        <FormSection isEnglish={isEnglish} />
        <SocialMedia />
        <Footer
          text="Copyright 2022 Marie Moore"
          SVG={isLightTheme ? <Sun /> : <Moon />}
          onClick={() => setLightTheme(!isLightTheme)}
        />
      </HashRouter>
    </div>
  )
}

export default App
