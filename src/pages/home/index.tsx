import { FC, useState, useEffect, useCallback, useMemo } from 'react'
import Product from '../../components/Product'
import './index.scss'

export interface IHomeProps {}

const Home: FC<IHomeProps> = ({}) => {
  useEffect(() => {}, [])
  useCallback(() => {}, [])
  useMemo(() => {}, [])

  return (
    <div className="home">
      <Product />
    </div>
  )
}

export default Home
