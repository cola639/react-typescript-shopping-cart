import { FC, useState, useEffect, useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/reduxHooks'
import { doLogin } from '../../store/slices/userSlice'

export interface ILoginProps {}

const Login: FC<ILoginProps> = ({}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleLogin = () => {
    const loginData = {
      name: email,
      password
    }
    dispatch(doLogin(loginData))
      .then(res => {
        console.log('🚀TCL: >> .then >> res', res)
        navigate('/payment')
      })
      .catch(err => {
        console.log('🚀TCL: >> handleLogin >> err', err)
      })
  }

  return (
    <div>
      <input
        type="text"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder={'input your email'}
      />
      <input
        type="text"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder={'input your password'}
      />
      <button onClick={handleLogin}>CLICK ME TO LOGIN</button>
    </div>
  )
}

export default Login
