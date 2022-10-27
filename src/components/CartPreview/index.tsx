import { FC, useState, useEffect } from 'react'
import Item from './Item'
import './index.scss'

export interface ICartPreviewProps {}

const CartPreview: FC<ICartPreviewProps> = ({}) => {
  useEffect(() => {}, [])

  return (
    <div>
      <Item />
    </div>
  )
}

export default CartPreview
