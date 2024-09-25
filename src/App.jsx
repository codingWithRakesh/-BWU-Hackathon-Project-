import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <div className='container'>
        <Navbar/>
        <Outlet />
      </div>
    </>
  )
}

export default App
