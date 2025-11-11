import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../../pages/Home'
import { Action } from '../../components/Gallery/styles'

type CartState = {
  items: Game[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const CartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    add: (state, action: PayloadAction<Game>) => {
      state.items.push(action.payload)
    },
    toggle: (state, action: PayloadAction<boolean>) => {
      state.isOpen = !action.payload
    }
  }
})

export const { add, toggle } = CartSlice.actions
export default CartSlice.reducer
