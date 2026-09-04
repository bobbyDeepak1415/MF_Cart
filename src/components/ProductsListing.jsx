
import useFetchProducts from "../useFetchProducts"

const url="https://dummyjson.com/products"


const ProductsListing = () => {

    const {products}=useFetchProducts(url)

  return (
    <div style={{height:"100vh",width:"100vw",backgroundColor:"gray"}}>
      <h2>Products List :</h2>
<ol>
    {products.map((product)=>{
        return <li>{product.title}
        <span style={{margin:"20px",color:"green"}}>{product.price}</span>
        </li>
    })}
</ol>
      {}

    </div>
  )
}

export default ProductsListing
