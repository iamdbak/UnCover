import React from "react";
import { readBuilderProgram } from "typescript";
import "./Settings.css";

 //components 
const Settings: React.FC = () => {
    const avatarDiv = document.querySelector('.accountsettings__avatar');
    const avatar = document.querySelector('#avatar__useravatar');
    const avatarFile = document.querySelector('#avatar__file');
    const avatarButton = document.querySelector('#avatar__change');

    //change user avatar
    /*if(avatarButton) {
        avatarButton.addEventListener('click', (e) => {
            e.preventDefault();
            if(avatarFile) {
                console.log(avatarFile);
                const files = avatarFile.files; 
                if(files.length > 0) {
                    const file = files[0];
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        if(e.target) {
                            const dataUrl = e.target.result;
                            if(avatarDiv) {
                                avatarDiv.style.backgroundImage = `url(${dataUrl})`;

                            }
                        }
                    };
                    reader.readAsDataURL(file);
                }
            }
        });
        
    } 

    */ 

    

  

    return (
        <div className="settings">
            <h1 className="h1 mb-2 text-gray-800">Settings</h1>
            <h3 className="h3 mb-2 text-gray-800">Edit your Profile</h3>
            <div className="settings__accountsettings">
                <div className="accountsettings__header">
                    <h4>Account Settings</h4>
                </div>
                <div className="accountsettings__profiledit">
                    <h4>Edit Profile</h4>
                </div>
                <div className="accountsettings__avatar">
                    <img src="https://moonvillageassociation.org/wp-content/uploads/2018/06/default-profile-picture1.jpg" alt="default profile pic image" id="avatar__useravatar"/>
                    <input type="file" id="avatar__file"/>
                    <label htmlFor="avatar__file" id="avatar__change">+</label>
                </div>
                <hr />
                <div className="accountsettings__form">
                    <div className="form__firstname">
                        <h3>First Name</h3>
                        <input type="text" id="firstname__input"/>
                    </div>
                    <div className="form__lastname">
                        <h3>Last Name</h3>
                        <input type="text" id="lastname__input"/>
                    </div>
                    <div className="form__username"> 
                        <h3>Username</h3>
                        <input type="text" id="username__input"/>
                    </div>
                    <div className="form__password">
                        <h3>Password</h3>
                        <input type="password" id="username__password"/>
                    </div>
                    <div className="form__email">
                        <h3>Change Email</h3>
                        <input type="text" id="username__email"/>
                    </div>
                    <div className="form__save">
                        <button id="save__savebtn">Save</button>
                    </div>
                    <div className="form__cancel">
                        <button id="cancel__cancelbtn">Cancel</button>
                    </div>
                </div>
            </div>
        </div> 
    );

  
}

export default Settings;