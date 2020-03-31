import React, { useEffect, useState } from "react";
import UserCard from "../users/UserCard";
import GroupClosetManager from "../../modules/GroupClosetManager";

const GroupClosetMemberList = props => {
  const [groupClosetMember, setGroupClosetMember] = useState([]);
  //   const userNow = JSON.parse(sessionStorage.getItem("userCredentials"));
  const groupClosetId = parseInt(props.match.params.groupClosetId);

  const getAllGroupClosetMember = () => {
    return GroupClosetManager.getAllGroupClosetMembers().then(
      groupClosetMemberFromAPI => {                                       //getting the groupClosetId on the closetMember table to show closet members
        const userGroupClosetMember = groupClosetMemberFromAPI.filter(
          groupClosetMember => groupClosetMember.groupClosetId === groupClosetId
        );
        setGroupClosetMember(userGroupClosetMember);
      }
    );
  };

  useEffect(() => {
    getAllGroupClosetMember();
  }, []);
  return (
    <React.Fragment>
      <div className="container-closetCards">
        {groupClosetMember.map(groupClosetMember => (    //returning the username and profpic in the closet members
          <UserCard
            user={groupClosetMember.user}
            key={groupClosetMember.id}
            {...props}
          />
        ))}
      </div>
    </React.Fragment>
  );
};
export default GroupClosetMemberList;
