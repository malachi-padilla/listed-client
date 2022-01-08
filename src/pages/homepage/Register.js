import { createUserWithEmailAndPassword, getAuth } from "@firebase/auth";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";

export default function Register() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  let navigate = useNavigate();

  const register = () => {
    const authentication = getAuth();
    createUserWithEmailAndPassword(
      authentication,
      registerEmail,
      registerPassword
    )
      .then((response) => {
        // this token is just a cheap way to see if someone is logged in. without a big request
        sessionStorage.setItem(
          "Auth Token",
          response._tokenResponse.refreshToken
        );
        navigate("/");
      })
      .catch((error) => {
        console.log(error.code);
        if (error.code === "auth/wrong-password") {
          toast.error("Please check the Password");
        } else if (error.code === "auth/email-already-in-use") {
          toast.error("Email Already In Use");
        } else if (error.code === "auth/invalid-email") {
          toast.error("Please check the Email");
        }
      });
  };

  return (
    <div>
      <ToastContainer />
      <h1>Register</h1>
      <input
        placeholder="email"
        onChange={(e) => setRegisterEmail(e.target.value)}
      />
      <input
        placeholder="password"
        onChange={(e) => setRegisterPassword(e.target.value)}
      />
      <button onClick={register}>Submit</button>
    </div>
  );
}
