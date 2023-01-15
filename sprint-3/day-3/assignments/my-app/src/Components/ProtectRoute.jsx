
import { AuthContext } from "./Context"

import { useContext } from "react"

import { useState,useEffect } from "react";

import { Navigate } from "react-router-dom";

const ProtectRoute = ({children}) => {

   const {auth} = useContext(AuthContext);

   const [timer,setTimer] = useState(5);

   const [id,setId] = useState("");

 
   useEffect(() => {

      if (!auth) {

    const id =   setInterval(() => {

        setTimer((prev) => {

             return prev - 1;

        })
              

       },1000);

       setId(id);

    }

   },[]);

   console.log(timer);

  
   if (timer == 0){

       clearInterval(id);



       return <Navigate to = "/login"/>


   }
   console.log("rendered")



   if (!auth) {

       return <>
       
          <h1>this Route is Protected to see the content Please Login</h1>

          <p>Redirecting you to Login page in {timer}</p>
       
       </>

   }
   
   return children

}


export default ProtectRoute