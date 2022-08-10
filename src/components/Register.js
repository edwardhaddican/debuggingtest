import React from "react";
import "../style/Register.css";

const Register = ({
  username,
  setUsername,
  password,
  setPassword,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
}) => {
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      console.log("REPLACE ME WITH REGISTERPERSON API CALL");
    } catch (error) {
      alert(error.message);
    }
  }

  function showPassword() {
    const shownPass = document.getElementById("registerPasswordInput");
    const passwordButton = document.getElementById("passwordButton");
    if (shownPass.type === "password") {
      shownPass.type = "text";
      passwordButton.innerHTML = "Hide Password";
    } else {
      shownPass.type = "password";
      passwordButton.innerHTML = "Show Password";
    }
  }

  return (
    <div className="RegisterContainer">
      <div>
        <h1 className="RegisterHeader">Register</h1>
      </div>
      <form onSubmit={handleSubmit} className="RegisterForm">
        <input
          className="RegisterInput"
          type="text"
          placeholder="Enter your first name here..."
          name="firstName"
          value={firstName}
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
        />
          <br></br>
        <br></br>
        <input
          className="RegisterInput"
          type="text"
          placeholder="Enter your last name here..."
          name="lastName"
          value={lastName}
          onChange={(event) => {
            setLastName(event.target.value);
          }}
        />
          <br></br>
        <br></br>
        <input
          className="RegisterInput"
          type="text"
          placeholder="Enter username here..."
          name="username"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
          <br></br>
        <br></br>
        <input
          id="registerPasswordInput"
          className="RegisterInput"
          type="password"
          placeholder="Enter password here..."
          name="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <br></br>
        <br></br>
        <input
          className="RegisterInput"
          type="text"
          placeholder="Enter email here..."
          name="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
          <br></br>
        <br></br>
        <button className="RegisterButton" type="submit">Register</button>
        <button className="ShowPasswordButton" id="passwordButton" onClick={showPassword}>
          Show Password
        </button>
      </form>
    </div>
  );
};

export default Register;
