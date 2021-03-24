import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import map from "./store/reducers/map";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

const middlewares = [thunk, logger];

const store = createStore(map, applyMiddleware(...middlewares));
console.log("store:", store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);