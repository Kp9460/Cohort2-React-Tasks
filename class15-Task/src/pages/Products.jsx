import React, { useContext } from "react";
import { ProductDataContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

const Products = () => {

   const productData = useContext(ProductDataContext)


   let renderData = 'Loading...'

   if(productData.length > 0){
    renderData = productData.map((elem, idx) => {
          return (
            <Link
              to={`/products/${elem.id}`}
              key={idx}
              className="bg-[#333333] underline text-blue-500 h-68 w-59 rounded flex justify-center"
            >
              <div className="flex flex-wrap p-2">
                <img
                  className="h-50 w-60 object-contain object-top p-1"
                  src={elem.image}
                  alt=""
                />
                <h2 className="text-xs text-center font-bold">{elem.title}</h2>
              </div>
            </Link>
          );
        })
   }


  return (
      <div className="flex flex-wrap h-full w-full p-3 gap-8 bg-[#052d32a0]">
        {renderData}
      </div>
  );
};

export default Products;