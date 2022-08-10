import React, { useState } from "react";
import "../style/Login.css";

const Login = ({
  setIsLoggedIn,
  username,
  password,
  setUsername,
  setPassword,
}) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log("REPLACE ME WITH API CALL");
      localStorage.setItem("token", token);
      setIsLoggedIn(true);
      setUsername("");
      setPassword("");
      navigate("/userRoutines");
    } catch (error) {
      alert(error.message);
    }
  };

  function showPassword() {
    const shownPass = document.getElementById("LoginPasswordInput");
    const passwordButton = document.getElementById("LoginButton");
    if (shownPass.type === "password") {
      shownPass.type = "text";
      passwordButton.innerHTML = 'Hide Password'
    } else {
      shownPass.type = "password";
      passwordButton.innerHTML = 'Show Password'
    }
  }


  return (
    <div className="LoginContainer">
      <div>
        <h1 className="LoginHeader">Login</h1>
      </div>
      <form onSubmit={handleSubmit} className="LoginForm">
        <label>
          <input
            className="LoginInput"
            name="Username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </label>
        <br></br>
        <br></br>
        <label>
          <input
            className="LoginInput"
            id="LoginPasswordInput"
            name="Password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </label>
      </form>
      <button className="LoginButton">Login</button>
      <button id="LoginButton" className="ShowPasswordButton" onClick={showPassword}>Show Password</button>
    </div>
  );
};

export default Login;
