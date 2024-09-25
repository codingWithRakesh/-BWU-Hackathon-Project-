import React from 'react'
import { RxCross2 } from 'react-icons/rx'
import { NavLink } from 'react-router-dom'
import { useBottomBar } from '../contexts/bottomContext'

const Bottombar = () => {
    const [bottomCheck, setBottomCheck] = useBottomBar()
    return (
        <div className='bottombar'>
            <NavLink onClick={()=>setBottomCheck((p) => !p)} to="/" className='bottomNav'>HOME</NavLink>
            <NavLink onClick={()=>setBottomCheck((p) => !p)} to="/webScreenshot" className='bottomNav'>web screenshot</NavLink>
            <NavLink onClick={()=>setBottomCheck((p) => !p)} to="/randomUserData" className='bottomNav'>random user data</NavLink>
            <NavLink onClick={()=>setBottomCheck((p) => !p)} to="/pdfToQr" className='bottomNav'>PDF TO QR</NavLink>
            <NavLink onClick={()=>setBottomCheck((p) => !p)} to="/about" className='bottomNav'>ABOUT</NavLink>

            <div className="crose" onClick={()=>setBottomCheck((p) => !p)}>
                <RxCross2 />
            </div>
        </div>
    )
}

export default Bottombar