import { FC, useState, useEffect, useCallback, useMemo, ReactNode, ReactComponentElement } from 'react'
import Product from '../../components/Product'
import './index.scss'

export interface IHomeProps {}

export interface IProductList {
  key: number
  name: string
  imgUrl: string
  price: number
}

const Home: FC<IHomeProps> = ({}) => {
  const productList: IProductList[] = []

  for (let i = 0; i < 15; i++) {
    productList.push({
      key: i,
      name: 'Brocolli - 1 Kg',
      price: 20,
      imgUrl: 'https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/broccoli.jpg'
    })
  }

  useEffect(() => {}, [])
  useCallback(() => {}, [])
  useMemo(() => {}, [])

  return (
    <div className=" home">
      {productList.map((item, index) => (
        <Product key={index} data={item} />
      ))}
    </div>
  )
}

export default Home
