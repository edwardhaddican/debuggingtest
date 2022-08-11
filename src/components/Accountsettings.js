import React from "react";
import ProfileIconAccPage from './Photo/ProfileIconAccPage.png'
import "../style/Accountsettings.css";

const Accountsettings = () => {
    return (
        <div className="AccSettingsContainer">
            <div className="AccSettingsHeader">
            Account Settings
            </div>
            <div className="AccSettingsContainerLeft">
                <div>
                    First & Last Name
                </div>
                <img className="AccSettngsPic" src={ProfileIconAccPage}/>
            </div>
            <div className="AccSettingsContainerRight">
                <div className="AccSettingsOptions">
                    Username:  Current Username
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
                    E-mail:  Current E-mail
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
        </div>
    )
}

export default Accountsettings