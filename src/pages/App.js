import '../style/base/globals.scss'
import Profile from '../components/Profile'
import Nav from '../components/Nav'

function App() {
  return (
    <div className="App" id="outer-container">
      <Nav />
      <Profile />
    </div>
  )
}

export default App
