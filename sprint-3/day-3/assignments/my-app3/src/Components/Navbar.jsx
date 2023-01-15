import style from "./Navbar.module.css"

import { NavLink } from "react-router-dom"





const Navbar = () => {


    return <nav className={style.navbar}>


            <NavLink to="/" className={({isActive})=> isActive ? style.active : style.default }> <b>Home</b> </NavLink>

            <NavLink to = "/login" className={({isActive})=> isActive ? style.active : style.default }> <b>Login</b> </NavLink>

            <NavLink to = "/products" className={({isActive})=> isActive ? style.active : style.default }> <b>Products</b> </NavLink>



    </nav>





}


export default Navbar