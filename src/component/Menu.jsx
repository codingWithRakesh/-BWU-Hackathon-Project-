import React from 'react'
import { CgMenuGridO } from 'react-icons/cg'
import { useBottomBar } from '../contexts/bottomContext'

const Menu = () => {
    const [bottomCheck, setBottomCheck] = useBottomBar()
    return (
        <div className='menu' onClick={() => setBottomCheck((p) => !p)}>
            <CgMenuGridO />
        </div>
    )
}

export default Menu