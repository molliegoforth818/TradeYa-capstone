import React, { useEffect, useState } from "react";
import GroupClosetMemberCard from "./GroupClosetMemberCard";
import GroupClosetManager from "../../modules/GroupClosetManager";



const GroupClosetMemberList = props => {
  const [groupClosetMember, setGroupClosetMember] = useState([]);
  const userNow = JSON.parse(sessionStorage.getItem("userCredentials"));

  const getAllGroupClosetMember = () => {
    return GroupClosetManager.getAllGroupClosetMembers().then(groupClosetMemberFromAPI => {
        const userGroupClosetMember = groupClosetMemberFromAPI.filter(
            groupClosetMember => groupClosetMember.userId === userNow
        );
setGroupClosetMember(userGroupClosetMember)
})};
useEffect(() => {
    getAllGroupClosetMember();
}, []);
  return (
    <React.Fragment>      
      <div className="container-closetCards">
        {groupClosetMember.map(groupClosetMember => (
          <GroupClosetMemberCard
            key={groupClosetMember.id}
            groupClosetMember={groupClosetMember}
            getAllGroupClosetMember={getAllGroupClosetMember}
            {...props}
          />
        ))}
      </div>
    </React.Fragment>
  );
};
export default GroupClosetMemberList;