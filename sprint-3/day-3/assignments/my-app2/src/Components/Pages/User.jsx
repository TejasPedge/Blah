import { useState,useEffect } from "react"

import { Link } from "react-router-dom"

import { useSearchParams } from "react-router-dom"



function getData (page) {

   const url = `https://reqres.in/api/users?page=${page}`

    return fetch(url)
            .then((res)=> {
                
                console.log(res,"from getData")  
                return res.json()
            })
            .catch((err)=>{

                console.log(err,"from first catch")

            })


}







const User = () => {

    
    const [data,setData] = useState({});
    const [err,seterr] = useState (false);
    const [loading,setLoading] = useState(false);
    const [param,setParam] = useSearchParams();

    //convertinng it to an number

    const x = +param.get("page")
  
    console.log(x,param.get("page"),"ddsfdf")

    
    const [page,setPage] = useState( x || 1 );


    const UsersData = () => {
 
        getData(page).then((res) => {

            console.log(res);
            
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

},[page]);


useEffect(() => {

   setParam({page: Number(page)})

},[page]);

console.log(err);

  if(loading) {

    
    console.log ("loading returned")

    
       return <h1>Loading..........</h1>
  }

  if(err) {

       return <h1>Something went wrong....</h1>
  }
 


    

    return<>
    
    <h2>welocomw to User page : {page}</h2>

    <p>|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||</p> 
    
    {data?.data?.map((el)=>{

         return < div key = {el.id}>
          
                <img src={el.avatar} alt="" />

                 <p>{el.first_name + " " + el.last_name}</p>

                 <Link to={`/User/${el.id}`}> <p>OPEN PROFILE</p></Link>
        
         </div>

    })}


    <button disabled = {page==1} onClick = {()=> setPage(page-1)}>Prev</button>
    <button>{page}</button>
    <button disabled = {page==2} onClick = {()=> setPage(page+1)}>Next</button>
    
    </> 
    }
    
    
    export default User