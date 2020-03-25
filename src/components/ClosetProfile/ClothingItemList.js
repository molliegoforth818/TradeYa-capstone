import React, { useEffect, useState } from "./node_modules/react";
import ClothingItemCard from "./ClothingItemCard";
import ClosetManager from "../../modules/ClosetManager";

const ClothingItemList = props => {
  const [clothingItem, setClothingItem] = useState([]);
  const userNow = JSON.parse(sessionStorage.getItem("userCredentials"));
  
  const deleteClothingItem = (id) => {
    ClosetManager.deleteClothingItem(id)
    .then(() => getClothingItem());
  };
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
      <section className="task-content">
        <button
          type="button"
          className="btn"
          onClick={() => {
            props.history.push("/closet/addnewclothingitem");
          }}
        >
          New Clothing Item
        </button>
      </section>
      <div className="container-closetCards">
        {clothingItem.map(clothingItem => (
          <ClothingItemCard
            key={clothingItem.id}
            clothingItem={clothingItem}
            deleteClothingItem={deleteClothingItem}
            getClothingItem={getClothingItem}
            {...props}
          />
        ))}
      </div>
    </React.Fragment>
  );
};
export default ClothingItemList;
