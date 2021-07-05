import React from "react";
import "./Settings.css";

 //components 
const Settings: React.FC = () => {
    return (
        <div className="settings">
            <h1>Settings</h1>
            <h3>Edit your Profile</h3>
            <div className="settings__accountsettings">
                <h1>Edit Profile</h1>
                <div className="accountsettings__avatar">
                    <h3>Avatar</h3>
                    <img />
                    <input type="file"/>
                </div>
                <div className="settings__userinfo">
                    <input type="text" id="firstName"/>
                    <input type="text" id="lastName"/>
                    <input type="text" id="userName"/>
                    <input type="text" id="userEmail"/>
                    <input type="password" id="userPassword"/>
                    <input type="password" id="userConfirmPassword" placeholder="confirm password"/>
                </div>
                <div className="settings__confirmsave">
                    <button>Save</button>
                    <button>Cancel</button>
                </div>
            </div>
        </div> 
    );
}

export default Settings;