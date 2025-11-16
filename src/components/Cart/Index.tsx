import Button from '../Button'
import starWars from '../../assets/images/star_wars.png'
import {
  Overlay,
  SideBar,
  CartContainer,
  CartItem,
  Prices,
  Quantity
} from './styles'
import Tag from '../Tag/Index'
import { useCart } from '../../store/hooks/useCart'
import { formataPreco } from '../ProductsList'
import { Item } from '../Gallery/styles'

export const Cart = () => {
  const { ToggleCart, RemoveProduct, Items, Sum } = useCart()
  return (
    <CartContainer className={useCart().CartState ? 'is-open' : ''}>
      <Overlay onClick={ToggleCart} />
      <SideBar>
        {Items.map((i) => (
          <ul key={i.id}>
            <CartItem>
              <img src={i.media.cover} />
              <div>
                <h3>{i.name}</h3>
                <Tag>{i.details.category}</Tag>
                <Tag>{i.details.system}</Tag>
              </div>
              <button type="button" onClick={() => RemoveProduct(i)} />
            </CartItem>
          </ul>
        ))}
        <Quantity>{Items.length} jogo(s) no carrinho</Quantity>
        <Prices>
          Total de {formataPreco(Sum)}
          <span>Em até 6x sem juros</span>
        </Prices>
        <Button
          variant="primary"
          type="button"
          title="Clique aqui para comprar"
        >
          Continuar com a compra
        </Button>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
