import Allroutes from './Pages/Routes';
import { NavLink } from 'react-router-dom';

import './App.css';




  const x = (isActive) => {

   return isActive ? "active" : "default";

  }

function App() {
  return (<>
    <div className="App">

              <nav className='nav'>

              <NavLink to="/" className={({isActive}) => x(isActive)}>                      <b>Home</b>       </NavLink> 

              <NavLink to = "/dashboard" className={({isActive}) => x(isActive)}>           <b>Dashboard</b>  </NavLink> 

              <NavLink to = "/dashboard/setting" className={({isActive}) => x(isActive)}>  <b>Settings</b>   </NavLink> 

              <NavLink to = "/login" className={({isActive}) => x(isActive)}>               <b>Login</b>      </NavLink> 

              </nav>

    </div>

   <div className='pages'>

   <Allroutes />

   </div>


   </>


      


  );
}

export default App;
