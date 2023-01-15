import { createContext, useState } from "react";



export const AuthContext = createContext();

function AuthContextProvider({children}) {

    const [isAuth,setAuth] = useState(false);

    const [token,setToken] = useState(null);

    const authState = {isAuth,token};

    const loginUser = (token) => {

               setAuth(true);

               setToken(token);

    }

    const logoutUser = () => {

                setAuth(false);

                setToken(null);

    }




    return <AuthContext.Provider value = {{authState,loginUser,logoutUser}}>

                {children}

           </AuthContext.Provider>


}

export default AuthContextProvider;
