import '../style/base/globals.scss'
import Profile from '../components/Profile'
import NewNav from '../components/NewNav'

function App() {
  return (
    <div className="App" id="outer-container">
      <NewNav />
      <Profile />
    </div>
  )
}

export default App
