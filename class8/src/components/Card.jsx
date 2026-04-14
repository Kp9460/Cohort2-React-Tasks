import React from 'react'

const Card = (props) => {
  return (
    <div className="w-[95vw] lg:w-[23vw] py-8 px-8 flex items-center justify-center flex-col text-center bg-white text-black rounded-xl">
          <img
            className="h-22 w-22 rounded-full object-center object-cover"
            src={props.elem.userImage}
            alt=""
          />
          <h1 className="mt-2 font-bold text-2xl">{props.elem.userName}</h1>
          <h5 className="mt-2 mb-2 font-semibold text-xl text-blue-500">
            {props.elem.userRole}
          </h5>
          <p className="text-sm font-medium leading-tight">
            {props.elem.userDesc}
          </p>
          <button onClick={()=> {
            props.deleteHandler(props.idx)
          }} className="text-sb px-2 py-2 bg-red-600 rounded-md mt-6 active:scale-95">
            Remove
          </button>
        </div>
  )
}

export default Card