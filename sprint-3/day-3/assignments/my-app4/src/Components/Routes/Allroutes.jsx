import { Routes,Route } from "react-router-dom";
import Home from "../Home";
import Login from "../Login";
import Products from "../Products";
import Protectroute from "./ProtectRoute";
import SinglePage from "../SinglePage";


let routes = [
        
               {path : "/" , element : <Home/> },

               {path : "/login" , element : <Login/> },

               {path : "/products" , element : <Protectroute><Products/></Protectroute> },

               {path : "/products/:product_id" , element : <Protectroute><SinglePage/></Protectroute> },

               {path : "*" , element : <h1>404 PAGE NOT FOUND</h1>}

            ]





const Allroutes = () => {

   return  <Routes>
        
      { routes.map((el) => {

          return <Route key = {Math.random()} path = {el.path} element = {el.element} />

       }) }

        



</Routes>


}


export default Allroutes