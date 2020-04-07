import React from "react";
import "./UserCard.css"

const UserCard = props => {

  return (
    <>
    <div className="userCard">
      <div className="userCard__content">
      
        <h3>
          {""}
          <span
            className="userCard__username"
            type="button"
            onClick={() => props.history.push(`/closet/${props.user.id}`)}
          >
            <img className="profile-pic" src={props.user.profilePic} />
            {props.user.username}{" "}
          </span>
        </h3>
      </div>
    </div>
    </>
  );
};
export default UserCard;
