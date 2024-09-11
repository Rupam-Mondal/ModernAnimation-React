import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Landing from './Components/Landing/Landing'
import Marqee from './Components/Marqee/Marqee'
import About from './Components/About/About'
import Eyes from './Components/Eyes/Eyes'

function App() {
  return (
    <div className='w-full h-screen text-black'>
      <Navbar/>
      <Landing/>
      <Marqee/>
      <About/>
      <Eyes/>
    </div>
  )
}

export default App