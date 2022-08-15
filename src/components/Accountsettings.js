import React, { useState } from "react";
import ProfileIconAccPage from "./Photo/ProfileIconAccPage.png";
import { motion } from "framer-motion";
import "../style/Accountsettings.css";
import { updatePerson } from "../api";

const Accountsettings = () => {
  const username = localStorage.getItem("username");
  const first_name = localStorage.getItem("first_name");
  const last_name = localStorage.getItem("last_name");
  const email = localStorage.getItem("email");

  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");

  async function handlePerson(event) {
    event.preventDefault();
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");
    try {
      localStorage.removeItem("username");
      localStorage.removeItem("email");
      await updatePerson(token, newUsername, newPassword, newEmail, id);
      localStorage.setItem("username", newUsername);
      localStorage.setItem("email", newEmail);
    } catch (error) {
      throw error;
    }
  }

  return (
    <motion.div
      className="AccSettingsContainer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.9 }}
      transition={{ duration: 0.5 }}
    >
      <div className="AccSettingsHeader">Account Settings</div>
      <div className="AccSettingsContainerLeft">
        <div>
          {first_name} {last_name}
        </div>
        <img className="AccSettingsPic" src={ProfileIconAccPage} />
      </div>
      <form onSubmit={handlePerson}>
        <div className="AccSettingsContainerRight">
          <div className="AccSettingsOptions">
            Username: {username}
            <br></br>
            <br></br>
            <div>
              <input
                className="AccSettingsChangeBar"
                name="Username"
                type="text"
                placeholder="New Username Here..."
                value={newUsername}
                onChange={(event) => {
                  setNewUsername(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="AccSettingsOptions">
            Password:
            <br></br>
            <br></br>
            <div>
              <input
                className="AccSettingsChangeBar"
                name="Password"
                type="text"
                placeholder="New Password Here..."
                value={newPassword}
                onChange={(event) => {
                  setNewPassword(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="AccSettingsOptions">
            E-mail: {email}
            <br></br>
            <br></br>
            <div>
              <input
                className="AccSettingsChangeBar"
                name="E-mail"
                type="text"
                placeholder="New E-mail Here..."
                value={newEmail}
                onChange={(event) => {
                  setNewEmail(event.target.value);
                }}
              />
              <br></br>
              <br></br>
              <button type="submit" className="updateUserButton">
                Update
              </button>
            </div>
          </div>
        </div>
      </form>
    </motion.div>
  );
};

export default Accountsettings;
