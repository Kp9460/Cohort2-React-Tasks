import React, {useState , useEffect} from 'react'
import axios from "axios"
import User from "./components/User.jsx";

const App = () => {

  const [allUsersData, setAllUsersData] = useState([])

  const getData = async ()=> {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(response.data);
    
    setAllUsersData(response.data)
  }

  useEffect(function(){
    getData()
  },[])

  return (
    <div>

      <div className='all-cards'>
        {allUsersData.map((elem, idx)=> {

        return <div key={idx}>
            <User elem={elem} />
        </div>
      })}
      </div>
    </div>
  )
}

export default App