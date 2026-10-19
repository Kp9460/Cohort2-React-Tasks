import React, { createContext } from 'react'

export const UserDataContext = createContext()

const UserContext = (props) => {

    const users = [
  { id: 1, name: "Kamlesh", age: 23, city: "Jaipur", role: "Developer" },
  { id: 2, name: "Rahul", age: 25, city: "Delhi", role: "Designer" },
  { id: 3, name: "Priya", age: 22, city: "Jaipur", role: "Developer" },
  { id: 4, name: "Amit", age: 24, city: "Mumbai", role: "Designer" },
  { id: 5, name: "Sneha", age: 23, city: "Delhi", role: "Developer" }
];

  return (
    <div>
        <UserDataContext.Provider value={users}>
            {props.children}
        </UserDataContext.Provider>
    </div>
  )
}

export default UserContext