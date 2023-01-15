import React from "react";
import ProductItem from "./ProductItem";




// create Product component which contains the list of ProductItem component
const ProductList = ({products=[]}) => {

  console.log(products,"from ProductList");


  return <div data-testid="products-container">
    
    {products.map((el) => <ProductItem key = {el.id} {...el}/>)}
    
    </div>;
};

// export
export default ProductList;
