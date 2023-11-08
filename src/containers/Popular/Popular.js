import React from "react";
import "./Popular.css";
import data_product from "../../assets/data";
import Item from "../Item/Item";

const Popular = () => {
  return (
    <div>
      <div className="popular">
        <h1>Popular in Women</h1>
        <hr />
      </div>

      <div className="ui grid container">
        {data_product.map((item, i) => {
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
        })}
      </div>
    </div>
  );
};

export default Popular;





// This code is used for the css written by me with different clsname
// but Semantic code css used in the above code.

// <div className="popular">
//   <h1>POPULAR IN WOMEN</h1>
//   <hr />
//   <div className="popular-item">
//     {data_product.map((item, i) => {
//       return (
//         <Item
//           key={i}
//           id={item.id}
//           name={item.name}
//           image={item.image}
//           new_price={item.new_price}
//           old_price={item.old_price}
//         />
//       );
//     })}
//   </div>
// </div>
