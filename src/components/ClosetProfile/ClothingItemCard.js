import React from "react";
import ClosetManager from "../../modules/ClosetManager";

const ClothingItemCard = props => {
  const userNow = JSON.parse(sessionStorage.getItem("userCredentials"));
  const handleClick = () => {
    props.clothingItem.isTraded = !props.clothingItem.isTraded;
    props.clothingItem.user = undefined;
    ClosetManager.update(props.clothingItem).then(props.getClothingItem);
  };
  const tradedClothing = () => {
    if (props.clothingItem.userId === userNow) {
      return (
        <div>
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
      );
    } else {
      return (
        <div>
          {props.clothingItem.isTraded ? (
            <button type="button" id="clothingItem" onClick={handleClick}>
              {" "}
              Return{" "}
            </button>
          ) : (
            <button type="button" id="clothingItem" onClick={handleClick}>
              {" "}
              TradeYa!{" "}
            </button>
          )}
        </div>
      );
    }
  };

  return (
    <div className="closetCard">
      <div className="closetCard__content">
        <img src={props.clothingItem.clothingPic} />
        <h3>
          {" "}
          <span className="closetCard__itemdescription">
            {props.clothingItem.itemDescription}{" "}
          </span>
        </h3>
        <p> size: {props.clothingItem.size} </p>
        {tradedClothing()}
      </div>
    </div>
  );
};

export default ClothingItemCard;
