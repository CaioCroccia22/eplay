import { Link } from 'react-router-dom'

import { HeaderBar, Links, LinkItem, CartButton } from './styles'
import { toggle } from '../../store/reducer/cart'

import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

export const Header = () => {
  // Isolar essa lógica aqui - amanhã
  const CartState = useSelector((state: RootReducer) => state.cart.isOpen)
  const dispatch = useDispatch()
  return (
    <HeaderBar>
      <div>
        <Link to="/">
          <img src={logo} alt="EPLAY" />
        </Link>
        <nav>
          <Links>
            <LinkItem>
              <Link to="/categorys">Categorias</Link>
            </LinkItem>
            <LinkItem>
              <a>Novidades</a>
            </LinkItem>
            <LinkItem>
              <a>Promoções</a>
            </LinkItem>
          </Links>
        </nav>
      </div>
      <CartButton onClick={() => dispatch(toggle(CartState))}>
        0 - Produto(s)
        <img src={carrinho} alt="carrinho" />
      </CartButton>
    </HeaderBar>
  )
}

export default Header
