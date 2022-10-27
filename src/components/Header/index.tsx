import { FC, useState } from 'react'
import { useAppSelector } from '../../hooks/reduxHooks'
import { Input } from 'antd'
import CartPreview from '../CartPreview'
import './index.scss'

export interface IHeaderProps {}

const { Search } = Input

const Header: FC<IHeaderProps> = () => {
  const [isActive, setIsActive] = useState(false)
  const totalProducts = useAppSelector(state => state.cart.total)

  const totalCount = totalProducts
    .map(item => item.price * item.quantity)
    .reduce((prev, current) => prev + current, 0)

  const showPreview = () => {
    console.log('🚀TCL: >> isActive', isActive)
    setIsActive(!isActive)
  }
  const handleSearchInput = () => {}

  return (
    <div className="head flex-center ">
      <div className="head_logo ">
        <img src="https://res.cloudinary.com/sivadass/image/upload/v1493547373/dummy-logo/Veggy.png" />
      </div>
      <div className="head_search">
        <Search placeholder="input search text" onSearch={handleSearchInput} />
      </div>
      <div className="head_count flex-space-around">
        <div className="head_count_content flex-column">
          <span>Number Items: {totalProducts.length}</span>
          <span>Total Counts: {totalCount}</span>
        </div>
        <div className="head_count_logo">
          <img
            onClick={showPreview}
            src="https://res.cloudinary.com/sivadass/image/upload/v1493548928/icons/bag.png"
            alt="count logo"
          />

          <div className={'cart_preview' + (isActive ? ' active' : '')}>
            <CartPreview />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
