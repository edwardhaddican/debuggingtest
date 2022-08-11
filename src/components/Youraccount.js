import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "../style/Youraccount.css";

const Youraccount = () => {
    return (
        <motion.div
        className="YourAccContainer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <div>
          <NavLink to="/myorders">My Orders</NavLink>
        </div>
        <div>
          <NavLink to="/accountsettings">Account Settings</NavLink>
        </div>
        <div>
          <NavLink to="/logout">Logout</NavLink>
        </div>
      </motion.div>
    )
}

export default Youraccount