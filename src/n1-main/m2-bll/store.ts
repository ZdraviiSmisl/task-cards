import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'react-redux';
import LoginReducer from "./login-reducer";
import RegistrationReducer from "./registration-reducer";
import RestorePasswordReducer from "./restorePassword-reducer";
import NewPasswordReducer from "./newPassword-reducer";
import ProfileReducer from "./prifile-reducer";

let reducers = combineReducers({
    login: LoginReducer,
    register: RegistrationReducer,
    rePass: RestorePasswordReducer,
    newPass: NewPasswordReducer,
    profilePage: ProfileReducer
});


let store = createStore(reducers, applyMiddleware());
export default store;