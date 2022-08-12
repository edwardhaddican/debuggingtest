import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import {
  Home,
  Login,
  Register,
  About,
  PrivacyAndLegal,
  Shop,
  Shortsleeve,
  Longsleeve,
  Hoodie,
  Sweater,
  Youraccount,
  Accountsettings,
  Myorders,
  Cartpage
} from "./";

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
        <Route path="/shortsleeve" element={<Shortsleeve />} />
        <Route path="/longsleeve" element={<Longsleeve />} />
        <Route path="/hoodie" element={<Hoodie />} />
        <Route path="/sweater" element={<Sweater />} />
        <Route path="/youraccount" element={<Youraccount />} />
        <Route path="/accountsettings" element={<Accountsettings />} />
        <Route path="/myorders" element={<Myorders />} />
        <Route path="/cartpage" element={<Cartpage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
