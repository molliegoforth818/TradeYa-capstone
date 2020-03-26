import React from "react";

const ClosetProfileCard = props => {
  return (
    <div className="closetprofileCard">
      <div className="closetprofilecard__content">
        <h3>
          username:{" "}
          <span className="closetprofilecard__username">
            {props.user.username}{" "}
          </span>
        </h3>
        <p> location: {props.user.location} </p>
        <p>personal style description:{props.user.personalStyleDescription}</p>
        <p>profile picture:{props.user.profilePic}</p>
        <button
          type="button"
          onClick={() =>
            props.history.push(`/${props.user.id}/edituserprofile`)
          }
        >
          Edit Item
        </button>
      </div>
    </div>
  );
};

export default ClosetProfileCard;
