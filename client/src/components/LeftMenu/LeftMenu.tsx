import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const LeftMenu: React.FC = () => {

    let [leftMenuVisibility, setLeftMenuVisibility] = useState(false);
    
    function changeLeftMenuVisibility() {
        setLeftMenuVisibility(!leftMenuVisibility);
    }

    function getCollapseClass() {
        return (leftMenuVisibility) ? "" : "collapsed";
    }

    return (
        <Fragment>
            <div className="toggle-area">
                <button className="btn btn-primary toggle-button" onClick={() => changeLeftMenuVisibility()}>
                    <i className="fas fa-gem"></i>
                </button>
            </div>

            <ul className={`navbar-nav bg-gradient-primary-green sidebar sidebar-dark accordion ${getCollapseClass()}`}
                id="collapseMenu">

                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div className="sidebar-brand-icon icon-green rotate-n-15">
                        <i className="far fa-gem"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">UnCover <sup>Gem</sup></div>
                </a>

                <hr className="sidebar-divider my-0" />

                <li className="nav-item active">

                    <Link className="nav-link" to="Home">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to={`/admin/settings`}>
                        <i className="fas fa-fw fa-settings"></i>
                        <span>Settings</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={`/admin/quizzes`}>
                        <i className="fas fa-fw fa-quizzes"></i>
                        <span>Quizzes</span>
                    </Link>
                </li>

                <hr className="sidebar-divider" />
                <div className="sidebar-heading">
                    Services
                </div>

                <li className="nav-item">
                    <Link className="nav-link" to={`/admin/products`}>
                        <i className="fas fa-fw fa-warehouse"></i>
                        <span>Your Quizs</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to={`/admin/orders`}>
                        <i className="fas fa-fw fa-dollar-sign"></i>
                        <span>Results</span>
                    </Link>
                </li>

                <hr className="sidebar-divider" />

                <div className="sidebar-heading">
                    Admin
                </div>


                <li className="nav-item">
                    <Link className="nav-link" to={`/admin/users`}>
                        <i className="fas fa-fw fa-user"></i>
                        <span>Users</span>
                    </Link>
                </li>

                

                <hr className="sidebar-divider d-none d-md-block" />
            </ul>
        </Fragment>
    );
};

export default LeftMenu;
