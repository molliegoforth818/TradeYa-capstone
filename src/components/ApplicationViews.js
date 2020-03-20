import React from "react";
import { Route, Redirect } from "react-router-dom";
import Login from "./auth/Login";
import NewUserForm from "./auth/NewUserForm";
import ClothingItemList from "./ClosetProfile/ClothingItemList";

const ApplicationViews = props => {
  const currentUser = props.currentUser;
  const setAsUser = props.setAsUser;

  return (
    <React.Fragment>
      <Route
        exact
        path="/login"
        render={props => {
          return <Login setAsUser={setAsUser} {...props} />;
        }}
      />
      <Route
        exact
        path="/closet"
        render={props => {
          if (currentUser) {
            return <ClothingItemList currentUser={currentUser} {...props} />;
          }
        }}
      />
      <Route
        exact
        path="/newuser"
        render={props => {
          return <NewUserForm setAsUser={setAsUser} {...props} />;
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;