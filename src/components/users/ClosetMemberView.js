import React, { useState, useEffect } from "react";
import ClosetProfileManager from "../../modules/ClosetProfileManager";
import ClothingItemCard from "../closetprofile/ClothingItemCard";
import ClosetProfileCard from "../closetprofile/ClosetProfileCard";

const ClosetMemberView = (props) => {
  const userNow = JSON.parse(sessionStorage.getItem("userCredentials"));

  const [closetMember, setClosetMember] = useState({ clothingItem: [] });

  const getUsers = () => {
    ClosetProfileManager.getUserProfile(props.match.params.userId).then(
      (usersFromAPI) => {
        setClosetMember(usersFromAPI);
      }
    );
  };
  useEffect(() => {
    getUsers();
  }, [closetMember]);
  const users = ()=>{
    if ()
  return (
      <>
        <div className="closetmemberview-cards">
          {closetMember.clothingItem.map((clothingItem) => (
            <ClothingItemCard
              key={clothingItem.id}
              clothingItem={clothingItem}
              {...props}
            />
          ))}
        </div>
    
      </>
  )
      return (
        <>
      <div className="closetProfile-list">
      {closetMember.users.map((user) => (
        <ClosetProfileCard key={user.id} user={user} />
      ))}
      </div>
      </>
      )
  }
  };
export default ClosetMemberView;
