import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = (props) => {
  
  return (
    <div className="four wide column" >
      <Link to={`/product/${props.id}`} >
      <div className="ui link cards" >
        <div className="card">
          <div className="image" >
            <img  src={props.image} alt=""  />
          </div>
          <div className="content">
            <div className="header">{props.name}</div>
            <div className="meta price">$ {props.new_price}</div>
            <div className="meta">$ {props.old_price} Original price</div>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default Item;





// This code is used for the css written by me with different clsname
// but Semantic code css used in the above code.

// <div className='item'>
//     <img src={props.image} alt="props_img" />
//     <p>{props.name}</p>
//     <div className="item-prices">
//         <div className="item-price-new">${props.new_price}</div>
//         <div className="item-price-old">${props.old_price}</div>
//     </div>
// </div>
