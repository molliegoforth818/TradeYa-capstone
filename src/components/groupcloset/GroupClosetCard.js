import React from "react";
import "./GroupClosetCard.css"

const GroupClosetCard = props => {

  return (
    <div className="groupClosetCard">
      <div className="groupClosetCard__content">
        <h3 type="button"
          onClick={() =>
            props.history.push(`/closetmembers/${props.groupCloset.id}`)
          }>
        
        <p>{props.groupCloset.groupClosetName}</p>
        </h3>
      </div>
    </div>
  );
};
export default GroupClosetCard;
