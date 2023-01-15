import React from 'react'

import { Routes, Route} from "react-router-dom"

import Login from '../Pages/Login'

import Home from '../Pages/Home'

import About from '../Pages/About'

import Contact from '../Pages/Contact'

import AllProducts from '../Pages/Products'

import PrivateRoute from './PrivateRoute'

const routes = [

    {path : "/login" , element : <Login/>} ,

    {path : "/" , element : <Home/>} ,

    {path : "/about" , element : <About/>} ,

    {path : "/contact" , element : <Contact/>} ,

    {path : "/products" , element : <PrivateRoute><AllProducts/></PrivateRoute>} ,


]




const AllRoutes = () => {
    return (
        <div>

               <Routes>

                { routes.map((el) =>  <Route key = {el.path} path = {el.path} element = {el.element} />)}

               </Routes>


        </div>
    )
}

export {AllRoutes}