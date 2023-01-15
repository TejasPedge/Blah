import { NavLink } from "react-router-dom"



let routes = [
        
    {path : "/" , text : "Home" },

    {path : "/login" , text : "Login" },

    {path : "/products" , text : "Products" },

 ]


const Navbar = () => {

     return <div className="nav">

            
              {routes.map((el) => {

                   return <NavLink key = {el.path} className={ ({isActive}) => isActive ? "active" : "default" } to = {el.path} >  <b>{el.text}</b>  </NavLink>

              })} 

        

     </div>


}

export default Navbar