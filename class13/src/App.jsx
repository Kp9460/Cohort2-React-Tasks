import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {

  const [theme, setTheme] = useState('Light')

  const changeTheme = (newTheme)=> {
    console.log(newTheme);
    setTheme(newTheme)
  }

  return (
    <div>
      <h1>Theme is {theme}</h1>
      <Navbar changetheme={changeTheme} />
    </div>
  )
}

export default App