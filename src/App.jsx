import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './media.css'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import { Outlet } from 'react-router-dom'
import Bottombar from './component/Bottombar'
import { useBottomBar } from './contexts/bottomContext'
import Menu from './component/Menu'

function App() {
  const [bottomCheck, setBottomCheck] = useBottomBar()
  return (
    <>
      <div className='container'>
        <Navbar/>
        <Outlet />
        <Menu/>
        {bottomCheck && <Bottombar/>}
      </div>
    </>
  )
}

export default App
