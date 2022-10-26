import counterReducer from './counterSlice'
import cartReducer from './cartSlice'

const allReducer = {
  counter: counterReducer,
  cart: cartReducer
}

export default allReducer
