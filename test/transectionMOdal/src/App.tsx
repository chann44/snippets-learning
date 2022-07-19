import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Transections from './componets/Transections'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Transections />
  )
}

export default App
