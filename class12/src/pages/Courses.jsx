import React from 'react'
import { Outlet , Link } from 'react-router-dom'

const Courses = () => {
  return (
    <div className='Courses'>
        <h1>Courses Page</h1>

        <nav className='link'>
            <Link to='/Courses/Kodr' >Kodr</Link>{" | "}
            <Link to='/Courses/Kodex' >Kodex</Link>
        </nav>

        <Outlet />
    </div>
  )
}

export default Courses