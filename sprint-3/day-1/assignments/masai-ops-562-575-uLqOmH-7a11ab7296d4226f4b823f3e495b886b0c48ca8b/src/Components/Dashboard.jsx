import React from 'react'

import User from './User'

import "./Dashboard.css"

import { ThemeContext } from '../Context/ThemeContextProvider'

import { useContext } from 'react'


let data = [
    {
      "id": 1,
      "name": "Nrupul Dev",
      "position": "CTO",
      "level": 15,
      "points": 23456,
      "img": "https://i.pinimg.com/736x/de/59/4e/de594ec09881da3fa66d98384a3c72ff.jpg"
    },
    {
      "id": 2,
      "name": "Prateek",
      "position": "CEO",
      "level": 15,
      "points": 22456,
      "img": "https://i.pinimg.com/736x/de/59/4e/de594ec09881da3fa66d98384a3c72ff.jpg"
    },
    {
      "id": 3,
      "name": "Yogesh",
      "position": "SVP",
      "level": 15,
      "points": 24536,
      "img": "https://i.pinimg.com/736x/de/59/4e/de594ec09881da3fa66d98384a3c72ff.jpg"
    }
  ]
  
 



export const Dashboard = () => {


   const {isDarkTheme,ChangeTheme} = useContext(ThemeContext)

     console.log(isDarkTheme);

     let obj = {};

     isDarkTheme ? obj = {backgroundColor : "black",color : "white"} : obj = {backgroundColor : "white", color : "black"};

  

    return (
        <div data-testid = "dashboard-cont" className='parent-dashboard' style = {obj}>
            <select data-testid = "select-theme" className='select-theme' onChange={(e)=> ChangeTheme(e) }>
                <option >Light Theme</option>
                <option >Dark Theme</option>
            </select>
            {/* map through the users and render User component */}

           <h1>All Active Users</h1>


           {data.map((el) => {


              return <User key = {el.id} user = {el} isDarkTheme = {isDarkTheme} />


           })}

          

           

        </div>
)
}
