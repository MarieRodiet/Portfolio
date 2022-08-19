import '../style/base/globals.scss'
import { HashRouter } from 'react-router-dom'
import Profile from '../components/Profile'
import Nav from '../components/Nav'
import SkillsSection from '../components/SkillsSection'
import Footer from '../components/Footer'
import ProjectsSection from '../components/ProjectsSection'
import FormSection from '../components/FormSection'

function App() {
  return (
    <div className="App" id="outer-container">
      <HashRouter>
        <Nav />
        <Profile />
        <SkillsSection />
        <ProjectsSection />
        <FormSection />
        <Footer />
      </HashRouter>
    </div>
  )
}

export default App
