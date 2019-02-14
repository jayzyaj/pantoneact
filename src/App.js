import React, { Component } from "react";

import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import * as reducers from "./reducers";

import AppContainer from "./config/router";

import { LOGOUT_SUCCESS } from "./config/action-types/authenticate";

const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);
const reducer = combineReducers(reducers);

const rootReducer = (state, action) => {
  if (action.type === LOGOUT_SUCCESS) {
    state = undefined
  }
  return reducer(state, action)
}

const store = createStoreWithMiddleware(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;
