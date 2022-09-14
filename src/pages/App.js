import '../style/base/globals.scss'
import { HashRouter } from 'react-router-dom'
import { useState } from 'react'
import Profile from '../components/Profile'
import Nav from '../components/Nav'
import SkillsSection from '../components/SkillsSection'
import Footer from '../components/Footer'
import ProjectsSection from '../components/ProjectsSection'
import FormSection from '../components/FormSection'

import SocialMedia from '../components/SocialMedia'

function App() {
  const [isEnglish, toggleLanguage] = useState(true)
  const [isLightTheme, setLightTheme] = useState(true)
  const handleLanguageChange = () => {
    toggleLanguage(!isEnglish)
  }

  const handleTheme = () => {
    setLightTheme(!isLightTheme)
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
          isLightTheme={isLightTheme}
          handleTheme={handleTheme}
        />
      </HashRouter>
    </div>
  )
}

export default App
