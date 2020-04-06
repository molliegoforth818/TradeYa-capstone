import React, { useEffect, useState } from "react";
import ClothingItemCard from "./ClothingItemCard";
import ClosetManager from "../../modules/ClosetManager";

const ClothingItemList = props => {
  const [clothingItem, setClothingItem] = useState([]);
  const userNow = JSON.parse(sessionStorage.getItem("userCredentials"));

  const deleteClothingItem = id => {
    ClosetManager.deleteClothingItem(id).then(() => getClothingItem());
  };
  const getClothingItem = () => {
    return ClosetManager.getAllClothingItemsByUser().then(
      clothingItemsFromAPI => {
        const userClothingItem = clothingItemsFromAPI.filter(
          clothingItem => clothingItem.userId === userNow
        );
        setClothingItem(userClothingItem);
      }
    );
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
        {clothingItem.map(item => (
          <ClothingItemCard
            key={item.id}
            clothingItem={item}
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
