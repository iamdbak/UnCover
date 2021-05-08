import React, { Fragment } from "react"; 
import "./Settings.css"; 

const AccountPage: React.FC = () => {
    return(
        <div className="accountpage">
            <div className="accountpage__firstdiv">
                <h3><b>First Name</b></h3>
                <input type="text"/>
            </div>
            <div className="accountpage__seconddiv">
                <h3><b>Last Name</b></h3>
                <input type="text"/>
            </div>
            <div className="accountpage__thirddiv">
                <h3><b>Username</b></h3>
                <input type="text"/>
            </div>
            <div className="accountpage__fourthdiv">
                <h3><b>Password</b></h3>
                <input type="password"/>
            </div>
            <div className="accountpage__fifthdiv">
                <h3><b>Email</b></h3>
                <input type="text"/> 
            </div>
            <div className="accountpage__sixthdiv">
                <button>Save Changes</button>
            </div>
            <div className="accountpage__seventhdiv">
                <button>Cancel</button>
            </div>
        </div> 
    );
}

export default AccountPage;