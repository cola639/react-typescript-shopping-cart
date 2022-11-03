import { lazy } from 'react'
import { withLoading } from './withLoading.hoc'

// import Layout from '../layout'
// import Home from '../pages/home'
// import Login from '../pages/login'
// import Payment from '../pages/payment'
// import Detail from '../pages/detail'

const Layout = withLoading(lazy(() => import('../layout'))) // Each page lazy loading different from page form loading
const Home = withLoading(lazy(() => import('../pages/home')))
const Login = withLoading(lazy(() => import('../pages/login')))
const Payment = withLoading(lazy(() => import('../pages/payment')))
const Detail = withLoading(lazy(() => import('../pages/detail')))

export default {
  Login,
  Layout,
  Payment,
  Detail,
  Home
}
