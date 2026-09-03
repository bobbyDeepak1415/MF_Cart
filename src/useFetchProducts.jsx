import React, { useEffect, useState } from 'react'

const useFetchProducts = (url) => {

    const [products,setProducts]=useState([])
    

    useEffect(()=>{
        const fetchData=async()=>{
            try{

                const res=await fetch(url)
                const response=await res.json()
                set
            }catch(err){
                console.log("failed to fetch...",err)
            }
        }

        fetchData()

    },[url])

  return {products}
}

export default useFetchProducts
