import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Landing from './Components/Landing/Landing'
import Marqee from './Components/Marqee/Marqee'

function App() {
  return (
    <div className='w-full h-screen text-black'>
      <Navbar/>
      <Landing/>
      <Marqee/>
    </div>
  )
}

export default App