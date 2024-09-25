import React, { createContext, useContext, useEffect, useState } from 'react'

export const ModeContext = createContext()

const ModeProvider = ({ children }) => {
    const [modeCheck, setModeCheck] = useState(true);

    useEffect(() => {
      if(modeCheck){
        document.documentElement.setAttribute("data-theme", "light");
      }else{
        document.documentElement.setAttribute("data-theme", "dark");
      }
    }, [modeCheck])
    

    return (
        <ModeContext.Provider value={[modeCheck, setModeCheck]}>
            {children}
        </ModeContext.Provider>
    )
}

export default ModeProvider

export function useMode() {
    return useContext(ModeContext)
} 
