import React, { useContext } from "react";
import { ProductContext } from "../Context/ProductsContext";
import Breadcrum from "../Breadcrum/Breadcrum";
import ProductDisplay from "../ProductDisplay/ProductDisplay";
import { useParams } from "react-router-dom";

const Product = () => {
  const { all_product } = useContext(ProductContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  
  return (
    <div>
        <Breadcrum product={product}/>
        <ProductDisplay product ={product} />
    </div>
  )
};

export default Product;
