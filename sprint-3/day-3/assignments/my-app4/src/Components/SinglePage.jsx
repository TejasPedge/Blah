import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";




const SinglePage = () => {

    const {product_id} = useParams();

    const [data,setData] = useState({});

    const [loading,setLoading] = useState(true);

    const [err,seterr] =  useState(false);

    const [res, setRes] = useState(true);

    
    const getData = async () => {

        try {
         const   url = `http://localhost:8000/products/${product_id}`;

            let data = await fetch(url);

            console.log(data);

            if (!data.ok) {

               setRes(false);

            }

            let x = await data.json();

            setLoading(false);

            setData(x);
            console.log(x);

        }

        catch (err) {

            console.log(err);

                    seterr(true);

                    setLoading(false);

        }

    }

    useEffect(() => {


        getData();


    },[]);


    if (loading) {

                return <h1>Loading----------------</h1>

    }

    if (!res) {

             return <h1>No Results Found</h1>

    }


    if(err) {

              return <h1> Check your Internet Connection </h1>

    }
    
    



   return <div>
    
                <img src={data.url} alt={data.name} />
                
                <h3>{data.name}</h3>

                <p>id : {data.id}</p>

                <p>{data.description}</p>

                <button onClick = {() => alert("Item added to Cart")}>ADD to Cart</button>

   </div>


}



export default SinglePage

