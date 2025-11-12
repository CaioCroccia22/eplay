import { useSelector } from 'react-redux'
import { RootReducer } from '..'
import { useDispatch } from 'react-redux'
import { toggle, add } from '../reducer/cart'
import { Item } from '../../components/Gallery/styles'
import { Game } from '../../pages/Home'

export function useCart() {
  const dispatch = useDispatch()
  const CartState = useSelector((state: RootReducer) => state.cart.isOpen)
  const Items = useSelector((state: RootReducer) => state.cart.items)

  const ToggleCart = () => {
    dispatch(toggle(CartState))
    console.log(CartState)
  }

  const AddProduct = (Item: Game) => {
    dispatch(add(Item))
  }

  return { CartState, Items, ToggleCart }
}
