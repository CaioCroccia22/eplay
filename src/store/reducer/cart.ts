import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../../pages/Home'
import { Action, Items } from '../../components/Gallery/styles'
import { stat } from 'fs'

type CartState = {
  items: Game[]
  isOpen: boolean
  CartPrices: number[]
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  CartPrices: []
}

const CartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    add: (state, action: PayloadAction<Game>) => {
      const id = state.items.find((e) => e.id == action.payload.id)

      if (!id) {
        state.items.push(action.payload)
        state.CartPrices.push(action.payload.prices.current)
      } else {
        alert('Item já tem no carrinho')
      }
    },
    toggle: (state, action: PayloadAction<boolean>) => {
      state.isOpen = !action.payload
    },
    remove: (state, action: PayloadAction<Game>) => {
      const Index = state.items.findIndex((e) => e.id === action.payload.id)
      if (Index !== -1) {
        state.items.splice(Index, 1)
        state.CartPrices.splice(Index, 1)
      }
    }
  }
})

export const { add, toggle, remove } = CartSlice.actions
export default CartSlice.reducer
