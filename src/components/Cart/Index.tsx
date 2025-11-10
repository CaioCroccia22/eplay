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
import { CartProduct } from '../Cart Product/Index'

export const Cart = () => (
  <CartContainer>
    <Overlay />
    <SideBar>
      <ul>
        <CartItem>
          <img src={starWars} />
          <div>
            <h3>Nome do jogo</h3>
            <Tag>RPG</Tag>
            <Tag>PS5</Tag>
          </div>
          <button type="button" />
        </CartItem>
        <CartItem>
          <img src={starWars} />
          <div>
            <h3>Nome do jogo</h3>
            <Tag>RPG</Tag>
            <Tag>PS5</Tag>
          </div>
          <button type="button" />
        </CartItem>
      </ul>
      <Quantity>2 jogo(s) no carrinho</Quantity>
      <Prices>
        Total de R$ 250,00 <span>Em até 6x sem juros</span>
      </Prices>
      <Button variant="primary" type="button" title="Clique aqui para comprar">
        Continuar com a compra
      </Button>
    </SideBar>
  </CartContainer>
)

export default Cart
