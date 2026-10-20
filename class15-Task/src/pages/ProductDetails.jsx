import { useContext } from "react";
import { ProductDataContext } from "../context/ProductContext";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const productData = useContext(ProductDataContext);
  
  const { productId } = useParams();

  let selectedProduct = '';

  if(productData.length > 0){
    selectedProduct = productData.find((elem) =>elem.id == productId)
  }


  console.log(selectedProduct);
  

  return (
      <div>
        <img className="w-60 h-60 object-contain" src={selectedProduct.image} alt="" />
        <h2>{selectedProduct.title}</h2>
        <h3>{selectedProduct.price}</h3>
      </div>
  );
};

export default ProductDetails;
