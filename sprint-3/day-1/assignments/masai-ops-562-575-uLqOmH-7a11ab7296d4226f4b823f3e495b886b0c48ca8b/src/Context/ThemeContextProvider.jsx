import React from 'react'
import App from '../App'



// Create 

export const ThemeContext = React.createContext();



 


export default function ThemeContextProvider() {

  const [isDarkTheme,setDarkTheme] = React.useState(false);

  function ChangeTheme (e) {

    let theme = e.target.value;

        console.log(e.target.value) 

    theme == "Dark Theme" ? setDarkTheme(true) : setDarkTheme(false);
        

    }




  return (

    <ThemeContext.Provider value = {{isDarkTheme,ChangeTheme}}>

        <App />

    </ThemeContext.Provider>
  )
}
