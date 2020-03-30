import React from "react";

const UserCard = props => {

  return (
    <div className="closetCard">
      <div className="closetCard__content">
    
        <h3>
          {""}
          <span
            className="userCard__username"
            type="button"
            onClick={() => props.history.push(`/closet/${props.user.id}`)}
          >
            <img src={props.user.profilePic} />
            {props.user.username}{" "}
          </span>
        </h3>
      </div>
    </div>
  );
};
export default UserCard;
