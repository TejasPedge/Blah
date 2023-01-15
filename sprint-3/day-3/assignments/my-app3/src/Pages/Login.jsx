
import { Authcontext } from "../Context/AuthContext"
import { useContext } from "react"

const Login = () => {

    const {ToggleAuth,auth} = useContext(Authcontext)

    return <>

          <h1>Click here to Login/Logout</h1>

          <h3>{auth ? "You are Logged in successfully" : "Please Login To Access Products Page"}</h3>
    
          <button onClick = {ToggleAuth}>{ auth ? "Logout" : "Login" }</button>
    
    
    </>


}



export default Login