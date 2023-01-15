
import { createContext } from "react";

import { useState } from "react";


//create

export const Authcontext =  createContext();

//provide


const ContextProvider = ({children}) => {

    
  const [auth,setauth] = useState(true);

 
 const  ToggleAuth = () => {

        auth ? setauth(false) : setauth(true);

     }




    
  return  <Authcontext.Provider  value={{ToggleAuth,auth}}>
 
         {children}
  
    </Authcontext.Provider>

}



export default ContextProvider


