import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Transactions from "./components/Transactions"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Transactions />
    </div>
  )
}

export default App
