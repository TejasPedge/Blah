import React, { useContext } from 'react'

import { useRef ,useEffect} from 'react'

import { Context } from '../Context/AuthContextProvider';

import { Navigate, useNavigate } from 'react-router-dom';


export default function Login() {

    const {isAuth,setAuth} = useContext(Context);

    const Navigate = useNavigate();

    const email = useRef();

    const password = useRef();

    const LoginIt = (e) => {
 
          e.preventDefault();

          const  obj = {
                   
                   email : email.current.value,
                   password : password.current.value

                }

                console.log(obj);

        const url = `https://reqres.in/api/login`;

        const method = { 

                         method : "POST",
                         headers : {'Content-Type' : 'application/json'},
                         body : JSON.stringify(obj)

                       }

        fetch(url,method).then((res) => {

                 console.log(res);

                 return res.json();

        }).then((res) => {
 
              console.log(res);

              setAuth(true);
              
              Navigate("/")

        

        });



    }




   
    
    return (
        <div>
            <form className = "auth_form"  onSubmit={ LoginIt} >
                <input
                    style = {{padding:"5px", margin: "10px", width: 200}}
                    type = "email"
                    className = "email"
                    placeholder = "Enter Email"
                    ref = {email}

                />
                <br />
                <input
                    style = {{padding:"5px", margin: "10px", width: 200}}
                    type = "password"
                    className = "password"
                    placeholder = "Enter password"
                    ref =  {password}
                />
                <br />
                <input className = "submit" type = "submit"/>

            </form>  
                          
        </div>
    )
}