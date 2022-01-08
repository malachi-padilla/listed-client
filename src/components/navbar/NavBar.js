import React from "react";
import {
  BtnPrimary,
  BtnSecondary,
  Logo,
  NavContainer,
  NavContent,
  NavForm,
} from "./NavBar-css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { getAuth, signOut } from "@firebase/auth";

const NavBar = () => {
  const auth = getAuth();

  let navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        sessionStorage.removeItem("Auth Token");
        // successful
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <NavContainer>
      <NavContent>
        <Logo onClick={() => navigate("/")}>Listed</Logo>
        <NavForm>
          <Link to="/register">
            <BtnPrimary>Sign Up</BtnPrimary>
          </Link>
          <Link to="/login">
            <BtnSecondary>Login</BtnSecondary>
          </Link>
          <BtnSecondary onClick={handleLogout}>Logout</BtnSecondary>
        </NavForm>
      </NavContent>
    </NavContainer>
  );
};

export default NavBar;
