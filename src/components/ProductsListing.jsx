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
    </div>
  )
}

export default ProductsListing
