import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'

const Sections = () => {
  return (
    <div className='h-100 flex justify-between p-5 bg-blue-300'>
        <Section1 />
        <Section2 />
    </div>
  )
}

export default Sections