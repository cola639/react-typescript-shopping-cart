import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../hooks/reduxHooks'
import { WithChildrenProps } from './generalTypes'

const RequireAuth: React.FC<WithChildrenProps> = ({ children }) => {
  const token = useAppSelector(state => state.user.userInfo.token)

  return token ? <>{children}</> : <Navigate to="/login" replace />
}

export default RequireAuth
