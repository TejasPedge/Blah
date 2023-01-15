import { Link, useNavigate} from "react-router-dom";
import { useContext , useRef } from "react";
import { AuthContext } from "../Context/AuthContext";



function Login() {

   const {authState,loginUser,logoutUser} = useContext(AuthContext);

   const Navigate = useNavigate();

   const email = useRef("");

   const password = useRef("");

   
   const url = `https://reqres.in/api/login`;

   const Logins = async (e) => {

    try {

    e.preventDefault();

    const Login_details = {
      
                           email : email.current.value, 
      
                           password : password.current.value 
                          
                          };

        

    const method = {method : "POST",headers : {'Content-Type' : 'application/json'}, body : JSON.stringify(Login_details)};

    const a = await fetch (url,method);

    console.log(a);

    if(a.ok == true) {

      const b = await a.json();

      loginUser(b.token);

      Navigate("/dashboard");

      console.log(b);

    }

  }

  catch (err) {

        console.log("🛩️🛩️",err);

  }

   }






  return (
    <div className="login-page">
      <form className="form" data-testid="login-form" onSubmit={Logins} >
        <div>
          <label>
            <input data-testid="email-input" type="email" placeholder="email" ref = {email} />
          </label>
        </div>
        <div>
          <label>
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              ref = {password}
            />
          </label>
        </div>
        <div>
          <button data-testid="form-submit" type="submit" disabled = {authState.isAuth == true}>
            SUBMIT
          </button>
        </div>
      </form>
   
      
    {/* email:  eve.holt@reqres.in <br />
    password: cityslicka */}




      <div>
        <Link className="message" to="/">
          Go Back
        </Link>
      </div>
    </div>
  );
}
export default Login;


