import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import User from './component/user'
import Admin from './component/admin'
import CityMaster from './component/cityMaster'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Welcome to Vite + React</h1>

      <User />
      <Admin />
      <CityMaster />
    </>
  )
}

export default App
