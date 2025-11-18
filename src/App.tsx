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
import Categories from './pages/Categories'
import Products from './pages/Products'
import Footer from './components/Footer'
import { store } from './store'
import Cart from './components/Cart/Index'
import CheckOut from './pages/CheckOut'

// import Products from './components/Product'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/categories',
    element: <Categories />
  },
  {
    path: '/products/:productId',
    element: <Products />
  },
  {
    path: '/checkout',
    element: <CheckOut />
  }
])

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
    <Route path="/products/:productId" element={<Products />} />
    <Route path="/checkout" element={<CheckOut />} />
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
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
