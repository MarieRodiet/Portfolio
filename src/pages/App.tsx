import '../style/base/globals.scss'
import { HashRouter } from 'react-router-dom'
import { useState } from 'react'
import Profile from '../components/Profile'
import Nav from '../components/Nav'
import SkillsSection from '../components/SkillsSection'
import Footer from '../components/Footer'
import ProjectsSection from '../components/ProjectsSection'
import FormSection from '../components/FormSection'
import React from 'react'
import { motion, useScroll } from 'framer-motion'
import SocialMedia from '../components/SocialMedia'

export default function App() {
  const [isEnglish, toggleLanguage] = useState(true)
  const { scrollYProgress } = useScroll()
  const handleLanguageChange = () => {
    toggleLanguage(!isEnglish)
  }

  return (
    <div className="App" id="outer-container">
<div className="bg"></div>
<div className="bg bg2"></div>
<div className="bg bg3"></div>
<div className="content">
</div>


        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
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
          <Footer text="Copyright 2024 Marie Moore" />
        </HashRouter>
      </div>

  )
}
