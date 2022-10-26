import { FC } from 'react'
import { useAppDispatch } from '../../hooks/reduxHooks'
import { incrementProduct } from '../../store/slices/cartSlice'
import './index.scss'

export interface IProductProps {
  data: { name: string; imgUrl: string; price: number }
}

const Product: FC<IProductProps> = ({ data }) => {
  const { name, imgUrl, price } = data
  const dispatch = useAppDispatch()

  const handleAdd = () => {
    const tempData = { ...data, quantity: 1 }
    dispatch(incrementProduct(tempData))
  }

  return (
    <div className="product flex-column">
      <div className="product_img">
        <img src={imgUrl} alt="vegetable" />
      </div>
      <div className="product_info">{name}</div>
      <div className="product_price">{price}</div>
      <button className="product_btn" onClick={handleAdd}>
        ADD TO CART
      </button>
    </div>
  )
}

export default Product
