import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import farmerRegister  from '../src/reducers/farmerRegister';
import farmerLogin  from '../src/reducers/farmerLogin'
import './index.scss';
import 'react-sliding-pane/dist/react-sliding-pane.css';
import App from './App';

const reducer = combineReducers(
  {
  farmRegister:farmerRegister, 
  farmLogin:farmerLogin
});
const middleware = applyMiddleware(thunk,logger);
const store = createStore(reducer,middleware);


ReactDOM.render(
<Router>
  <Provider store={store}>
    <App />
  </Provider>  
</Router>, document.getElementById('root'));

