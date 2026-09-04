import { useState } from "react"
import ProductsListing from "./components/ProductsListing"
import useFetchProducts from "./useFetchProducts"
import ProductCart from "./components/ProductCart"

const url="https://dummyjson.com/products"
function App() {

  const {products}=useFetchProducts(url)
    const [cartItems,setCartItems]=useState([])

    const handleAddToCart=(product)=>{

        setCartItems([...cartItems,{name:product.title,id:product.id,price:product.price}])

    }

    const handleDelete=(id)=>{

        const newArr=cartItems.filter((_,i)=>i!==id)
        setCartItems(newArr)

    }

     const total=cartItems.reduce((acc,item)=>acc+item.price,0)




  return (
    <div style={{height:"100vh",width:"100vw",backgroundColor:"gray"}}>
    <h1>E-cart2026</h1>
    <ProductsListing  handleAddToCart={handleAddToCart} products={products} />
    

<ProductCart cartItems={cartItems} handleDelete={handleDelete} total={total}/>

    </div>
      
  )
}

export default App
