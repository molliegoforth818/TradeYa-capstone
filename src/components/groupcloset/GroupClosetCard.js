import React from "react";
// import GroupClosetManager from "../../modules/GroupClosetManager";

const GroupClosetCard = props => {

  return (
    <div className="groupClosetCard">
      <div className="groupClosetCard__content">
        <h3 type="button"
          onClick={() =>
            props.history.push(`/${props.groupCloset.groupClosetName}/closetmembers`)
          }>
         {props.groupCloset.groupClosetName}
        </h3>
      </div>
    </div>
  );
};
export default GroupClosetCard;
