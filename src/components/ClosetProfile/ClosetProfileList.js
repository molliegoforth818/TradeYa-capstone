import ClosetProfileManager from "../../modules/ClosetProfileManager";
import React, { useState, useEffect } from "react";
import "./ClosetProfileList.css"

const ClosetProfileList = props => {
  const userNow = JSON.parse(sessionStorage.getItem("userCredentials"));
  const [user, setUsers] = useState([]);

  const getUser = () => {
    return ClosetProfileManager.getUserProfile(userNow).then(user => {
      setUsers(user);
    });
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <React.Fragment>
      <div className="container-userprofileCards">
        <img className="profile-pic"src={user.profilePic} />
        <h1 className="user-name">{user.username}</h1>
        <p>{user.location}</p>
        <p>{user.personalStyleDescription}</p>
        <button
          type="button"
          onClick={() =>
            props.history.push(`closet/${user.id}/edituserprofile`)
          }
        >
          Edit Profile
        </button>
      </div>
    </React.Fragment>
  );
};
export default ClosetProfileList;
