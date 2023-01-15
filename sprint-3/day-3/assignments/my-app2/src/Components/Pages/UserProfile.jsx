import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"

function getData (id) {

   const url = `https://reqres.in/api/users/${id}`


     return fetch(url)
             .then((res)=> {
                 
                 console.log(res,"from getData") 
                 
                  if(!res.ok){

                     return false

                  }


                 return res.json()
             })
             .catch((err)=>{
 
                 console.log(err,"from first catch")
 
             })
 
 
 }



const UserProfile = () => {

    const {user_id} =  useParams();
    
    console.log(user_id);

    const [data,setData] = useState({});
    const [err,seterr] = useState (false);
    const [loading,setLoading] = useState(false);
    const [response,setRes] = useState(true);

    const UsersData = () => {
 
        getData(user_id).then((res) => {

            console.log(res,"j");

            if (!res) {

                setRes(false);

            }
            
              setData(res);
              

        })
        .catch((err) =>{

              console.log(err,"from second catch")

              seterr(true);

        }).finally(() => {

                setLoading(false);

        })

    }



useEffect((w) => {

    setLoading(true);

    UsersData();

},[]);

if(loading) {

    
    console.log ("loading returned")

    
       return <h1>Loading..........</h1>
  }

  if(err) {

       return <h1>Something went wrong....</h1>
  }
 
  if(!response) {

        return <h1>User Not Found</h1>

  }


return <>

<h1>USER ID : {user_id}</h1>

<img src={data?.data?.avatar} alt="" />
<p>{data?.data?.first_name + " " + data?.data?.last_name}</p>
<p>{data?.data?.email}</p>
<hr />

<p>{data?.support?.url}</p>

<p>{data?.support?.text}</p>

</>

}


export default UserProfile