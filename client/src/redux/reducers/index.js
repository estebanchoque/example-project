import { combineReducers } from "redux";
import post from "./postReducers";
import user from "./userReducers";
import session from "./sessionReducers";

export default combineReducers({ user, post, session });
