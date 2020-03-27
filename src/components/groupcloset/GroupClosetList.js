import React, { useEffect, useState } from "react";
import GroupClosetCard from "./GroupClosetCard";
import GroupClosetManager from "../../modules/GroupClosetManager";



const GroupClosetList = props => {
  const [groupCloset, setGroupCloset] = useState([]);
  const userNow = JSON.parse(sessionStorage.getItem("userCredentials"));

  const getGroupCloset = () => {
    return GroupClosetManager.getAllGroupClosets().then(groupClosetsFromAPI => {
        const userGroupCloset = groupClosetsFromAPI.filter(
            groupCloset => groupCloset.userId === userNow
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
        {groupCloset.map(groupCloset => (
          <GroupClosetCard
            key={groupCloset.id}
            groupCloset={groupCloset}
            getGroupCloset={getGroupCloset}
            {...props}
          />
        ))}
      </div>
    </React.Fragment>
  );
};
export default GroupClosetList;
