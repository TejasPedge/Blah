import { Routes,Route } from "react-router-dom"
import Home from "../Pages/Home"
import Login from "../Pages/Login"
import Products from "../Pages/Products"
import Protect from "./ProtectRoute"


const AllRoute = () => {


    return <Routes>

        <Route  path = "/" element = {<Home/>} />

        <Route  path = "/login" element = {<Login/>} />

        <Route  path = "/products" element = {<Protect><Products/></Protect>} />


    </Routes>



}



export default AllRoute