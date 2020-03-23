import React, { useState, useEffect, } from "react";
import ClosetManager from "../../modules/ClosetManager"

const userNow = parseInt(sessionStorage.getItem("userCredentials"));
const EditClothingItemForm = props => {
    const [clothingItem, setClothingItem] = useState ({
itemDescription: "",
sizeId: "",
isTraded:false
    });
    const [isLoading, setIsLoading] =useState(false);
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
          sizeId: clothingItem.sizeId,
          userId: userNow
        };
        ClosetManager.update(editedClothingItem).then(() => props.history.push("/clothingItem"));
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
                <label htmlFor="sizeId">Size: </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  onChange={handleFieldChange}
                  id="sizeid"
                  value={clothingItem.sizeId}
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
              </div>
            </fieldset>
          </form>
        </>
      );
    };
    export default EditClothingItemForm;
