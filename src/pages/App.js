import '../style/base/globals.scss'
import { HashRouter } from 'react-router-dom'
import { useState } from 'react'
import Profile from '../components/Profile'
import Nav from '../components/Nav'
import SkillsSection from '../components/SkillsSection'
import Footer from '../components/Footer'
import ProjectsSection from '../components/ProjectsSection'
import FormSection from '../components/FormSection'

function App() {
  const [isEnglish, toggleLanguage] = useState(true)
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
        <Footer />
      </HashRouter>
    </div>
  )
}

export default App
