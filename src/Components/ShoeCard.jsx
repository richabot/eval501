import React from "react";
import "../App.css"
const ShoeCard = ({item}) => {
  let shoeId = item.id;
  return (
    <div   style={{ border: "1px solid", padding: "1%", boxSizing: "border-box"   }}
    data-cy={`shoe-card-wrapper-${shoeId}`}>
      <div>
        <img data-cy="shoe-card-image" className="image1" src={item.image} alt="" />
      </div>
      <div>
        <div data-cy="shoe-name">{item.name}</div>
        <div data-cy="shoe-category">{item.category}</div>
      </div>
    </div>
  );
};

export default ShoeCard;
