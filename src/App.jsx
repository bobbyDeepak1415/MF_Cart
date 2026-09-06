
import { useState } from 'react'
import useFetchProducts from './useFetchProducts'
import ProductsListing from './components/ProductsListing'
import ProductCart from './components/ProductCart'

const url="https://dummyjson.com/products"
function App() {

  const {products}=useFetchProducts(url)

  const [cartItems,setCartItems]=useState([])

  const handleDelete=(index)=>{
const newArr=cartItems.filter((_,i)=>i!==index)
    setCartItems(newArr)

  }

const total=cartItems.reduce((acc,item)=>acc+item.price,0)

  const handleAddItem=(product)=>{
    const newArr=[...cartItems,{name:product.title,id:product.id,price:product.price}]
    setCartItems(newArr)
  }

      return(
        <div style={{height:"100vh",width:"100vh",backgroundColor:"gray"}}>
          <h1>E-Cart</h1>
          <div>
            
          <ProductsListing products={products} handleAddItem={handleAddItem} />
          <div>
           
            <ProductCart cartItems={cartItems} handleDelete={handleDelete} total={total}/>
          </div>

        </div>
        </div>
      )
  
}


export default App
