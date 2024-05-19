import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Info from "./Info.jsx"
import About from './About.jsx'
import Interests from './Interests.jsx'
import Footer from './Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id='card'>
      <Info />
      <About/>
      <Interests/>
      <Footer/>
    </div>
  )
}

export default App
