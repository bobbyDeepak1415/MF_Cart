import React, { useState } from 'react'
import useFetchProducts from '../useFetchProducts'


const url="https://dummyjson.com/products"

const ProductsListing = () => {

    const {products}=useFetchProducts(url)
    const [cartItems,setCartItems]=useState([])



    const addToCart=(product)=>{
setCartItems([...cartItems,{name:product.title,price:product.price}])
    }

    const handleDeleteItem=(id)=>{

        const newArr=cartItems.filter((_,i)=>i!==id)

        setCartItems(newArr)

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
                </span>
                <span style={{marginLeft:"10px",color:"blue"}}>{product.price}</span>
                <button onClick={()=>addToCart(product)} style={{marginLeft:"10px"}}>Add To cart</button>
                </li>
        })}
        </ol>

        <div>
            <h3>Your Cart:</h3>
            <ul>
                {cartItems.map((item)=>{
                    return <li key={item.id}>{item.name}
                    <button onClick={()=>handleDeleteItem(item.id)}>Remove</button>
                    </li>
                })}
            </ul>

        </div>
    </div>
  )
}

export default ProductsListing
