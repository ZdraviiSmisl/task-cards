import React from 'react';
import {NavLink} from "react-router-dom";
import {MENU, NEW_PASSWORD, NEW_REGISTRATION, PROFILE_PAGE, RESTORE_PASSWORD, SET_LOGIN} from "../routes/Routes";
import style from './Header.module.css'

const Header = () => {
    return (
        <nav className={style.wrapNavBar}>
            <NavLink to={MENU}><h3>MENU</h3></NavLink>
            <NavLink to={SET_LOGIN}>Login</NavLink>
            <NavLink to={NEW_REGISTRATION}>Registration</NavLink>
            <NavLink to={RESTORE_PASSWORD}>Restore Password</NavLink>
            <NavLink to={NEW_PASSWORD}>New Password</NavLink>
            <NavLink to={PROFILE_PAGE}>Profile</NavLink>
        </nav>
    );
};

export default Header;