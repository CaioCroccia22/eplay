import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import * as S from './styles'

import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'
import { useCart } from '../../store/hooks/useCart'
import { useState } from 'react'

export const Header = () => {
  const { ToggleCart, Items } = useCart()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleHamburguerMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <>
      <S.HeaderBar>
        <S.HeaderRow>
          <div>
            <S.Hamburguer onClick={() => toggleHamburguerMenu()}>
              <span></span>
              <span></span>
              <span></span>
            </S.Hamburguer>
          </div>
          <Link to="/">
            <h1>
              <img src={logo} alt="EPLAY" />
            </h1>
          </Link>
          <S.NavMobile className={isMenuOpen ? 'is-open' : ''}>
            <S.Links>
              <S.LinkItem>
                <Link to="/categories">Categorias</Link>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink
                  title="Clique aqui para acessar a seção de em breve"
                  to="/#coming-soon"
                >
                  Em breve
                </HashLink>
              </S.LinkItem>
              <S.LinkItem>
                <HashLink
                  title="Clique aqui para acessar a seção de promoções"
                  to="/#on-sale"
                >
                  Promoções
                </HashLink>
              </S.LinkItem>
            </S.Links>
          </S.NavMobile>
        </S.HeaderRow>
        <S.CartButton onClick={ToggleCart}>
          {Items.length} <span>- Produto(s)</span>
          <img src={carrinho} alt="carrinho" />
        </S.CartButton>
      </S.HeaderBar>
    </>
  )
}

export default Header
