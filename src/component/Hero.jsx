import React from 'react'
import { BsFiletypePdf } from 'react-icons/bs'
import { FaClipboardUser } from 'react-icons/fa6'
import { RiScreenshotFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className='hero'>
            <Link to="/webScreenshot" className="clickCom">
                <span>
                    <RiScreenshotFill />
                </span>
                <button className="button-33" role="button">web screenshot</button>
            </Link>
            <Link to="/randomUserData" className="clickCom">
                <span>
                <FaClipboardUser />
                </span>
                <button className="button-33" role="button">Random user data</button>
            </Link>
            <Link to="/pdfToQr" className="clickCom">
                <span>
                <BsFiletypePdf />
                </span>
                <button className="button-33" role="button">PDF TO QR</button>
            </Link>
        </div>
    )
}

export default Hero