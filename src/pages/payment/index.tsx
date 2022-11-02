import { FC, useState, useEffect, useCallback, useMemo } from 'react'
import { useAppSelector } from '../../hooks/reduxHooks'
import './index.scss'

export interface IPaymentProps {}

const Payment: FC<IPaymentProps> = ({}) => {
  const { username, avatar, role, token } = useAppSelector(state => state.user.userInfo)
  console.log('🚀TCL: >> token', token)
  console.log('🚀TCL: >> role', role)
  console.log('🚀TCL: >> avatar', avatar)
  console.log('🚀TCL: >> username', username)

  return (
    <div className="payment">
      <div className="payment_avatar">
        <h1>PAY SUCESSED</h1>
        <img src={avatar} />
      </div>
      <div className="flex-column-no-align payment_userInfo">
        <span>username:{username} </span>
        <span>role:{role}</span>
        <span>token:{token}</span>
      </div>
    </div>
  )
}

export default Payment
