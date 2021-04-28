import React, { Fragment } from "react";
import LeftMenu from "../LeftMenu/LeftMenu";
import TopMenu from "../TopMenu/TopMenu";
import { Switch, Route } from "react-router";
import Users from "../Users/Users";
import Products from "../Products/Products";
import Orders from "../Orders/Orders";
import Settings from "../Settings/Settings";
import Home from "../Homee/Homee";
import Notifications from "../../common/components/Notification";
//


const Admin: React.FC = () => {

  return (
    <Fragment>
      <Notifications />
      <LeftMenu />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <TopMenu />
          <div className="container-fluid">
            <Switch>
              <Route path={`/admin/users`}><Users /></Route>
              <Route path={`/admin/products`}><Products /></Route>
              <Route path={`/admin/orders`}><Orders /></Route>
              <Route path={`/admin/settings`}><Settings /></Route>
              <Route path="/admin"><Home /></Route>
            </Switch>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Admin;
