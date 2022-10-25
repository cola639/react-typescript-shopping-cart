import { FC } from 'react'
import Header from './components/Header'
import Layout from './layout'
import Footer from './components/Footer'
import './styles/index.scss'
import './App.css'
import 'antd/dist/antd.css'

export interface IAppProps {}

const App: FC<IAppProps> = () => {
  return (
    <div className="app">
      <Header />
      <Layout />
      <Footer />
    </div>
  )
}

export default App
