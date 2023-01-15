import { createContext, useState } from "react";




export const Context = createContext();

const ContextProvider = ({children}) => {


  const [isAuth,setAuth] = useState(false);


   return  <Context.Provider value = {{isAuth,setAuth}}>

              {children}

           </Context.Provider>


}


export default ContextProvider