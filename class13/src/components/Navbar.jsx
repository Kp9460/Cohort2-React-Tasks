import React, { useState } from 'react'

const Navbar = (props) => {

    const [newTheme, setNewTheme] = useState('')

  return (
    <div className='nav'>
        <form onSubmit={(e)=> {
            e.preventDefault()
            props.changetheme(newTheme)
        }}>
            <input 
                type="text" 
                placeholder='EnterTheme'
                value={newTheme}
                onChange={(e)=>{
                    setNewTheme(e.target.value)
                }}/>
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default Navbar