import React, { useEffect, useState } from "react";
import GroupClosetCard from "./GroupClosetCard";
import GroupClosetManager from "../../modules/GroupClosetManager";



const GroupClosetList = props => {
  const [groupCloset, setGroupCloset] = useState([]);              
  const userNow = JSON.parse(sessionStorage.getItem("userCredentials"));

  const getGroupCloset = () => {
    return GroupClosetManager.getAllGroupClosetMembers().then(groupClosetsFromAPI => {
        const userGroupCloset = groupClosetsFromAPI.filter(                               //geting the groupClosets from database that match the userId to show all the closets you are apart of
            groupClosetMember => groupClosetMember.userId === userNow
        )
    return userGroupCloset}
        )
        .then((userGroupCloset) => setGroupCloset(userGroupCloset))
};
useEffect(() => {
    getGroupCloset();
}, []);
  return (
    <React.Fragment>      
      <div className="container-closetCards">
        {groupCloset.map(closet => (
          <GroupClosetCard
            key={closet.id}                           //displaying groupClosets by userID
            groupCloset={closet.groupCloset}
            getGroupCloset={getGroupCloset}
            {...props}
          />
        ))}
      </div>
    </React.Fragment>
  );
};
export default GroupClosetList;
