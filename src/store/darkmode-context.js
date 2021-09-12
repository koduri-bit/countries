import React, { useState } from 'react';

const DarkModeContext = React.createContext({
    isLoggedIn: false,
    handleToggleHandler: () => {},

});


export const DarkModeContextProvider = (props) =>{

    const [isDarkMode, setDarkMode] = useState(false);

    const handleToggleHandler = () => {
        setDarkMode( prevMode => {
            return  !prevMode ;
        } )
    }

    return(
        <DarkModeContext.Provider
            value={{
                isDarkMode: isDarkMode,
                switchBtwDarkAndLight: handleToggleHandler
            }}
        >

            {props.children}
        </DarkModeContext.Provider>

    )
}
export default DarkModeContext