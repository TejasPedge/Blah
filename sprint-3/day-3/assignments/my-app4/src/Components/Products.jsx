import { useEffect, useState } from "react";

import ProductsCard from "./Productscard";

import Pagination from "./Pagination";

import { useSearchParams } from "react-router-dom";



const Products =  () => {

    const [data,setData] = useState([]);

    const [loading,setLoading] = useState(true);

    const [err,seterr] = useState(false);

    const [params,setParams] = useSearchParams();

   

     let x = params.get("page");

     console.log(x,typeof(x));

     if (typeof(x) !== Number && x > 0 && x <= 50) {
 
            x = Number(x);
    
     }else {

               x = 1;

     }

     console.log(x);

    const [page,setPage] = useState(x);

    const [total,setTotal] = useState("");

    const GetData = async (page,limit) => {

       const url = `http://localhost:8000/products?_page=${page}&_limit=${limit}`;
    
        
        try{
    
          let data =  await fetch(url);
          console.log(data);
          console.log(data.headers.get("X-Total-Count"))
           let b = await data.json();
           setTotal(data.headers.get("X-Total-Count"));
           setData(b)
           setLoading(false);
           console.log(b);
    
        }
        catch (err) {
    
            console.log(err,"💳err from first catch")
            seterr(true);
            setLoading(false);
    
        }
    
    }
    

    useEffect(() => {

       

        GetData(page,10);

        setParams({page : page});

        
    },[page]);


    if (loading) {

         return <h1>Loading..................</h1>

    }


    if(err) {

        return <h1>Check Your Internet Connection</h1>
          
    }

    


   console.log(data);

   console.log(page,"...........")

    return <div>

<h1>ALL PRODUCTS</h1>

        
        
        <p>Click on the products to see more Details</p>
         
         {data.map((el) => <ProductsCard key = {el.id} {...el }/> )}


         <Pagination total = {total} setPage = {setPage} page = {page} />
        
       
        
        </div>
 
 }
 
 export default Products


