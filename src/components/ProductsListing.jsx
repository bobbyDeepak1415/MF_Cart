import React, { useState } from 'react'
import useFetchProducts from '../useFetchProducts'


const url="https://dummyjson.com/products"

const ProductsListing = () => {

    const {products}=useFetchProducts(url)

  return (
    <div>
        <h2>

      ProductsList
        </h2>
        {products.map((product)=>{
            return <li key={product.id}>{product.title}</li>
        })}
    </div>
  )
}

export default ProductsListing
