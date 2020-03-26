import React from "react";
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = props => {
  const manageLogout = () => {
    props.clearAsUser();
    props.history.push("/login");
  };

  return (
    <header>
      <h1 className="project-title">Trade Ya!</h1>

      <nav>
        <ul className="navlink-container">
          <li>
            <NavLink
              className="navlink"
              to="/closet"
              activeStyle={{
                fontWeight: "bold",
                color: "mint green"
              }}
            >
              Closet
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navlink"
              to="/donationpile"
              activeStyle={{
                fontWeight: "bold",
                color: "mint green"
              }}
            >
              Donation Pile
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navlink"
              to="/users"
              activeStyle={{
                fontWeight: "bold",
                color: "mint green"
              }}
            >
              Users
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navlink"
              to="/mygroupclosets"
              activeStyle={{
                fontWeight: "bold",
                color: "mint green"
              }}
            >
              My Closets
            </NavLink>
          </li>
          {!props.currentUser ? (
            <li>
              <NavLink
                className="navlink"
                to="/login"
                activeStyle={{
                  fontWeight: "bold",
                  color: "mint green"
                }}
              >
                Login
              </NavLink>
            </li>
          ) : (
            <li>
              <span className="navlink" onClick={manageLogout}>
                Logout
              </span>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(NavBar);
