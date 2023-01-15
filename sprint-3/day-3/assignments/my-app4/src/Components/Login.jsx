import { useContext } from "react"
import { Context } from "./Context"



const Login = () => {

    const {auth,Login} = useContext(Context)

    return <>
    <h1>Welcome to Login Page</h1>

    <p>{auth ? "Login Successful" : "Click Here to Login"}</p>

    <button onClick={ Login }>{ auth ? "Logout" : "Login" }</button>
    
    </>

 
 }
 
 export default Login