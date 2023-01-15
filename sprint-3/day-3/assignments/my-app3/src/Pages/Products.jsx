
import { useEffect, useState, useRef } from "react";
import GetData from "./FetchData/Getdata";
import Paginate from "./FetchData/Pagination";
import ProductCard from "./ProductsCard";
import { useSearchParams } from "react-router-dom";
import SearchData from "./FetchData/SearchData";

    
const Products = () => {

     const [data,setData] = useState([]);

     const  [param,setparam] = useSearchParams();

     const [res,setres] = useState(true);

     let x = param.get("page");

     if (x && x <= 10 && x>=0) {



        x = Number(x);

     }else {

       x = 1;

     }

     console.log(x);

     const [page,setPage] = useState(x);
     
     const [loading,setloading] = useState(false);

     const [err,seterr] = useState(false);

     useEffect(()=>{

        GetData(page,10,setloading,setData,seterr,setres);

        setparam({page:page});

     },[page]);

     if (loading) {

        return <h1>Loading...........</h1>

     }

     if (err) {

        return <h1>Something Went Wrong, Check Your internet Connection</h1>

     }

    

    console.log(data,"from products")

    return <>
       
       <h1>Welcome to Products page : {page}</h1>

       <input type="text" placeholder="Search Product" onInput={(e) => {SearchData(e.target.value,setres,setData)}} />

      { !res ? <h1>No result found</h1> : data.map((el) => {

            return <ProductCard key = {el?.id} { ...el }/>

      }) }

       <div className="paginate">

           <Paginate setPage = {setPage} page = {page} />

       </div>
    
    
    
    </>


}



export default Products