import React, { createContext, useContext, useState } from 'react'

export const BottomContext = createContext()

const BottomProvider = ({ children }) => {
    const [bottomCheck, setBottomCheck] = useState(false);

    return (
        <BottomContext.Provider value={[bottomCheck, setBottomCheck]}>
            {children}
        </BottomContext.Provider>
    )
}

export default BottomProvider

export function useBottomBar() {
    return useContext(BottomContext)
} 
