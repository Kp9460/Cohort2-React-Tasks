import React, {useState} from 'react'

const App = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [allUsers, setAllUsers] = useState([])

  const submitHandler = (e)=> {
    e.preventDefault()

    setAllUsers([...allUsers, {name,email}])
      
    setName('')
    setEmail('')
  }


  return (
    <div>
      <form onSubmit={(e)=> {
        submitHandler(e)
      }}>
        <input type="text" placeholder='Enter Name' value={name} required onChange={(e)=> {
          setName(e.target.value) 
        }}/>
        <input type="text" placeholder='Enter email' value={email} required onChange={(e)=> {
          setEmail(e.target.value) 
        }}/>
        <button>submit</button>
      </form>

      {allUsers.map((elem,idx)=> {
        return <div key={idx}>
          <h4>{elem.name}</h4>
          <p>{elem.email}</p>
        </div>
      })}
    </div>
  )
}

export default App