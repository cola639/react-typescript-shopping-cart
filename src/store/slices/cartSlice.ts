import {
  createAction,
  createAsyncThunk,
  createSlice,
  PayloadAction,
  PrepareAction
} from '@reduxjs/toolkit'
import { RootState, AppThunk } from '../index'

interface IProductList {
  id: number
  name: string
  image: string
  price: number
  quantity: number
}

export interface CartState {
  total: IProductList[]
}

const initialState: CartState = {
  total: []
}

// TODO: If <PrepareAction<object[]>> necessary
// export const incrementProduct = createAction<PrepareAction<object[]>>('cart/incrementProduct', total => {
//   console.log('🚀TCL: >> incrementProduct >> total', total)
//   // localStorage.settotal('nightTime', JSON.stringify(total))

//   return {
//     payload: total
//   }
// })

export const cartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementProduct: (state, action) => {
      const id = action.payload.id
      const cloneTotal: IProductList[] = JSON.parse(JSON.stringify(state.total))
      const isOld = cloneTotal.map(item => item.id).includes(id)
      let newTotal
      if (isOld) {
        cloneTotal.forEach((item, index) => {
          if (item.id === id) {
            cloneTotal[index]['quantity'] += 1
          }
        })

        newTotal = [...cloneTotal]
      } else {
        newTotal = [...cloneTotal, action.payload]
      }

      state.total = newTotal
    }
  },

  extraReducers: builder => {}
})

export const { incrementProduct } = cartSlice.actions

export default cartSlice.reducer
