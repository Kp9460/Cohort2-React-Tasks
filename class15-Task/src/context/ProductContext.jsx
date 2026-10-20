import React, { createContext, useEffect, useState } from "react";
import { getAllProductData } from "../Api/productApi";

export const ProductDataContext = createContext()

const ProductContext = (props) => {

  const [productData, setProductData] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null)

  let setData = async ()=> {
    setProductData(await getAllProductData() )
  }

  useEffect(() => {
    setData();
  }, []);

  return <div>
            <ProductDataContext.Provider value={productData}>
                {props.children}
            </ProductDataContext.Provider>
         </div>;
};

export default ProductContext;
