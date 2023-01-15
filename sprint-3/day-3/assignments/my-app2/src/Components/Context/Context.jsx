import { createContext } from "react";
import { useState } from "react";



export const AuthContext = createContext();

const ContextProvider = ({children}) => {

const [auth,setAuth] = useState(true);

const [text,setText] = useState("Login")

const ToggleLogin = ()=> {

      if (!auth) {

        setAuth(true)

        setText("Logout")

      }else {

        setAuth(false)

        setText("Login")

      }

}




return <AuthContext.Provider value={ {ToggleLogin,auth,text}}>

             {children}

       </AuthContext.Provider>



}


export default ContextProvider