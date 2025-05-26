import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Practice from './components/Practice'
import Axios from './components/Axios'
// import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <p>This is the good thing..!</p>
     {/* <Practice/> */}
     <Axios/>
    </>
  )
}

export default App
