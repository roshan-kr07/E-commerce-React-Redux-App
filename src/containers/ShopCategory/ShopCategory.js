import React, { useContext } from "react";
import dropdown_icon from "../../assets/dropdown_icon.png";
import Item from "../Item/Item";
import { ProductContext } from "../Context/ProductsContext";
import './ShopCategory.css'

const ShopCategory = (props) => {
  const { all_product } = useContext(ProductContext);
  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span>out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="dropdown_icon" />
        </div>
      </div>
      {/* <div className="shopcategory-products"> */}
      <div className="ui grid container">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          }
          else{
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
