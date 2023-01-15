import React from 'react'

export default function AllProducts() {

  const [data,setData] = React.useState([]);
  const [loading,setLoading] = React.useState(true);
  const [err,setErr] = React.useState(false);



  const GetData = async () => {
 
       const url = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`;

      try {
 
             let a = await fetch(url);

             console.log(a);

             let data = await a.json();

             console.log(data);

             setData(data.data);

             setLoading(false);

      
      } catch (error) {

        setErr(true);

        setLoading(false);
        
      }

  }


  React.useEffect(() => {

    GetData();

  },[]);
  
  

  if(loading) {

      return <h1>Loading..........</h1> 

  }

  if (err) {

       return <h1>Check Your Internet Connection</h1>

  }






  return (
    <div>
      <h2>All Products</h2>
      <div className = "products-wrapper">
          {/* Map the below div against product data */}
          { data.map((el) => {

                return <div key = {el.id} className = "cards">
                <h3 className = "name"> {el.title}</h3>
                <div className= "brand">{el.brand}</div>
                <div className = "price">{el.price}</div>
            </div>




          })  }
      </div>
    </div>
  )
}