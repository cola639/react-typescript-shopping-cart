import { FC, useState, useEffect, useCallback, useMemo } from 'react'
import { useAppDispatch } from '../../../hooks/reduxHooks'
import { decreaseProduct } from '../../../store/slices/cartSlice'

import './index.scss'

export interface IItemProps {
  data: { id: number; name: string; image: string; price: number; quantity: number }
}

const Item: FC<IItemProps> = ({ data }) => {
  const { name, image, price, quantity, id } = data
  const dispatch = useAppDispatch()

  const itemCost = price * quantity
  useEffect(() => {}, [])
  useCallback(() => {}, [])
  useMemo(() => {}, [])

  const handleDelete = (id: number) => {
    console.log('🚀TCL: >> handleDelete >> id', id)
    dispatch(decreaseProduct(id))
    // console.log('🚀TCL: >> handleDelete >> handleDelete')
  }

  return (
    <div className="flex-space-around cart_item">
      <img src={image} alt="" />
      <span className="cart_item_name">{name}</span>
      <div className="flex-column cart_item_count">
        <span>QUANTITY: {quantity}</span>
        <span> TOTAL: {itemCost}</span>
      </div>

      <span className="cart_item_delete" onClick={() => handleDelete(id)}>
        X
      </span>
    </div>
  )
}

export default Item
