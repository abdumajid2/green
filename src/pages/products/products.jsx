import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Products = () => {
    let api = 'http://localhost:3003/data'
    let [data, setData] = useState([])
    async function getProducts() {
        try {
            let res = await axios.get(api)
            setData(res.data)
        } catch (error) {
            console.error(error);
            
        }
    }
    useEffect(() => {
        getProducts()
    }, [])
  return (
    <div>
        <section className='grid grid-cols-4 gap-9'>
            {data.map((e)=>{
                return (
                    <div key={e.id} className='w-66 border-1 rounded-lg shadow border-gray-300 p-3'>
                        <img src={e.image} alt="" />
                        <h1>{e.name}</h1>
                        <p>{e.price}</p>
                    </div>
                )
            })}
        </section>
    </div>
  )
}

export default Products