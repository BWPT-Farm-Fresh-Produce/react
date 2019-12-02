import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
<<<<<<< HEAD
import farmerRegister from "./reducers/farmerRegister";
import farmerLogin from "./reducers/farmerLogin";
import farmerProduce from "./reducers/farmerProduce";
import farmerFarm from "./reducers/farmerFarm";
import customerShoppingReducer from "./reducers/customerShopping";
=======
import farmerRegister from "../src/reducers/farmerRegister";
import farmerLogin from "../src/reducers/farmerLogin";
import farmerProduce from "../src/reducers/farmerProduce";
import farmerFarm from "../src/reducers/farmerFarm";
>>>>>>> 3c3ed1ea53f19a677a7e0a2a2c950336acf71b2e
import "./index.scss";
import App from "./App";
import '../src/components/fontawesome/fontAwesome';

const reducer = combineReducers({
  farmRegister: farmerRegister,
  farmLogin: farmerLogin,
  farmProduce: farmerProduce,
<<<<<<< HEAD
  farmerFarm,
  customerShoppingReducer
=======
  farmFarm: farmerFarm
>>>>>>> 3c3ed1ea53f19a677a7e0a2a2c950336acf71b2e
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
