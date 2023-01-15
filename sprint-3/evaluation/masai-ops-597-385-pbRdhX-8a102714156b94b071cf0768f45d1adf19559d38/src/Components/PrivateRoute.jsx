
import { AuthContext } from "../Context/AuthContext";

import { useContext } from "react";

import { Navigate } from "react-router-dom";


function PrivateRoute({children}) {

      const {authState} = useContext(AuthContext);
      
      console.log("🛩️🛩️",authState.isAuth,"from Privateroute");

      if (authState.isAuth) {

        return children;

      }
  

     return <Navigate to = "/login" />

   
}

export default PrivateRoute;
