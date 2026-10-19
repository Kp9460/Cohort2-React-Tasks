import React from 'react'
import { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Footer = () => {

    const [theme, setTheme] = useContext(ThemeDataContext)

  return (
    <div className='h-12 w-full bg-red-600 absolute bottom-0 flex items-center justify-between'>
        <h1>Footer</h1>
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

export default Footer