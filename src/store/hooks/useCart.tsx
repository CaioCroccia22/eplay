import { useSelector } from 'react-redux'
import { RootReducer } from '..'
import { useDispatch } from 'react-redux'
import { toggle, add, remove } from '../reducer/cart'
import { Game } from '../../pages/Home'
import { useEffect } from 'react'

export function useCart() {
  const dispatch = useDispatch()
  const CartState = useSelector((state: RootReducer) => state.cart.isOpen)
  const Items = useSelector((state: RootReducer) => state.cart.items)

  useEffect(() => {
    Items.map((i) => {
      i.prices.current == null ? (i.prices.current = 250) : i.prices.current
    })
  }, [Items])

  const Price = useSelector((state: RootReducer) => state.cart.CartPrices)
  const Sum = Price.reduce((previous, current) => previous + current, 0)

  const ToggleCart = () => {
    dispatch(toggle(CartState))
  }
  const AddProduct = (Item: Game) => {
    dispatch(add(Item))
  }

  const RemoveProduct = (Item: Game) => {
    dispatch(remove(Item))
    console.log(Items)
  }

  return { CartState, Items, ToggleCart, AddProduct, RemoveProduct, Sum }
}
