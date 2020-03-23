import React from "react";
import ClosetManager from "../../modules/ClosetManager";
import Toggle from "react-toggle";

const ClothingItemCard = props => {
  const handleFieldChange = () => {
    ClosetManager.isTraded(props.clothingItem).then(() =>
      props.getClothingItem()
    );
  };
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
        <Toggle
          id="clothing-item-status"
          defaultChecked={props.clothingItem.isTraded}
          onChange={handleFieldChange}
        ></Toggle>
          <label htmlFor="clothing-item-status">TradeYa</label>
        
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
