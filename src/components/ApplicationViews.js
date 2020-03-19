import React from "react";
import { Route, Redirect } from "react-router-dom";
import Login from "./auth/Login";
import NewUserForm from "./auth/NewUserForm"
import ClosetList from "./ClosetProfile/ClosetList"



const ApplicationViews = props => {
    const currentUser = props.currentUser;
    const setAsUser = props.setAsUser;
    
    return (
    <React.Fragment>
         <Route
        exact
        path="/"
        render={props => {
          if (currentUser) {
            return <ClosetList currentUser={currentUser} {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}/>
    <Route
    exact
    path="/login"
    render={props => {
      return <Login setAsUser={setAsUser} {...props} />;
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

    )};

    export default ApplicationViews 