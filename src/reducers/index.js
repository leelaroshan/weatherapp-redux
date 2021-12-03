import React from "react";
import weatherReducer from "./Weatherreducer";

import { combineReducers } from "redux";

const reducers =  combineReducers({
    weather : weatherReducer
   

})

export default reducers;