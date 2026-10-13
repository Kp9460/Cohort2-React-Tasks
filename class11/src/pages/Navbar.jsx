import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-pink-600 px-7 py-5 mb-4 ">
      <h2  className="text-2xl font-bold">NavBar</h2>
      <div className="flex gap-5">
        <Link  className="text-xl" to='/Home' >Home</Link>
        <Link  className="text-xl" to='/About' >About</Link>
        <Link  className="text-xl" to='/Product' >Product</Link>
      </div>
    </div>
  );
};

export default Navbar;
