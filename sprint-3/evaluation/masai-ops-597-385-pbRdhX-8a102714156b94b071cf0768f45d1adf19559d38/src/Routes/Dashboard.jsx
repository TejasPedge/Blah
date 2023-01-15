import Loader from "../Components/Loader";
import { useState , useEffect} from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import ProductList from "../Components/ProductList";
import Pagination from "../Components/Pagination";
import { useSearchParams } from "react-router-dom";

function Dashboard() {

  const [data, setData] = useState({});

  const [orderby,setorderby] = useState("asc");

  const [loading,setLoading] = useState(true);

  const [params,setParams] = useSearchParams();

  let x = params.get("page");

  console.log(x);

  if (!x) {

    x = 1;

  }else {

       x = Number(x);

  }


  const [page,setPage] = useState(x);
  
  console.log(page);

  const {authState,logoutUser} = useContext(AuthContext);

  // console.log(token)

  ///////Pagination Button///////

 const onChange = (val) => {
 
  setPage(page + val);

  }






  const GetData = async (page,orderby) => {

    try {
      
      const url = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=10&order=${orderby}&sort=price`;

      const a = await fetch(url);

      console.log("from dashboard", a);

      if (a.ok){

          const data = await a.json();

          setData(data);

          setLoading(false);

          console.log(data);

      }

    } catch (error) {

      console.log("⚠️⚠️",err);

      setLoading(false);
      
    }
  

  }


  useEffect(() => {

    GetData(page,orderby);

    setParams({page, limit : 10, order : orderby, sort : "price"})

  },[page,orderby]);

  




  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick = {() => logoutUser() }>Logout</button>
        <p>
          Token:
          <b data-testid="user-token">Qw12la31afa13e1ds</b>
        </p>
      </div>
      <br />
      <div data-testid ="sort-container">
      <button data-testid="low-to-high" disabled = {orderby == "asc"}  onClick = {() => setorderby("asc")}>Sort low to high</button>
      <button data-testid="high-to-low" disabled = {orderby == "desc"}  onClick = {() => setorderby("desc")}>Sort high to low</button>
      </div>
      <br />
      <br />
      {/* add Pagination component  */}
 
      <div data-testid="pagination-container">

              <Pagination  current = {page} onChange = {onChange} totalPage = {data.totalPages}/>


      </div>



      <div style={{ display: "flex", justifyContent: "center" }}>
        
        
        {loading ? <Loader /> : null}


        {/* Product Listing, remember to show loading indicator when API is loading */}

         <ProductList products = {data.data}/>


      </div>
   
    </div>
  );
}

export default Dashboard;
