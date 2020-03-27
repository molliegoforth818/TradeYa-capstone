import React from "react";
// import GroupClosetManager from "../../modules/GroupClosetManager";

const GroupClosetCard = props => {

  return (
    <div className="groupClosetCard">
      <div className="groupClosetCard__content">
        <h3>
         {props.groupCloset.groupClosetName}
        </h3>
        <button
          type="button"
          onClick={() =>
            props.history.push(`/${props.groupCloset.groupClosetName}/mygroupcloset`)
          }
        >
          View Closet
        </button>
    
      </div>
    </div>
  );
};
export default GroupClosetCard;
