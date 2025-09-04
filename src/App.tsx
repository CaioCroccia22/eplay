import './App.css'
import { GlobalCss, Container } from './styles'
import Header from './components/Header'
import Banner from './components/Banner'

function App() {
  return (
    <>
      <GlobalCss />
      <Container>
        <Header />
        <Banner />
      </Container>
    </>
  )
}

export default App
