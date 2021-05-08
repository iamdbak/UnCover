import React from "react";
 import "./Settings.css";

 //components 
 import SetHeader from "./SetHeader";
 import AccountPage from "./AccountPage";
const Settings: React.FC = () => {
    return (
        <div className="settings">
            <SetHeader />
            <AccountPage />
        </div> 
    );
}

export default Settings;