import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import farmerRegister from "../src/reducers/farmerRegister";
import farmerLogin from "../src/reducers/farmerLogin";
import farmerProduce from "../src/reducers/farmerProduce";
import farmerFarm from "../src/reducers/farmerFarm";
import "./index.scss";
import App from "./App";
import '../src/components/fontawesome/fontAwesome';

const reducer = combineReducers({
  farmRegister: farmerRegister,
  farmLogin: farmerLogin,
  farmProduce: farmerProduce,
  farmFarm: farmerFarm
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
