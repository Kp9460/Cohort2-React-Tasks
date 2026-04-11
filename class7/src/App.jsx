import React, { useState } from "react";
import Card from "./components/Card.jsx";

const App = () => {
  const [userName, setUserName] = useState("");
  const [userImage, setUserImage] = useState("");
  const [userRole, setUserRole] = useState("");
  const [userDesc, setUserDesc] = useState("");

  const [allUsers, setAllUsers] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log('form submitted');

    const oldUsers = [...allUsers, { userName, userImage, userRole, userDesc }];
    console.log(oldUsers);

    setAllUsers(oldUsers);

    // console.log(userName)
    // console.log(userImage)
    // console.log(userRole)
    // console.log(userDesc)
    setUserDesc('')
    setUserImage('')
    setUserName('')
    setUserRole('')
  };

  const deleteHandler = (idx)=> {
    const copyUsers = [...allUsers]
    
    copyUsers.splice(idx,1)
    setAllUsers(copyUsers)
  }

  return (
    <div className="h-screen bg-black text-white">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-wrap px-5 py-3 justify-center"
      >
        <input
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          className="border-2 text-xl font-semibold px-5 py-3 rounded m-2 w-full lg:w-[48%]"
          type="text"
          placeholder="Enter Your Name"
        />

        <input
          value={userImage}
          onChange={(e) => {
            setUserImage(e.target.value);
          }}
          className="border-2 text-xl font-semibold px-5 py-3 rounded m-2 w-full lg:w-[48%]"
          type="text"
          placeholder="Image URL"
        />

        <input
          value={userRole}
          onChange={(e) => {
            setUserRole(e.target.value);
          }}
          className="border-2 text-xl font-semibold px-5 py-3 rounded m-2 w-full lg:w-[48%]"
          type="text"
          placeholder="Enter Role"
        />

        <input
          value={userDesc}
          onChange={(e) => {
            setUserDesc(e.target.value);
          }}
          className="border-2 text-xl font-semibold px-5 py-3 rounded m-2 w-full lg:w-[48%]"
          type="text"
          placeholder="Enter Description"
        />

        <button className="px-5 py-3 text-xl font-semibold active:scale-95 cursor-pointer bg-emerald-600 rounded m-2 w-[97%]">
          Create User
        </button>
      </form>

      <div className="flex flex-wrap px-4 py-8 gap-5">
        
          {allUsers.map(function(elem,idx){
            return <Card idx={idx} elem={elem} deleteHandler={deleteHandler}/>
          })}

      </div>
    </div>
  );
};

export default App;
