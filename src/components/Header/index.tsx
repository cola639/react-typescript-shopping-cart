import { FC } from 'react'
import { Input } from 'antd'
import './index.scss'

export interface IHeaderProps {}

const { Search } = Input

const Header: FC<IHeaderProps> = () => {
  const handleSearchInput = () => {
    console.log('🚀TCL: >> handleSearchInput')
  }

  // const handleCartButton = () => {
  //   console.log('🚀TCL: >> handleCartButton')
  // }

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
          <span>Number Items: 10</span>
          <span>Total Counts: 10</span>
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
