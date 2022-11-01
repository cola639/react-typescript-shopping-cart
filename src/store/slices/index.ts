import cartReducer from './cartSlice'
import userReducer from './userSlice'

const allReducer = {
  cart: cartReducer,
  user: userReducer
}

export default allReducer
