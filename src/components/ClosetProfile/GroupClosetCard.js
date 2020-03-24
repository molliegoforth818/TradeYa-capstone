import React from "react";
// import GroupClosetManager from "../../modules/GroupClosetManager";

const GroupClosetCard = props => {

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
        <p>User: {props.clothingItem.userId}</p>
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
        {/* <input
          type="checkbox"
          required
          className="forms-control"
          id="clothingItem"
          value={false}
          onChange={() => props.isTraded(props.clothingItem)}
        /> */}
        <label htmlFor="isTraded">TradeYa!</label>
      </div>
    </div>
  );
};
export default GroupClosetCard;