import React from "react";

const ClothingItemCard = props => {
  return (
    <div className="closetCard">
      <div className="closetCard__content">
        <h3>
          Item Description:{" "}
          <span className="closetCard__itemdescription">
            {props.clothingItem.itemDescription}{" "}
          </span>
        </h3>
        <p> Size: {props.clothingItem.size} </p>
        <button
          type="button"
          onClick={() =>
            props.history.push(`/${props.clothingItem.id}/editclothingitem`)
          }
        >
          Edit Item
        </button>
        <button
          type="button"
          onClick={() => props.deleteClothingItem(props.clothingItem.id)}
        >
          Delete Item
        </button>
      </div>
    </div>
  );
};
export default ClothingItemCard;
