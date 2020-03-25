import React, { useState, useEffect, } from "./node_modules/react";
import ClosetManager from "../../modules/ClosetManager"

const userNow = parseInt(sessionStorage.getItem("userCredentials"));
const EditClothingItemForm = props => {
    const [clothingItem, setClothingItem] = useState ({
itemDescription: "",
size: ""
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
          userId: userNow
        };
        ClosetManager.update(editedClothingItem).then(() => props.history.push("/closet"));
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
                <label htmlFor="itemDescription">Item Description: </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  onChange={handleFieldChange}
                  id="itemDescription"
                  value={clothingItem.itemDescription}
                />
                <label htmlFor="size">Size: </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  onChange={handleFieldChange}
                  id="size"
                  value={clothingItem.size}
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
                <button type="submit"onClick={() =>{ props.history.push("/closet")}}>
          Back
        </button>
              </div>
            </fieldset>
          </form>
        </>
      );
    };
    export default EditClothingItemForm;
