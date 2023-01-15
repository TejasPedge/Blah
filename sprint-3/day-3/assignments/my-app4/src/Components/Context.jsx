      
import { createContext } from "react";
import { useState } from "react";


export const Context = createContext();

const ContextProvider = ({children}) => {

      const [auth,setauth] = useState(true);

      const Login = () => {

        auth ? setauth(false) : setauth(true);   

      }


   return <Context.Provider value = {{auth,Login}}>

             {children}

         </Context.Provider>

}

export default ContextProvider

