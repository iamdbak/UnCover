import React, { Fragment } from "react";
import "./Settings.css"; 

const SettingsHeader: React.FC = () => {
    return (
        <div className="settingsheader">
            <div className="settingsheader__accounttag">
                <a>Account</a>
            </div>
            <div className="settingsheader__notificationstag">
                <a>Notifications</a>
            </div>
            <div className="settingsheader__contacttag">
                <a>Contact</a>
            </div>
            <div className="settingsheader__privacytag">
                <a>Privacy and Safety</a>
            </div>
        </div>
    );
}

export default SettingsHeader;
