import React, { useState } from 'react'
import useFetchProducts from '../useFetchProducts'


const url="https://dummyjson.com/products"

const ProductsListing = () => {

    const {products}=useFetchProducts(url)
    const [cartItems,setCartItems]=useState([])



    const addToCart=(product)=>{
setCartItems([...cartItems,{name:product.title,price:product.price}])
    }

    
  return (
    <div style={{height:"100vh",width:"100vh",backgroundColor:"gray"}}>
        <h2>

      ProductsList
        </h2>
        <ol>

        {products.map((product)=>{
            return <li key={product.id}>
                <span>

                {product.title}
                <span style={{marginLeft:"10px",color:"blue"}}>{product.price}</span>
                </span>
                <span><button onClick={()=>addToCart(product)} style={{marginLeft:"10px"}}>Add To cart</button></span>
                </li>
        })}
        </ol>

        <div>
            <h3>Your Cart:</h3>
            <ul>
                {cartItems.map((item)=>{
                    return <li key={id}>{item.name}</li>
                })}
            </ul>

        </div>
    </div>
  )
}

export default ProductsListing
