import Button from '../Button'
import * as S from './styles'
import Tag from '../Tag/Index'
import { useCart } from '../../store/hooks/useCart'
import { parseToBrl } from '../../utils'

import { useNavigate } from 'react-router'

export const Cart = () => {
  const { ToggleCart, RemoveProduct, Items, Sum } = useCart()
  const navigate = useNavigate()
  const goToCheckout = () => {
    if (Items.length > 0) {
      navigate('/checkout')
      ToggleCart()
    } else {
      navigate('/')
      ToggleCart()
      alert('Não existem compras no carrinho')
    }
  }
  return (
    <S.CartContainer className={useCart().CartState ? 'is-open' : ''}>
      <S.Overlay onClick={ToggleCart} />
      <S.SideBar>
        {Items.map((i) => (
          <ul key={i.id}>
            <S.CartItem>
              <img src={i.media.cover} />
              <div>
                <h3>{i.name}</h3>
                <Tag>{i.details.category}</Tag>
                <Tag>{i.details.system}</Tag>
              </div>
              <button type="button" onClick={() => RemoveProduct(i)} />
            </S.CartItem>
          </ul>
        ))}
        {Items.length > 0 ? (
          <>
            <S.Quantity>{Items.length} jogo(s) no carrinho</S.Quantity>
            <S.Prices>
              Total de {parseToBrl(Sum)}
              <span>Em até 6x sem juros</span>
            </S.Prices>
            <Button
              variant="primary"
              type="button"
              title="Clique aqui para comprar"
              onClick={goToCheckout}
            >
              Continuar com a compra
            </Button>
          </>
        ) : (
          <p className="empty-text">
            O carrinho esta vazio adicione o item para realizar a compra
          </p>
        )}
      </S.SideBar>
    </S.CartContainer>
  )
}

export default Cart
