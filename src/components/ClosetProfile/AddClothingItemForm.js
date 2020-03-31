import React, { useState } from "react";
import ClosetManager from "../../modules/ClosetManager"

const userCred = sessionStorage.getItem("userCredentials");

const AddClothingItemForm = props => {
  const [clothingItem, setClothingItem] = useState({
    userId: userCred,
   itemDescription: "",
    size: "",
    isTraded: false
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...clothingItem };
    stateToChange[evt.target.id] = evt.target.value;
    setClothingItem(stateToChange);
  };
  const constructNewClothingItem = evt => {
    const userCred = sessionStorage.getItem("userCredentials");
    evt.preventDefault();
    if (userCred === null) {
      window.alert("Please login to enter item description and size");
    } else {
      setIsLoading(true);
      clothingItem.userId = userCred;
      ClosetManager.post(clothingItem).then(() => props.history.push("/closet"));
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <label htmlFor="clothingitem">Item Description: </label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="itemDescription"
              placeholder="itemDescription"
            />

            <label htmlFor="size">Size: </label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="size"
              placeholder="size"
            />
             <label htmlFor="size">Image: </label>
            <input
              type="url"
              required
              onChange={handleFieldChange}
              id="clothingPic"
              placeholder="clothingPic"
            />
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewClothingItem}
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};
export default AddClothingItemForm;
