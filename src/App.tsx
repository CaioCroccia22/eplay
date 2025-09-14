import {
  createBrowserRouter,
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import { GlobalCss } from './styles'
import Header from './components/Header'
import Home from './pages/Home'
import Categorys from './pages/Categorys'
import Footer from './components/Footer'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/categorias',
    element: <Categorys />
  }
])

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categorias" element={<Categorys />} />
  </Routes>
)

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
