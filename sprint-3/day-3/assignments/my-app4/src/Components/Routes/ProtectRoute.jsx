
import { Context } from "../Context"
import { useContext,useEffect,useState } from "react"

import { Navigate } from "react-router-dom";


const Protectroute = ({children}) => {

      const {auth} = useContext(Context);

      const [timer,setTimer] = useState(5);

      const [id,setid] = useState("");
     
      useEffect(() => {

        if (!auth) {

        const ids =   setInterval(() => {

                setTimer((prev) => {

                     return prev-1;

                })
 
             },1000);

             setid(ids);

            }



      },[]);


     
       if(timer == 0) {

           clearInterval(id);

         return   <Navigate to = "/login" />



       }
     
     



      if (!auth) {

  
           return  <>

                 <h1>Login to see the Products</h1>

                   <p> Redirecting you to Login Page in : {timer} </p>          
        </>


      }

      return children
     


}


export default Protectroute