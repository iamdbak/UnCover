import React from "react";
import "./Settings.css";

import { Switch, Route } from "react-router";

//components
import AccountPage from "./AccountPage";
import NotificationsPage from "./NotificationsPage";
import ContactPage from "./ContactPage";
import PrivacyPage from "./PrivacyPage";
const SetHeader: React.FC = () => {
    return (
        <div className="setheader">
            <div className="setheader__account">
                <a><h2>Account</h2></a>
            </div>
            <div className="setheader__notifications">
                <a><h2>Notifications</h2></a>
            </div>
            <div className="setheader__contact">
                <a><h2>Contact</h2></a>
            </div>
            <div className="setheader__privacy">
                <a><h2>Privacy</h2></a> 
            </div>
            <Switch>
                <Route path={`admin/settings/account`}><AccountPage /></Route>
                <Route path={`admin/settings/notifications`}><h1><NotificationsPage /></h1></Route>
                <Route path={`admin/settings/contact`}><h1><ContactPage /></h1></Route>
                <Route path={`admin/settings/privacy`}><h1><PrivacyPage /></h1></Route>
            </Switch>
        </div>
    ); 
}

export default SetHeader;