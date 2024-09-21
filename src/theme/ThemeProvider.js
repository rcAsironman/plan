import React,{useContext, useState} from 'react'
import { createContext } from 'react';
import { BackHandler } from 'react-native';


const ThemeContext = createContext()

export const useTheme = () => useContext(ThemeContext)


export const ThemeProvider = ({children}) => {

  const [theme, setTheme] = useState("light")

  const toogle = ()=>{
    setTheme( (pre) => (pre === 'light'? "dark" : "light") )
  }

  const themeStyle = theme === 'light' ? lightTheme : darkTheme


  return (
    <ThemeContext.Provider value={{themeStyle,theme, toogle}}>
      {
        children
      }
    </ThemeContext.Provider>
  )
}


const lightTheme = {

  backgroundColor: "white",
  textColor: "black"
}

const darkTheme = {

  backgroundColor: "black",
  textColor: "white"
}
