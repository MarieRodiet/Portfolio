import './../style/App.css'
import Navigation from './../components/Navigation.js'
import styled from 'styled-components'

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
