// import React, { useEffect, useState } from "react";
// import GroupClosetCard from "./ClothingItemCard";
// import ClosetManager from "../../modules/ClosetManager";

// const GroupClosetList = props => {
//   const [clothingItem, setClothingItem] = useState([]);
  
//   const getClothingItem = () => {
//     return ClosetManager.getAllClothingItemsByUser().then(clothingItemsFromAPI => {
//         const userClothingItem = clothingItemsFromAPI.filter(
//             clothingItem =>clothingItem.user.id === userNow
//         );
//         setClothingItem(userClothingItem)
//     });
// };
// useEffect(() => {
//     getClothingItem();
// }, []);
//   return (
//     <React.Fragment>      
//       <div className="container-closetCards">
//         {groupCloset.map(groupCloset => (
//           <GroupClosetCard
//             key={groupCloset.id}
//             groupCloset={groupCloset}
//             getClothingItem={getClothingItem}
//             {...props}
//           />
//         ))}
//       </div>
//     </React.Fragment>
//   );
// };
// export default GroupClosetList;
