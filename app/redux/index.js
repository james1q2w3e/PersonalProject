import { combineReducers } from "redux";

import reducer1 from "./reducer1";
import { authReducer } from "./auth";

const appReducer = authReducer

export default appReducer;