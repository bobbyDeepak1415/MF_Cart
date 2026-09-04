
import { useState } from "react"
import useFetchProducts from "../useFetchProducts"

const url="https://dummyjson.com/products"


const ProductsListing = () => {

    const {products}=useFetchProducts(url)
    const [cartItems,setCartItems]=useState([])


    const handleAddToCart=(product)=>{

        setCartItems([...cartItems,{name:product.title,id:product.id,price:product.price}])

    }

  return (
    <div style={{height:"100vh",width:"100vw",backgroundColor:"gray"}}>
      <h2>Products List :</h2>
<ol>
    {products.map((product)=>{
        return <li key={product.id}>{product.title}
        <span style={{margin:"20px",color:"green"}}>{product.price}</span>
        <button onClick={()=>handleAddToCart(product)}>Add To Cart</button>
        </li>
    })}
</ol>
      
      <div>
        <h3>Your Cart Here</h3>
        {cartItems}
      </div>

    </div>
  )
}

export default ProductsListing
