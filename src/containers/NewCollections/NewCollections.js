import React from "react";
import "./NewCollections.css";
import new_collection from '../../assets/new_collections'
import Item from "../Item/Item";

const NewCollections = () => {
  return (
    <div id="latest-collection">
      <div className="latest-coll">
        <h1>Latest Collections</h1>
        <hr />
      </div>

      <div className="ui grid container">
        {new_collection.map((item, i) => {
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

export default NewCollections;
