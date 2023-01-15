import style from "./Nav.module.css"

import { NavLink } from "react-router-dom"


import { AuthContext } from "./Context/Context"

import { useContext } from "react"


const Navbar = () => {

    const {ToggleLogin,auth,text} = useContext(AuthContext);


    const Css = ({isActive}) =>{

         return isActive ? style.active : style.default;

    }


   return <nav className={style.nav}>

     <NavLink to = "/"  className = {Css} >         <b>Home</b>     </NavLink>

     <NavLink to = "/About"  className = {Css}>     <b>About</b>    </NavLink>

     <NavLink to = "/Contact"  className = {Css}>   <b>Contact</b>  </NavLink>

     <NavLink to = "/User"  className = {Css}>      <b>User</b>     </NavLink>
 
     <NavLink to = "/Login" className = {Css}>      <b>Login</b>    </NavLink>

      <b>is User Authenticated : {auth ? "Yes" : "No"}</b>

      <button onClick={ToggleLogin}>{text}</button>
   </nav>




}



export default Navbar










