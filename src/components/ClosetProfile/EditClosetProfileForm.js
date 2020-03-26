import React, { useState, useEffect, } from "react";
import ClosetProfileManager from "../../modules/ClosetProfileManager"

const userNow = parseInt(sessionStorage.getItem("userCredentials"));
const EditClosetProfileForm = props => {
    const [closetProfile, setClosetProfile] = useState ({
username: "",
location:"",
personalStyleDescription:"",
profilePic:""
    });
    const [isLoading, setIsLoading] = useState(false);
    const handleFieldChange = evt => {
        const stateToChange = { ...closetProfile };
        stateToChange[evt.target.id] = evt.target.value;
        setClosetProfile(stateToChange);
      };
    const updateExistingClosetProfile = evt => {
        evt.preventDefault();
        setIsLoading(true);
    
        const editedClosetProfile = {
          id: props.match.params.userId,
          username: user.username,
          location: user.location,
          personalStyleDescription: user.personalStyleDescription,
          profilePic: user.profilePic,
          userId: userNow
        };
        ClosetProfileManager.update(editedClosetProfile).then(() => props.history.push("/closet/userprofile"));
      };
    
      useEffect(() => {
        ClosetProfileManager.get(props.match.params.userId).then(user => {
          setClosetProfile(closetProfile);
          setIsLoading(false);
        });
      }, [props.match.params.userId]);
return (
        <>
          <form>
            <fieldset>
              <div className="formgrid">
                <label htmlFor="username">username: </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  onChange={handleFieldChange}
                  id="username"
                  value={user.username}
                />
                   <label htmlFor="location">location: </label>
                   <input
                  type="text"
                  required
                  className="form-control"
                  onChange={handleFieldChange}
                  id="location"
                  value={user.location}
                />
                </div>
                <label htmlFor="personalstyledescription">personal style description: </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  onChange={handleFieldChange}
                  id="personalstyledescription"
                  value={user.personalStyleDescription}
                />
                    <label htmlFor="profilepic">profile picture </label>
                <input
                  type="url"
                  required
                  className="form-control"
                  onChange={handleFieldChange}
                  id="profilepic"
                  value={user.profilePic}
                />    
              <div className="alignRight">
                <button
                  type="button"
                  disabled={isLoading}
                  onClick={updateExistingClosetProfile}
                  className="btn btn-primary"
                >
                  Submit
                </button>
                <button type="submit"onClick={() =>{ props.history.push("/closet/userProfile")}}>
          Back
        </button>
              </div>
            </fieldset>
          </form>
        </>
      );
    };
    export default EditClosetProfileForm;
