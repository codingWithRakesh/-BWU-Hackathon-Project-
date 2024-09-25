import React from 'react'
import { FaLaptopCode } from 'react-icons/fa'
import { MdDarkMode } from 'react-icons/md'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar navbarshadow'>
            <div className="logo">
                <span>
                <FaLaptopCode />
                </span>
                <div className="nameGroup">
                    undefined
                </div>
            </div>
            <div className="navigasons">
                <div className="navs">
                    <NavLink to="/" className='navClick'>HOME</NavLink>
                    <NavLink to="/webScreenshot" className='navClick'>web screenshot</NavLink>
                    <NavLink to="/randomUserData" className='navClick'>random user data</NavLink>
                    <NavLink to="/pdfToQr" className='navClick'>PDF TO QR</NavLink>
                    <NavLink to="/about" className='navClick'>ABOUT</NavLink>
                    <div className="navClick">
                        <MdDarkMode />
                    </div>
                </div>
            </div>


        </nav>
    )
}

export default Navbar