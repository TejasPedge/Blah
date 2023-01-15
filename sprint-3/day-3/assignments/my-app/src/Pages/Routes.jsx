import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import Dashboard from "./Dashboard"
import Settings from "./Settings"
import Login from "./Login"
import ProtectRoute from "../Components/ProtectRoute"

const Allroutes = () => {

     
   return    <Routes>

                    <Route path = "/" element = { <Home/> } />

                    <Route path = "/login" element = { <Login/> } />

                    <Route exact path = "/dashboard" element = {<ProtectRoute> <Dashboard/> </ProtectRoute>} />

                    <Route path = "/dashboard/setting" element = {<ProtectRoute> <Settings/> </ProtectRoute>} />

             </Routes>


}


export default Allroutes