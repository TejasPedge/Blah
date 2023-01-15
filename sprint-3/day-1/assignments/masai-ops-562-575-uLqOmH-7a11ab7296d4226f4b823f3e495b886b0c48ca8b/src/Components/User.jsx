import React from 'react'

import "./User.css"




export default function User({isDarkTheme,user}) {



     let slider = {};

     isDarkTheme ? slider = { accentColor : "yellow" }  : slider = { accentColor : "blue" };

     let obj = {};

     isDarkTheme ? obj = {backgroundColor : "black",color : "white"} : obj = {backgroundColor : "white", color : "black"};

  


  

    return (
        <div data-testid = "user" className='user' style = {obj} >

             <div className='user-detail'>
  
                   <img src={user.img} alt="" />

                   <div>
                         <b>{user.name}</b>

                         <b>{user.position}</b>

                   </div>


             </div>

            <input data-testid = "level" type = "range" className='slider' style={slider}/>

            <div className='prof-level'>
  
                  <span>Professional Level {user.level}</span>

                  <span>{user.points} Points</span>


            </div>

        </div>
    )
}
