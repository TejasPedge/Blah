import { Route,Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import User from "../Pages/User";
import Login from "../Pages/Login";
import Contact from "../Pages/Contact";
import UserProfile from "../Pages/UserProfile";
import PrivateRoute from "./PrivateRoute";

let routes =[  {path:"/",element : <Home/>},

               {path:"/About",element : <About/>},

               {path:"/User",element : <PrivateRoute> <User/> </PrivateRoute>},

               {path:"/Login",element : <Login/>},

               {path:"/Contact",element : <Contact/>},

               {path:"/User/:user_id",element :  <PrivateRoute> <UserProfile/> </PrivateRoute> },

               {path:"*",element : <h1>Page not Found</h1>},  
            ]



const AllRoutes = () => {

    const x = routes.map((el) => {

          return <Route key = {el.path} path = {el.path} element = {el.element} />

    })

    return <Routes> {x} </Routes>;

}


export default AllRoutes


