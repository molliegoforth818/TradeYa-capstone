import React from "react";
import ClosetManager from "../../modules/ClosetManager"


const ClothingItemCard = props => {
const handleFieldChange = () => {
  ClosetManager.delete(props.clothingItem)
    .then(() => props.getClothingItem())
}
  return (
    <div className="closetCard">
      <div className="closetCard__content">
        <h3>
          Item Description:{" "}
          <span className="closetCard__itemdescription">
            {props.clothingItem.itemDescription}{" "}
          </span>
        </h3>
        <p> Size: {props.clothingItem.sizeId} </p>
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
          onClick={handleFieldChange}
        >
          Delete Item
        </button>
      </div>
    </div>
  );
};
export default ClothingItemCard