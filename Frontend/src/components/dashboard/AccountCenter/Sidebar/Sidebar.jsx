import React from "react";
import { NavLink } from "react-router-dom";

import Innerprofile from "../../../../assets/AccountCenter/profile.svg"
import TeamManage from "../../../../assets/AccountCenter/team management.svg"
import AppSettings from "../../../../assets/AccountCenter/app settings.svg";
import About from "../../../../assets/AccountCenter/about.svg"
import ManageSubscription from "../../../../assets/AccountCenter/manage subscriptions.svg";
function Sidebar() {
    return (
        <div className="profile-inner-sidebar">
            <h4 className="sidebar-title-inner"><b>Account Center</b></h4>
            <NavLink
                // className={`menu-item ${activeMenu === "template" ? "active" : ""}`}
                className={({ isActive }) => `left-side-button ${isActive ? "active" : ""}`}
                to="/profile-settings"
            >
                <img src={Innerprofile} alt="logo" className="left-side-button-menuicon" />Profile
            </NavLink>
             <NavLink
                // className={`menu-item ${activeMenu === "template" ? "active" : ""}`}
                className={({ isActive }) => `left-side-button ${isActive ? "active" : ""}`}
                to="/team-management"
            >
               <img src={TeamManage} alt="logo" className="left-side-button-menuicon" />Team Management
            </NavLink>
             <NavLink
                // className={`menu-item ${activeMenu === "template" ? "active" : ""}`}
                className={({ isActive }) => `left-side-button ${isActive ? "active" : ""}`}
                to="/app-settings"
            >
               <img src={AppSettings} alt="logo" className="left-side-button-menuicon" />App Settings
            </NavLink>
             <NavLink
                // className={`menu-item ${activeMenu === "template" ? "active" : ""}`}
                className={({ isActive }) => `left-side-button ${isActive ? "active" : ""}`}
                to="/about"
            >
                <img src={About} alt="logo" className="left-side-button-menuicon" />About
            </NavLink>
             <NavLink
                // className={`menu-item ${activeMenu === "template" ? "active" : ""}`}
                className={({ isActive }) => `left-side-button ${isActive ? "active" : ""}`}
                to="/manage-subscription"
            >
               <img src={ManageSubscription} alt="logo" className="left-side-button-menuicon" />Manage Subscription
            </NavLink>
            
         
           
          


        </div>
    );
}

export default Sidebar;  