import { RouteObject } from 'react-router' // route interface
import { useRoutes } from 'react-router-dom'
import routeList from './routeList'

// extend interface RouteObject
export interface RouteMetaObject extends RouteObject {
  children?: RouteMetaObject[]
  meta?: { title: string; icon: string }
  roles?: string[]
}

const { Login, Layout, Payment, Home } = routeList

const routes: RouteMetaObject[] = [
  {
    path: '/login',
    element: <Login />
  },

  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/payment',
        element: <Payment />
      }
    ]
  }
]

export const Routes = () => useRoutes(routes)
