import { FC, useState, useEffect } from 'react'
import Item from './Item'
import { useAppSelector } from '../../hooks/reduxHooks'
import './index.scss'

export interface ICartPreviewProps {}

const CartPreview: FC<ICartPreviewProps> = ({}) => {
  const totalProducts = useAppSelector(state => state.cart.total)
  useEffect(() => {}, [])

  return (
    <div>
      {totalProducts.map((item, index) => (
        <Item key={index} data={item} />
      ))}
    </div>
  )
}

export default CartPreview
