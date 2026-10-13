import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-8">
      
      <div className="text-5xl font-bold underline "> Product Page </div>

      <div className="text-2xl font-semibold flex gap-8">
        <Link className="text-2xl" to="/Product/Men"> Men's Product </Link>
        <Link className="text-2xl" to="/Product/Women"> Women's Product </Link>
      </div>

    </div>
  );
};

export default Product;
