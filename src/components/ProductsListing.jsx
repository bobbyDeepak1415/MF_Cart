import React, { useState } from 'react'
import useFetchProducts from '../useFetchProducts'


const url="https://dummyjson.com/products"

const ProductsListing = () => {

    const {products}=useFetchProducts(url)
    const [cartItems,setCartItems]=useState([])



    const addToCart=(product)=>{
setCartItems([...cartItems,{name:product.title,price:product.price,id:product.id}])
    }

    const handleDeleteItem=(index)=>{

        const newArr=cartItems.filter((_,i)=>i!==index)

        setCartItems(newArr)

    }

    const total=cartItems.reduce((acc,item)=>acc+item.price,0)
    
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
                {cartItems.map((item,index)=>{
                    return <li key={item.id}>{item.name}
                    <button onClick={()=>handleDeleteItem(index)}>Remove</button>
                    </li>
                })}
            </ul>

        </div>

        <p>Total:{total}</p>
    </div>
  )
}

export default ProductsListing
