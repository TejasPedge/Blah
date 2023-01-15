import {NavLink} from "react-router-dom"


const Links = [

    {path : "/login" , text : "Login"} ,

    {path : "/" , text : "Home"} ,

    {path : "/about" , text : "About"} ,

    {path : "/contact" , text : "Contact"} ,

    {path : "/products" , text : "Products"} ,

]






function Navbar() {
    return(
        <div className = "navbar" >

                {Links.map((el) => <NavLink className={({isActive}) => isActive ? "active" : "default" } key = {el.path} to = {el.path}>{el.text}</NavLink>)}

        </div>
    )
}

export { Navbar }