import '../style/base/globals.scss'
import Profile from '../components/Profile'
import Nav from '../components/Nav'
import SkillsSection from '../components/SkillsSection'
import Footer from '../components/Footer'
import ProjectsSection from '../components/ProjectsSection'
function App() {
  return (
    <div className="App" id="outer-container">
      <Nav />
      <Profile />
      <SkillsSection />
      <ProjectsSection />
      <Footer />
    </div>
  )
}

export default App
