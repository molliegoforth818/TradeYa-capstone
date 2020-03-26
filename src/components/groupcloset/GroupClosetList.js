import React, { useEffect, useState } from "react";
import GroupClosetCard from "./ClothingItemCard";
import GroupClosetManager from "../../modules/GroupClosetManager";

const GroupClosetList = props => {
  const [clothingLend, setClothingLend] = useState([]);
  
  const getClothingItem = () => {
    return ClosetManager.getAllClothingItemsByUser().then(clothingItemsFromAPI => {
        const userClothingItem = clothingItemsFromAPI.filter(
            clothingItem =>clothingItem.user.id === userNow
        );
        setClothingItem(userClothingItem)
    });
};
useEffect(() => {
    getClothingItem();
}, []);
  return (
    <React.Fragment>      
      <div className="container-closetCards">
        {groupCloset.map(groupCloset => (
          <GroupClosetCard
            key={groupCloset.id}
            groupCloset={groupCloset}
            getClothingItem={getClothingItem}
            {...props}
          />
        ))}
      </div>
    </React.Fragment>
  );
};
export default GroupClosetList;
