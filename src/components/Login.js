import React, { useState } from "react";
import { motion } from "framer-motion";
import "../style/Login.css";

const Login = ({
  setIsLoggedIn,
  username,
  password,
  setUsername,
  setPassword,
}) => {
  const [hidePassword, setHidePassword] = useState(true)
  const [passwordType, setPasswordType] = useState('password')

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log("REPLACE ME WITH API CALL");
      // localStorage.setItem("token", token);
      setIsLoggedIn(true);
      setUsername("");
      setPassword("");
      // navigate("/userRoutines");
    } catch (error) {
      alert(error.message);
    }
  };

  function showPasswordFunc() {
    setHidePassword(false)
    setPasswordType('text')
  }

  function hidePasswordFunc() {
    setHidePassword(true)
    setPasswordType('password')
  }

  return (
    <motion.div className="LoginContainer"
    initial={{opacity: 0}}
        animate={{opacity: 0.9}}
        transition={{duration: 0.3}}
    >
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
            type={passwordType}
            placeholder="Password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </label>
      </form>
      <button className="LoginButton" type='submit'>Login</button>
      { hidePassword ?
        <button id="LoginButton" className="ShowPasswordButton" onClick={showPasswordFunc}>Show Password</button>
        :
        <button id="LoginButton" className="ShowPasswordButton" onClick={hidePasswordFunc}>Hide Password</button>
      }
    </motion.div>
  );
};

export default Login;
