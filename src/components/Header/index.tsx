import { Link } from 'react-router-dom'

import { HeaderBar, Links, LinkItem, CartButton } from './styles'

import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'
import { useCart } from '../../store/hooks/useCart'

export const Header = () => {
  const { ToggleCart, Items } = useCart()
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
      <CartButton onClick={ToggleCart}>
        {Items.length} - Produto(s)
        <img src={carrinho} alt="carrinho" />
      </CartButton>
    </HeaderBar>
  )
}

export default Header
