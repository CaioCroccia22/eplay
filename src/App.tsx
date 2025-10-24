import { Provider } from 'react-redux'
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
import { store } from './store'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/categorys',
    element: <Categorys />
  },
  {
    path: '/products/:productId',
    element: <Products />
  }
])

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categorys" element={<Categorys />} />
    <Route path="/products/:productId" element={<Products />} />
  </Routes>
)

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <div className="container">
          <Header />
        </div>
        <Rotas />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
