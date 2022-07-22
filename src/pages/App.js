import '../style/base/globals.scss'
import Profile from '../components/Profile'
import Nav from '../components/Nav'
import SkillsSection from '../components/SkillsSection'
import Footer from '../components/Footer'
import ProjectsSection from '../components/ProjectsSection'
import FormSection from '../components/FormSection'

function App() {
  return (
    <div className="App" id="outer-container">
      <Nav />
      <Profile />
      <SkillsSection />
      <ProjectsSection />
      <FormSection />
      <Footer />
    </div>
  )
}

export default App
