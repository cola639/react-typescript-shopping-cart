import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/reduxHooks'
import { incrementProduct } from '../../store/slices/cartSlice'
import './index.scss'

export interface IProductProps {
  data: { id: number; name: string; image: string; price: number }
}

const Product: FC<IProductProps> = ({ data }) => {
  const { id, name, image, price } = data
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleAdd = () => {
    const tempData = { ...data, quantity: 1 }
    dispatch(incrementProduct(tempData))
  }

  const navigateDetail = (id: number) => {
    const query = `id=${id}&year=2022`
    navigate(`/detail?${query}`)
  }

  return (
    <div className="product flex-column">
      <div className="product_img" onClick={() => navigateDetail(id)}>
        <img src={image} alt="vegetable" />
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
