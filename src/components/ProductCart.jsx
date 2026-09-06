import React from 'react'

const ProductCart = (props) => {
  return (
    <div>
       <h3>Your Cart here:</h3>
            <ul>

            {props.cartItems.map((item,index)=>{
              return <li key={index}>{item.name}
              <span style={{margin:"15px",color:"green"}}> {item.price}

              </span>
              <button onClick={()=>props.handleDelete(index)}>Remove</button>
              </li>
            })}
            </ul>
            <p>Total:{props.total}</p>
      
    </div>
  )
}

export default ProductCart
