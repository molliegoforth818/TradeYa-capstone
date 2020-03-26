import React from "react";
import { Route, Redirect } from "react-router-dom";
import Login from "./auth/Login";
import NewUserForm from "./auth/NewUserForm";
import ClothingItemList from "./closetprofile/ClothingItemList";
import EditClothingItemForm from "./closetprofile/EditClothingItemForm";
import AddClothingItemForm from "./closetprofile/AddClothingItemForm";
import GroupClosetList from "./groupcloset/GroupClosetList";
import UserList from "./users/UserList";
import ClosetProfileList from "./closetprofile/ClosetProfileList";
import EditUserProfileForm from './closetprofile/EditClosetProfileForm'

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
        path="/mygroupclosets"
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
        <Route
        exact
        path="/closet"
        render={props => {
            if (currentUser){
          return <ClosetProfileList currentUser={currentUser} {...props} />;
            } else {
                return <Redirect to ="/login" />;
        }}}
      />
        <Route
        path="/closet/:userId(\d+)/edituserprofile"
        render={props => {
          return <EditUserProfileForm {...props} />;
        }}
      />
      
    </React.Fragment>
  );
};

export default ApplicationViews;
