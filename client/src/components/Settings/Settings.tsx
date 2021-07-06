import React from "react";
import "./Settings.css";

 //components 
const Settings: React.FC = () => {
    return (
        <div className="settings">
            <h1 className="h1 mb-2 text-gray-800">Settings</h1>
            <h3 className="h3 mb-2 text-gray-800">Edit your Profile</h3>
            <div className="settings__accountsettings">
                <div className="accountsettings__header">
                    <h4>Account Settings</h4>
                </div>
                <div className="accountsettings__avatar">
                    <h3>Avatar</h3>
                    <img src="https://th.bing.com/th/id/R.39eb0bbf2cc33ba02f53f8585004f820?rik=E0Gn4xMJk2ZerA&pid=ImgRaw" alt="default avatar image" height="50px" width="50px" />
                    <input type="file" name="avatar_photo" placeholder="photo"  capture/>
                </div> 
                <div className="settings__userinfo">
                    <h3>Your Information</h3>
                    <input type="text" id="firstName"/>
                    <input type="text" id="lastName"/>
                    <input type="text" id="userName"/>
                    <input type="text" id="userEmail"/>
                    <input type="password" id="userPassword"/>
                    <input type="password" id="userConfirmPassword" placeholder="confirm password"/>
                </div>
                <div className="settings__confirmsave">
                    <button id="confirmsave__savbtn">Save</button>
                    <button id="confirmsave__cancelbtn">Cancel</button>
                </div>
            </div>
        </div> 
    );
}

export default Settings;