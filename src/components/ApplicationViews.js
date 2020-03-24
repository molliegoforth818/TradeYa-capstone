import React from "react";
import { Route, Redirect } from "react-router-dom";
import Login from "./auth/Login";
import NewUserForm from "./auth/NewUserForm";
import ClothingItemList from "./ClosetProfile/ClothingItemList";
import EditClothingItemForm from "../components/ClosetProfile/EditClothingItemForm"
import AddClothingItemForm from "./ClosetProfile/AddClothingItemForm"

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
        path="/{groupcloset}"
        render={props => {
          if (currentUser) {
            return <GroupClosetList currentUser={currentUser} {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }} />
    </React.Fragment>
  );
};

export default ApplicationViews;