import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

    const navigate = useNavigate()

  return (
    <div className='footer'>
        <h1>FOOTER</h1>
        <button onClick={()=> {
            navigate('/Courses')
        }}>
            Explore Courses
        </button>
    </div>
  )
}

export default Footer