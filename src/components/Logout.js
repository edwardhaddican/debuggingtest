import React from "react";
import { motion } from "framer-motion";
import "../style/Logout.css";

const Logout = () => {
    return (
        <motion.div 
        className="LogoutContainer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ duration: 0.5 }}
        >
            <div className="LogoutHeader">
            Are You Sure You Want To Logout?
            </div>
            <div className="LogoutButtonContainer">
                <button className="LogoutButtons">
                    Yes
                </button>
                <button className="LogoutButtons">
                    No
                </button>
            </div>
        </motion.div>
    )
}

export default Logout