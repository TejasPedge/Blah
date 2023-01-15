import { createContext } from "react";

import { useState } from "react";


//create 

export  const AuthContext = createContext();

// provide

const AuthContextProvider = ({children}) => {

 const [auth, setAuth] = useState(false)


 const login = () => {

    setAuth(true);

 }

 const logout = () => {

    setAuth(false);

 }

  return <AuthContext.Provider value = {{auth,login,logout}}>

            {children}

         </AuthContext.Provider>



}


export default AuthContextProvider