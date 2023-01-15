
import { Authcontext } from "../Context/AuthContext"

import { useContext,useEffect,useState } from "react"

import { useNavigate } from "react-router-dom";



const Protect = ({children}) => {

      const {auth} = useContext(Authcontext);

    const navigate = useNavigate();


 

        if (auth == false) {

            
            return<>
            
            <h1>To SEE this Page Please Login</h1>

            <button onClick = {() => navigate("/login")} >click here to go in login page</button>
            
            
            </> 

     }




 
      

      
      
    return children



}


export default Protect