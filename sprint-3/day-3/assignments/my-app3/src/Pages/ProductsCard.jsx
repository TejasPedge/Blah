



const ProductCard = ({title,url,id}) => {

    return <div className="card">
         
                 <img src={url} alt="" className="img"/>

                 <p>{id}</p>

                 <p>{title}</p>

    </div>
    

}


export default ProductCard