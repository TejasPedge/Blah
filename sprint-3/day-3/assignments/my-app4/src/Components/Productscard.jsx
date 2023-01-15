
import { Link } from "react-router-dom"


const ProductsCard = ({url,name,price,ratings,id}) => {
  
    //     "name": "Mouse",
    //     "url": "https://placeimg.com/324/329/people",
    //     "description": "The Nagasaki Lander is the trademarked name 
    //     "price": "968.00",
    //     "ratings": 23,
    //     "info": "565 Meghan Green",
    //     "id": "12"
   
    return <Link to = {`/products/${id}`}> <div className="card" >

              <img src={url} alt={name} /> <br />

              <h3>{name}</h3>

             <div className="info">

               <b>Price : {price}</b> 
               
               <b>Rating : {ratings}</b>

               </div>
              




    </div>

    </Link>


}


export default ProductsCard