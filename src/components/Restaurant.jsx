import React from "react";
import "./Restaurant.css";

const Restaurant = (props) => {
  return (
    <div className="Restaurant">
      <img src={props.img} alt="restaurant logo" width={250} height={250} />
      <p className="name-font">{props.name}</p>
      <p>{props.cuisine}</p>
      <button>View Menu</button>
    </div>
  );
};
export default Restaurant;
