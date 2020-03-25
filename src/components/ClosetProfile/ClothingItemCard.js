import React from "./node_modules/react";
import ClosetManager from "../../modules/ClosetManager";

const ClothingItemCard = props => {
const handleFieldChange =() => {
ClosetManager.update(props.clothingItem)
.then(()=> props.getAllClothingItemsByUser())
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
        <button
          type="button"
          required
          className="forms-control"
          id="clothingItem"
          value={false}
          onChange={handleFieldChange}
        />
        <label htmlFor="isTraded">TradeYa!</label>
      </div>
    </div>
  );
};

export default ClothingItemCard;
