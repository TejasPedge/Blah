import { AuthContext } from "../Context/Context"
import { useContext } from "react"


const Login = () => {

    const {ToggleLogin,auth,text} = useContext(AuthContext)


    return <>
    
    <h2>is User Authenticated : {auth ? "Yes" : "No"}</h2>

    <button onClick = {ToggleLogin}>{text}</button>

    </>
    
    }
    
    
    export default Login