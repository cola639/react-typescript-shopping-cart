import { FC, useState, useEffect } from 'react'
import Item from './Item'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../hooks/reduxHooks'
import './index.scss'

export interface ICartPreviewProps {}

const CartPreview: FC<ICartPreviewProps> = ({}) => {
  const navigate = useNavigate()
  const totalProducts = useAppSelector(state => state.cart.total)
  useEffect(() => {}, [])

  return (
    <div className="cartPreview">
      {!totalProducts.length && <div>EMPTY STATUS</div>}

      {totalProducts.length > 0 &&
        totalProducts.map((item, index) => <Item key={index} data={item} />)}

      {totalProducts.length > 0 && (
        <button className="click_btn" onClick={() => navigate('/login')}>
          CLICK TO PAY
        </button>
      )}
    </div>
  )
}

export default CartPreview
