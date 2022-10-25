import { FC } from 'react'
import Footer from './components/Footer'
import './assets/scss/style.scss'

export interface IAppProps {}

const App: FC<IAppProps> = () => {
  return (
    <div className="App">
      <Footer />
    </div>
  )
}

export default App
