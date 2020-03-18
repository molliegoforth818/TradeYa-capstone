import React from "react";
import { Route, Redirect } from "react-router-dom";
import Login from "./auth/Login";
import NewUserForm from "./auth/NewUserForm"



const ApplicationViews = props => {
    const currentUser = props.currentUser;
    const setAsUser = props.setAsUser;
    
    return (
    <React.Fragment>
         <Route
        exact
        path="/"
        render={props => {
          return <Redirect to="/closet" />;
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