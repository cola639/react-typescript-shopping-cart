import { FC } from 'react'
import { useAppSelector } from '../../hooks/reduxHooks'
import { Input } from 'antd'
import './index.scss'

export interface IHeaderProps {}

const { Search } = Input

const Header: FC<IHeaderProps> = () => {
  const totalProducts = useAppSelector(state => state.cart.total)

  const totalCount = totalProducts
    .map(item => item.price * item.quantity)
    .reduce((prev, current) => prev + current, 0)

  const handleSearchInput = () => {
    console.log('🚀TCL: >> handleSearchInput')
  }

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
            src="https://res.cloudinary.com/sivadass/image/upload/v1493548928/icons/bag.png"
            alt="count logo"
          />
        </div>
      </div>
    </div>
  )
}

export default Header
