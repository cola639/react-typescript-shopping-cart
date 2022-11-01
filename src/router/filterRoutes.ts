import { RouteMetaObject } from './index'

/**
 * judge role true/false
 * @export
 * @param {RouteMetaObject} route
 * @param {string} role
 * @return {boolean}
 */
function hasPermission(role: string, route: RouteMetaObject) {
  if (route.roles && route.roles.includes(role)) {
    return true
  } else {
    return false
  }
}

/**
 * generate routes array
 * @export
 * @param {RouteMetaObject} route
 * @param {string} role
 * @return {RouteMetaObject[]}
 */
export function filterAsyncRoutes(routes: RouteMetaObject[], role: string): RouteMetaObject[] {
  const res: RouteMetaObject[] = []

  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(role, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, role)
      }
      res.push(tmp)
    }
  })

  return res
}
