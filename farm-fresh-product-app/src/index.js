import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import farmerRegister from "./reducers/farmerRegister";
import farmerLogin from "./reducers/farmerLogin";
import farmerProduce from "./reducers/farmerProduce";
import farmerFarm from "./reducers/farmerFarm";
import customerShoppingReducer from "./reducers/customerShopping";
import "./index.scss";
import App from "./App";

const reducer = combineReducers({
  farmRegister: farmerRegister,
  farmLogin: farmerLogin,
  farmProduce: farmerProduce,
  farmerFarm,
  customerShoppingReducer
});
const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducer, middleware);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
