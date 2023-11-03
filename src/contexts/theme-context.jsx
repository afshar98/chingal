import {useContext, useState} from "react";
import {createContext} from "react";

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {

    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('is-dark-mode') || true);

    const value = {
        isDarkMode,
        setIsDarkMode,
    }

    console.log(isDarkMode)

    return <ThemeContext.Provider value={value}>
        {children}
    </ThemeContext.Provider>
}

const useThemeContext = () => {
    return useContext(ThemeContext);
}

export {useThemeContext, ThemeProvider}