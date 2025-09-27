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
import Products from './pages/Products'
import Footer from './components/Footer'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/categorys',
    element: <Categorys />
  }
])

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categorys" element={<Categorys />} />
    <Route path="/products" element={<Products />} />
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
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App
