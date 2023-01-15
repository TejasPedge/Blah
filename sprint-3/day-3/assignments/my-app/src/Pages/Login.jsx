import { AuthContext } from "../Components/Context"
import { useContext } from "react"


const Login = () => {

  const  {login,logout,auth}  =  useContext(AuthContext);

  return  <>  

      <h1>{auth ? "You are Logged in" : "You are Logged out"}</h1>
    
      <button onClick = { login }>LOGIN</button>

      <button onClick = { logout }>LOGOUT</button>

    </>

}

export default Login