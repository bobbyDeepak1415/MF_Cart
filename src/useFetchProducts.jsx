import React from 'react'

const useFetchProducts = (url) => {

    const [products,setProducts]=useState([])

    useEffect(()=>{
        const fetchData=async()=>{
            try{

                const res=await fetch(url)
                setProducts(res.json())
            }
        }

    },[url])

  return (
    <div>
      
    </div>
  )
}

export default useFetchProducts
