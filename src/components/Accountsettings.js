import React from "react";
import ProfileIconAccPage from './Photo/ProfileIconAccPage.png'
import { motion } from "framer-motion";
import "../style/Accountsettings.css";

const Accountsettings = () => {
    const username = localStorage.getItem('username')
    const first_name = localStorage.getItem('first_name')
    const last_name = localStorage.getItem('last_name')
    const email = localStorage.getItem('email')
    return (
        <motion.div className="AccSettingsContainer"
        initial={{opacity: 0}}
        animate={{opacity: 0.9}}
        transition={{duration: 0.5}}
        >
            <div className="AccSettingsHeader">
            Account Settings
            </div>
            <div className="AccSettingsContainerLeft">
                <div>
                    {first_name} {last_name}
                </div>
                <img className="AccSettingsPic" src={ProfileIconAccPage}/>
            </div>
            <div className="AccSettingsContainerRight">
                <div className="AccSettingsOptions">
                    Username:  {username}
                    <br></br>
                    <br></br>
                    <div>
                    <input
                    className="AccSettingsChangeBar"
                    name="Username"
                    type="text"
                    placeholder="New Username Here..."
                    />
                    </div>
                </div>
                <div className="AccSettingsOptions">
                    Password:  Current Password
                    <br></br>
                    <br></br>
                    <div>
                    <input
                    className="AccSettingsChangeBar"
                    name="Password"
                    type="text"
                    placeholder="New Password Here..."
                    />
                    </div>
                </div>
                <div className="AccSettingsOptions">
                    E-mail:  {email}
                    <br></br>
                    <br></br>
                    <div>
                    <input
                    className="AccSettingsChangeBar"
                    name="E-mail"
                    type="text"
                    placeholder="New E-mail Here..."
                    />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Accountsettings