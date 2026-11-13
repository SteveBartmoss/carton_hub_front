import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { MainRuoter } from './routes/mainRouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainRuoter />
    </>
  )
}

export default App
