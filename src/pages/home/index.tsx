import {
  FC,
  useState,
  useEffect,
  useCallback,
  useMemo,
  ReactNode,
  ReactComponentElement
} from 'react'

import Product from '../../components/Product'
import { getProducts } from '../../api/cart'
import './index.scss'

export interface IHomeProps {}

export interface IProductList {
  id: number
  name: string
  image: string
  price: number
}

const Home: FC<IHomeProps> = ({}) => {
  // const productList: IProductList[] = []
  const [productList, setProductList] = useState<IProductList[]>()

  useEffect(() => {
    getProducts()
      .then(res => {
        const { productList } = res
        setProductList(productList)
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {})
  }, [])
  useCallback(() => {}, [])
  useMemo(() => {}, [])

  return (
    <div className="home">
      {productList?.map((item, index) => (
        <Product key={index} data={item} />
      ))}
    </div>
  )
}

export default Home
