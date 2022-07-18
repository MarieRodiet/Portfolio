import '../style/globals.scss'
import styled from 'styled-components'
import Navigation from '../components/Navigation'

const Header = styled.div`
  background-color: #3e1348;
  color: white;
`

function App() {
  return (
    <div className="App">
      <Header>
        <Navigation />
        <h1>Portfolio</h1>
      </Header>
    </div>
  )
}

export default App
