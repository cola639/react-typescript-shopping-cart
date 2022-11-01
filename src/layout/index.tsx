import { FC, useState, useEffect, useCallback, useMemo } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

import './index.scss'

export interface ILayoutProps {}

const Layout: FC<ILayoutProps> = ({}) => {
  useEffect(() => {}, [])
  useCallback(() => {}, [])
  useMemo(() => {}, [])

  return (
    <div className="container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
