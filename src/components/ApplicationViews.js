import React from "react";
import { Route, Redirect } from "react-router-dom";
import Login from "./auth/Login";
import NewUserForm from "./auth/NewUserForm";
import ClothingItemList from "./ClosetProfile/ClothingItemList";
import EditClothingItemForm from "./ClosetProfile/EditClothingItemForm";
import AddClothingItemForm from "./ClosetProfile/AddClothingItemForm";
import GroupClosetList from "./groupcloset/GroupClosetList";
import GroupClosetMemberList from "./groupcloset/GroupClosetMemberList";
import ClosetProfileList from "./ClosetProfile/ClosetProfileList";
import EditUserProfileForm from './ClosetProfile/EditClosetProfileForm'
import ClosetMemberView from './users/ClosetMemberView'

const ApplicationViews = props => {
  const currentUser = props.currentUser;
  const setAsUser = props.setAsUser;
console.log("Hello")
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
        path="/closetmembers/:groupClosetId(\d+)"
        render={props => {
          return <GroupClosetMemberList currentUser={currentUser} {...props} />;
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
        <Route
        path="/closet/:userId(\d+)"
        render={props => {
          return <ClosetMemberView {...props} />;
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;
