    
    import { AuthContext } from "../Context/Context"

    import { useContext } from "react"

    import { Navigate } from "react-router-dom";





const PrivateRoute = ({children}) => {

        const {auth} = useContext(AuthContext);

        if(!auth) {

         return <Navigate to = "/" />

        }

  return children

}


export default PrivateRoute