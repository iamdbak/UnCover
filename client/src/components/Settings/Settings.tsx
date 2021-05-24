import React from "react";
 import "./Settings.css";

 //components 
const Settings: React.FC = () => {
    return (
        <div className="settings">
            <div className="settings__header">
                <h1>Settings</h1>
            </div>
            <div className="settings__body">
                <div className="body__icon">
                    <img src="https://icon-library.com/images/default-profile-icon/default-profile-icon-16.jpg" alt="default profile image" height="50px" width="50px"/>
                </div>
                <div className="body__imagebutton">
                    <button>Upload new photo</button>
                </div>
                <div className="body__cancelbutton">
                    <button>Reset</button>
                </div>
                <div className="body__firstname">
                    <h2>First Name</h2>
                    <input type="text"/>
                </div>
                <div className="body__lastname">
                    <h2>Last Name</h2>
                    <input type="text"/>
                </div>
                <div className="body__password">
                    <h2>Password</h2>
                    <input type="password"/>
                </div>
                <div className="body__email">
                    <h2>Email</h2>
                    <input type="text"/>
                </div>
                <div className="body__number">
                    <h2>Phone Number</h2>
                    <input type="text"/>
                </div>
                <div className="body__savechangesbutton">
                    <button>Save</button>
                </div>
                <div className="body__cancelchangesbutton">
                    <button>Cancel</button>
                </div>
            </div>
        </div> 
    );
}

export default Settings;