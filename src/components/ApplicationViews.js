import React from "react";
import { Route, Redirect } from "react-router-dom";
import Login from "./auth/Login";
import NewUserForm from "./auth/NewUserForm";
import ClothingItemList from "./closetprofile/ClothingItemList";
import EditClothingItemForm from "./closetprofile/EditClothingItemForm";
import AddClothingItemForm from "./closetprofile/AddClothingItemForm";
import GroupClosetList from "./closetprofile/GroupClosetList";
import UserList from "./users/UserList";

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
      <Route
        path="/:clothingItemId(\d+)/editclothingitem"
        render={props => {
          return <EditClothingItemForm {...props} />;
        }}
      />
      <Route
        path="/closet/addnewclothingitem"
        render={props => {
          if (currentUser) {
            return <AddClothingItemForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/:groupClosetNameId(\d+)/"
        render={props => {
          if (currentUser) {
            return <GroupClosetList currentUser={currentUser} {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/users"
        render={props => {
          return <UserList {...props} />;
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;
