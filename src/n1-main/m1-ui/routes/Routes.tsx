import React from 'react';
import {Route} from 'react-router-dom';
import Login from "../../../n2-features/f1-auth/a1-login/Login";
import RestorePassword from "../../../n2-features/f1-auth/a3-restorePassword/RestorePassword";
import Registration from "../../../n2-features/f1-auth/a2-registration/Registration";
import NewPassword from "../../../n2-features/f1-auth/a4-newPassword/NewPassword";
import Profile from "../../../n2-features/f1-auth/a5-profile/Profile";
import Start from "../../../Other/Start";

export const MENU = '/menu;'
export const SET_LOGIN = '/login';
export const NEW_REGISTRATION = '/registration';
export const RESTORE_PASSWORD = '/restorePassword';
export const NEW_PASSWORD = '/newPassword';
export const PROFILE_PAGE = '/profile';


const Routes = () => {
    return (
        <div>
            <Route path={MENU} component={Start}/>
            <Route path={SET_LOGIN} component={Login}/>
            <Route path={NEW_REGISTRATION} component={Registration}/>
            <Route path={RESTORE_PASSWORD} component={RestorePassword}/>
            <Route path={NEW_PASSWORD} component={NewPassword}/>
            <Route path={PROFILE_PAGE} component={Profile}/>
        </div>
    );
};

export default Routes;