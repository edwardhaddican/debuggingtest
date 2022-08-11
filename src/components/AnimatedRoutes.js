import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home, Login, Register, About, PrivacyAndLegal, Shop } from "./";
// import SunnyDays from "./video/SunnyDays.mp4";

import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <Login
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
            />
          }
        />
        <Route
          path="/register"
          element={
            <Register
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
              firstName={firstName}
              setFirstName={setFirstName}
              lastName={lastName}
              setLastName={setLastName}
              email={email}
              setEmail={setEmail}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/privacy_legal" element={<PrivacyAndLegal />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
