import { createAction, createAsyncThunk, createSlice, PayloadAction, PrepareAction } from '@reduxjs/toolkit'
import { RootState, AppThunk } from '../index'
import { fetchCount } from '../../api/counterAPI'

interface IProductList {
  key: number
  name: string
  imgUrl: string
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

export const incrementAsync = createAsyncThunk('counter/fetchCount', async (amount: number) => {
  const response = await fetchCount(amount)
  return response.data
})

export const cartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementProduct: (state, action) => {
      const key = action.payload.key
      const cloneTotal: IProductList[] = JSON.parse(JSON.stringify(state.total))
      const isOld = cloneTotal.map(item => item.key).includes(key)
      let newTotal
      if (isOld) {
        cloneTotal.forEach((item, index) => {
          if (item.key === key) {
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
