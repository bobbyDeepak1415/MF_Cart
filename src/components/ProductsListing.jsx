import React, { useState } from 'react'
import useFetchProducts from '../useFetchProducts'


const url="https://dummyjson.com/products"

const ProductsListing = () => {

    const {products}=useFetchProducts(url)
    const [cartItems,setCartItems]=useState([])

    const addToCart=(product)=>{
        const itemName=product.title
        setCartItems([...cartItems,itemName])

    }

  return (
    <div>
        <h2>

      ProductsList
        </h2>
        <ol>

        {products.map((product)=>{
            return <li key={product.id}>
                <span>

                {product.title}
                </span>
                <span><button onClick={()=>addToCart(product)} style={{marginLeft:"10px"}}>Add To cart</button></span>
                </li>
        })}
        </ol>

        <div>
            <h3>Your Cart:</h3>
            <ul>
                {cartItems.map((item,id)=>{
                    return <li key={id}>{item.title}</li>
                })}
            </ul>

        </div>
    </div>
  )
}

export default ProductsListing
