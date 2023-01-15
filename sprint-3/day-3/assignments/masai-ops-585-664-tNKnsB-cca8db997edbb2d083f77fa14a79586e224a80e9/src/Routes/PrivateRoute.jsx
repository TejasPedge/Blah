import {useContext} from "react";

import { Context } from "../Context/AuthContextProvider";

import {Navigate} from "react-router-dom"


const PrivateRoute = ({children}) => {

       const {isAuth} = useContext(Context);

       console.log(isAuth);

      

       if (!isAuth) {

             return <Navigate to = "/login" />

       }

       return children
       
}

export default PrivateRoute