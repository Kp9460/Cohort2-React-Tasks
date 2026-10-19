import React from 'react'
import { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'



const Navbar = () => {

    const [theme, setTheme] = useContext(ThemeDataContext)

  return (
    <div className='h-12 w-full bg-emerald-600 flex items-center justify-between px-5'>
        <h1>Navbar</h1>
        <h2>{theme}</h2>
        <button onClick={()=> {
            if(theme === 'Light'){
                setTheme('Dark')
            }else{
                setTheme('Light')
            }
        }}>change Theme</button>
    </div>
  )
}

export default Navbar