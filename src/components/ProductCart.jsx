import React from 'react'

const ProductCart = ({cartItems,handleDelete,total}) => {
  return (
     <div>
        <h3>Your Cart Here</h3>
        <ul>

        {cartItems.map((item,index)=>{

            return <li key={index}>{item.name} 
            <span style={{margin:"20px"}}>{item.price}</span>
            <button onClick={()=>handleDelete(index)}>Remove</button>
            </li>
        }
        )}
        </ul>
        <p>Cart Total:{total}</p>
        </div>
  )
}

export default ProductCart
