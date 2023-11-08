import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productsActions";

const ProductListing = () => {
  const products = useSelector((state) => state);

  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    // console.log(response.data);
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("products:", products);

  return (
    <div>
      <h1 className="all-categ-title">Top Rated Products Across Categories</h1>
      <hr className="all-categ-hr" />

      <div className="ui grid container">
        <ProductComponent />
      </div>
    </div>
  );
};

export default ProductListing;
