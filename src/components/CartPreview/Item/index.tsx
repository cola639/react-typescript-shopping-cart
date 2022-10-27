import { FC, useState, useEffect, useCallback, useMemo } from 'react'
import './index.scss'

export interface IItemProps {}

const Item: FC<IItemProps> = ({}) => {
  useEffect(() => {}, [])
  useCallback(() => {}, [])
  useMemo(() => {}, [])

  const handleDelete = () => {
    console.log('🚀TCL: >> handleDelete >> handleDelete')
  }

  return (
    <div className="flex-space-around cart_item">
      <img
        src="https://res.cloudinary.com/sivadass/image/upload/v1493548928/icons/bag.png"
        alt=""
      />
      <span className="cart_item_name">蔬菜</span>
      <div className="flex-column cart_item_count">
        <span>QUANTITY: 1</span>
        <span> TOTAL: 20</span>
      </div>

      <span className="cart_item_delete" onClick={handleDelete}>
        X
      </span>
    </div>
  )
}

export default Item
