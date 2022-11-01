import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from './router'
import './styles/index.scss'
import './App.css'
import 'antd/dist/antd.css'

export interface IAppProps {}

const App: FC<IAppProps> = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}

export default App
