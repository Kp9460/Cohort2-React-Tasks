import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    
    const navigate = useNavigate()

    return (
    <div className='flex items-center justify-center flex-col'>
        <h1 className='text-5xl mt-8' >This is Home Page!!!</h1>
        <button className='border px-3 py-2 bg-emerald-400 rounded absolute top-35' onClick={()=> {
            navigate('/Products')
        }}>Explore All Products</button>
    </div>
  )
}

export default Home