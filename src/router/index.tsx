import { RouteObject } from 'react-router' // route interface
import { useRoutes } from 'react-router-dom'
import RequireAuth from './RequireAuth'
import routeList from './routeList'

// extend interface RouteObject
export interface RouteMetaObject extends RouteObject {
  children?: RouteMetaObject[]
  meta?: { title: string; icon: string }
  roles?: string[]
}

const { Login, Layout, Payment, Home, Detail } = routeList
const ProtectedPayment = (
  <RequireAuth>
    <Payment />
  </RequireAuth>
)

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
        element: ProtectedPayment
      },

      {
        path: '/detail',
        element: <Detail />
      }
    ]
  }
]

export const Routes = () => useRoutes(routes)
