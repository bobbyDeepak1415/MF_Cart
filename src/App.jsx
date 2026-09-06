
import { useState } from 'react'
import useFetchProducts from './useFetchProducts'

const url="https://dummyjson.com/products"
function App() {

  const {products}=useFetchProducts(url)

  const [cartItems,setCartItems]=useState([])

  const handleDelete=(item)=>{
const newArr=cartItems.filter((_,i)=>i!==item.id)
    setCartItems(newArr)

  }


  const handleAddItem=(product)=>{
    const newArr=[...cartItems,{name:product.title,id:product.id,price:product.price}]
    setCartItems(newArr)
  }

      return(
        <div style={{height:"100vh",width:"100vh",backgroundColor:"gray"}}>
          <h1>E-Cart</h1>
          <div>
            <h2>Products List:</h2>

            <ol>
              {products.map((product)=>{
                return <li key={product.id}>{product.title}
                <span style={{margin:"20px",color:"green"}}> {product.price}</span>
                <button onClick={()=>handleAddItem(product)}>Add To Cart</button>
                </li>
              })}
             
            </ol>
          </div>
          <div>
            <h3>Your Cart here:</h3>
            <ul>

            {cartItems.map((item,index)=>{
              return <li key={index}>{item.name}
              <span style={{margin:"15px",color:"green"}}> {item.price}

              </span>
              <button onClick={()=>handleDelete(item)}>Remove</button>
              </li>
            })}
            </ul>
          </div>

        </div>
      )
  
}

export default App
