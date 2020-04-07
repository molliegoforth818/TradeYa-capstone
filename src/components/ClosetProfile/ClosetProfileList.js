import ClosetProfileManager from "../../modules/ClosetProfileManager";
import React, { useState, useEffect } from "react";
import "./ClosetProfileList.css"
import ClosetProfileCard from "./ClosetProfileCard"

const ClosetProfileList = props => {
  const userNow = JSON.parse(sessionStorage.getItem("userCredentials"));
  const [users, setUsers] = useState([]);

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
     <div className="closet-profile-list">
{users.map(user => (
  <ClosetProfileCard
key={user.id}
user={user}
getUser={getUser}
{...props}
/>
))}
     </div>
    </React.Fragment>
  );
};
export default ClosetProfileList;
