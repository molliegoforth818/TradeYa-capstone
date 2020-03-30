import React from "react";

const GroupClosetMemberCard = props => {
  return fetch(
    <div className="groupClosetMemberCard">
      <div className="groupClosetMemberCard__content">
        <h3>{props.groupCloset.groupClosetName}</h3>
        <p>{props.groupClosetMember.userId}</p>
      </div>
    </div>
  );
};
export default GroupClosetMemberCard;
