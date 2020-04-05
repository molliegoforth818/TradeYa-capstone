import React, { useState,useEffect } from "react";
import ClosetProfileManager from "../../modules/ClosetProfileManager";
import ClothingItemCard from "../closetprofile/ClothingItemCard";

const ClosetMemberView = props => {
  const [closetMember, setClosetMember] = useState({clothingItem:[]});

  const getUsers = () => {
    ClosetProfileManager.getUserProfile(props.match.params.userId).then(usersFromAPI => {
      setClosetMember(usersFromAPI);
    });
  };
  useEffect(() => {
    getUsers();
  }, [closetMember]);

  return (
    <>
      <div className="closetmemberview-cards">
        {closetMember.clothingItem.map(clothingItem => (
          <ClothingItemCard
            key={clothingItem.id}
            clothingItem={clothingItem}
            {...props}
          />
        ))}
      </div>
    </>
  );
};

export default ClosetMemberView;
