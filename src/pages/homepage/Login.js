import React, { useState } from "react";
import { signInWithEmailAndPassword, getAuth } from "@firebase/auth";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";

export default function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  let navigate = useNavigate();

  const login = () => {
    const authentication = getAuth();
    signInWithEmailAndPassword(authentication, loginEmail, loginPassword)
      .then((response) => {
        sessionStorage.setItem(
          "Auth Token",
          response._tokenResponse.refreshToken
        );
        navigate("/");
      })
      .catch((error) => {
        console.error(error.code);
        if (error.code === "auth/wrong-password") {
          console.log("toast");
          toast.error("Please check the Password");
        } else if (error.code === "auth/invalid-email") {
          toast.error("Please check the Email");
        }
      });
  };
  return (
    <div>
      <ToastContainer />
      <h1>Login</h1>
      <input
        placeholder="username"
        onChange={(e) => setLoginEmail(e.target.value)}
      />
      <input
        placeholder="password"
        onChange={(e) => setLoginPassword(e.target.value)}
      />
      <button onClick={login}>Submit</button>
    </div>
  );
}
