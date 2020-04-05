import React, { useState } from "react";
import LoginManager from "../../modules/LoginManager";

const NewUserForm = props => {
  const [newUserInfo, setNewUserInfo] = useState({
    username: ""
  });
  const [isAvailable, setIsAvailable] = useState(false);

  const handleFieldChange = event => {
    const stateToChange = { ...newUserInfo };
    stateToChange[event.target.id] = event.target.value;
    setNewUserInfo(stateToChange);
  };

  const handleRegistration = event => {
    event.preventDefault();

    LoginManager.getUsers().then(arrayOfUsers => {
      const filteredUsers = arrayOfUsers.filter(
        element => element.username === newUserInfo.username
      );

      if (filteredUsers.length !== 0) {
        window.alert("This is already a registered user!");
      } else {
        if (
          newUserInfo.username === ""
        ) {
          window.alert("You must have a valid username! No blanks!");
        } else {
          LoginManager.post(newUserInfo).then(() => {
            LoginManager.getUsers().then(userArray => {
              const user = userArray.find(
                el =>
                  el.username === newUserInfo.username
              );
              props.setAsUser(user.id);
              setIsAvailable(false);
              props.history.push("/closet")
            });
          });
        }
      }
    });
  };

  return (
    <form onSubmit={handleRegistration}>
      <fieldset>
        <h3>Add a New User</h3>
        <div className="formgrid">
          <label htmlFor="inputUserName">Username: </label>
          <input
            onChange={handleFieldChange}
            type="text"
            id="username"
            required=""
            autoFocus=""
          />
            <label htmlFor="inputLocation">Location: </label>
          <input
            onChange={handleFieldChange}
            type="location"
            id="location"
            required=""
            autoFocus=""
          />
            <label htmlFor="inputPersonalStyleDescription">Personal Style Description: </label>
          <input
            onChange={handleFieldChange}
            type="personalStyleDescription"
            id="personalStyleDescription"
            required=""
            autoFocus=""
          />
        </div>
        <button disabled={isAvailable} type="submit">
          Add User
        </button>
        <button disabled={isAvailable} type="submit"onClick={() =>{ props.history.push("/login")}}>
          Back
        </button>
      </fieldset>
    </form>
  );
};

export default NewUserForm;
