import React, { useContext } from 'react'
import { UserDataContext } from '../context/UserContext'


const AllSections = () => {

    const data = useContext(UserDataContext)

    console.log(data[2].name);
    

  return (
    <div className='bg-[#989898] h-120'>
        <h1>AllSections</h1>
        {data[2].id}
        <h2>{data[2].name}</h2>
        {data[2].age}
        {data[2].city}
        {data[2].role}
    </div>
  )
}

export default AllSections