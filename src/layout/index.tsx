import { FC, useState, useEffect, useCallback, useMemo } from 'react'
import Home from '../pages/home'
import './index.scss'

export interface ILayoutProps {}

const Layout: FC<ILayoutProps> = ({}) => {
  useEffect(() => {}, [])
  useCallback(() => {}, [])
  useMemo(() => {}, [])

  return (
    <div className="container">
      <Home />
    </div>
  )
}

export default Layout
