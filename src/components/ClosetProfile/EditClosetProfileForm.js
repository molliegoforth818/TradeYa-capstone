import React, { useState, useEffect } from "react";
import ClosetProfileManager from "../../modules/ClosetProfileManager";
import UserManager from "../../modules/UserManager";

const userNow = parseInt(sessionStorage.getItem("userCredentials"));
const EditClosetProfileForm = props => {
  const [user, setUser] = useState({
    username: "",
    location: "",
    personalStyleDescription: "",
    profilePic: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleFieldChange = evt => {
    const stateToChange = { ...user };
    stateToChange[evt.target.id] = evt.target.value;
    setUser(stateToChange);
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
    UserManager.update(editedClosetProfile).then(() => {
      props.history.push("/closet")
    });
  };

  useEffect(() => {
    ClosetProfileManager.getUsers(props.match.params.userId).then(user => {
      setUser(user);
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
          <label htmlFor="personalstyledescription">
            personal style description:{" "}
          </label>
          <input
            type="text"
            required
            className="form-control"
            onChange={handleFieldChange}
            id="personalStyleDescription"
            value={user.personalStyleDescription}
          />
          <label htmlFor="profilepic">profile picture: </label>
          <input
            type="url"
            required
            className="form-control"
            onChange={handleFieldChange}
            id="profilePic"
            value={user.profilePic}
          />
          <div className="alignRight">
            <button
              type="submit"
              disabled={isLoading}
              onClick={updateExistingClosetProfile}
              className="btn btn-primary"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={() => {
                props.history.push("/closet/");
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
export default EditClosetProfileForm;
