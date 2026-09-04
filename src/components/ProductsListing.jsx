
import { useState } from "react"
import useFetchProducts from "../useFetchProducts"
import ProductCart from "./ProductCart"




const ProductsListing = ({products,handleAddToCart}) => {

    
return (
    <div >
      <h2>Products List :</h2>
<ol>
    {products.map((product)=>{
        return <li key={product.id}>{product.title}
        <span style={{margin:"20px",color:"green"}}>{product.price}</span>
        <button onClick={()=>handleAddToCart(product)}>Add To Cart</button>
        </li>
    })}
</ol>
      
     
      

    </div>
  )
}

export default ProductsListing
