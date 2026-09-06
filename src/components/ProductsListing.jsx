


const ProductsListing = ({products,handleAddItem}) => {

    
return (
    <div >
      <h2>Products Lists:</h2>

            <ol>
              {products.map((product)=>{
                return <li key={product.id}>{product.title}
                <span style={{margin:"20px",color:"green"}}> {product.price}</span>
                <button onClick={()=>handleAddItem(product)}>Add To Cart</button>
                </li>
              })}
             
            </ol>
        
    </div>
  )
}

export default ProductsListing
