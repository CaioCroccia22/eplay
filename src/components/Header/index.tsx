import { Link } from 'react-router-dom'

import { HeaderBar, Links, LinkItem, ListCart } from './styles'

import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

export const Header = () => (
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
    <ListCart href="#">
      0 - Produto(s)
      <img src={carrinho} alt="carrinho" />
    </ListCart>
  </HeaderBar>
)

export default Header
