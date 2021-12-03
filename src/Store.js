import React from 'react';

import {applyMiddleware, createStore, compose} from "redux"
import reducers from "./reducers/index";
import logger from 'redux-logger';
import {autoRehydrate} from 'redux-persist'


const store = createStore(
    reducers,
// applyMiddleware(logger)
    
    compose(applyMiddleware(logger), autoRehydrate())
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );


export default store;