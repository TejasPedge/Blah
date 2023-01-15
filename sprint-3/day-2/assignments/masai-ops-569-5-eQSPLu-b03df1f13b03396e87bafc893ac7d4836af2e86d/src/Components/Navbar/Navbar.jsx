import React from 'react'
import { Link } from 'react-router-dom'


import "./Navbar.css"
function NavBar() {



  return (
    <>
      {/* add your links */}
      <div className="nav-bar">

            
              <Link to = "/"> <b>Home</b> </Link>

              <Link to = "/contact" > <b>Contact</b> </Link>

              <Link to = "/about-us"> <b>About</b> </Link>

              <Link to = "/services"> <b>Services</b> </Link>

              <Link to = "/login"> <b>Login</b> </Link>


      </div>



                

    </>
  )
}

export default NavBar
