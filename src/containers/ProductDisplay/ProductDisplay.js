import React from "react";
import "./ProductDisplay.css";
// import star_icon from "../../assets/star_icon.png";
// import star_dull_icon from "../../assets/star_dull_icon.png";

const ProductDisplay = (props) => {
  const { product } = props;
  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={product.image} onClick={window.scrollTo(0,0)} />
              </div>
              <div className="column rp">
                <h1>{product.name}</h1>
                <h2>
                  <a className="ui teal tag label">${product.new_price}</a>
                </h2>
                <h3 className="ui brown block header">{product.category}</h3>
                <p>{product.description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDisplay;




// <div className='productdisplay'>
//   <div className="productdisplay-left">
//     <div className="productdisplay-img-list">
//       <img src={product.image} alt="1" />
//       <img src={product.image} alt="2" />
//       <img src={product.image} alt="3" />
//       <img src={product.image} alt="4" />
//     </div>
//     <div className="productdisplay img">
//     <img className='productdisplay-main-img' src={product.image} alt="2" />

//     </div>
//   </div>
//   <div className="productdisplay-right">
//     <img src={star_icon} alt="" />
//     <img src={star_icon} alt="" />
//     <img src={star_icon} alt="" />
//     <img src={star_icon} alt="" />
//     <img src={star_dull_icon} alt="" />
//   </div>
// </div>
