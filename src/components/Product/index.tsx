import { FC } from 'react'
import './index.scss'

export interface IProductProps {}

const Product: FC<IProductProps> = () => {
  return (
    <div className="product flex-column">
      <div className="product_img">
        <img
          src="https://res.cloudinary.com/sivadass/image/upload/v1493548928/icons/bag.png"
          alt="vegetable"
        />
      </div>
      <div className="product_info">Brocolli - 1 Kg</div>
      <div className="product_btn">ADD TO CART</div>
    </div>
  )
}

export default Product
