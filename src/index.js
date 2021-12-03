import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// import store from "./Store"
import {Provider} from 'react-redux';
// import storage from 'redux-persist/lib/storage'
// import {persistStore} from 'redux-persist'
// import { PersistGate } from 'redux-persist/integration/react'


import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";


import {applyMiddleware, createStore, compose} from "redux"
import reducers from "./reducers/index";
import logger from 'redux-logger';

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer);
let persistor = persistStore(store);


// const store = createStore(
//     reducers,
// applyMiddleware(logger)
    
    // compose(applyMiddleware(logger), autoRehydrate())
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // );






ReactDOM.render(
  <Provider store={store}>  
  <PersistGate loading={null} persistor={persistor}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </PersistGate>
  </Provider>,
  document.getElementById('root')
);


