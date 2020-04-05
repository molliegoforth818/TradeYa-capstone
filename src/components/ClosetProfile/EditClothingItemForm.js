import React, { useState, useEffect } from "react";
import ClosetManager from "../../modules/ClosetManager";

const EditClothingItemForm = props => {
  const userNow = parseInt(sessionStorage.getItem("userCredentials"));
  const [clothingItem, setClothingItem] = useState({
    itemDescription: "",
    size: "",
    clothingPic: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleFieldChange = evt => {
    const stateToChange = { ...clothingItem };
    stateToChange[evt.target.id] = evt.target.value;
    setClothingItem(stateToChange);
  };
  const updateExistingClothingItem = evt => {
    evt.preventDefault();
    setIsLoading(true);

    const editedClothingItem = {
      id: props.match.params.clothingItemId,
      itemDescription: clothingItem.itemDescription,
      size: clothingItem.size,
      clothingPic: clothingItem.clothingPic,
      userId: userNow
    };
    ClosetManager.update(editedClothingItem).then(() =>
      props.history.push("/closet")
    );
  };

  useEffect(() => {
    ClosetManager.get(props.match.params.clothingItemId).then(clothingItem => {
      setClothingItem(clothingItem);
      setIsLoading(false);
    });
  }, [props.match.params.clothingItemId]);
  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <label htmlFor="itemDescription">item description: </label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="itemDescription"
              value={clothingItem.itemDescription}
            />
            <label htmlFor="size">size: </label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="size"
              value={clothingItem.size}
            />
            <label htmlFor="clothingPic">image: </label>
            <input
              type="url"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="clothingPic"
              value={clothingItem.clothingPic}
            />
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={updateExistingClothingItem}
              className="btn btn-primary"
            >
              Submit
            </button>
            <button
              type="submit"
              onClick={() => {
                props.history.push("/closet");
              }}
            >
              Back
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};
export default EditClothingItemForm;
