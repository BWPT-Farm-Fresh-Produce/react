import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import './index.scss';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import App from './App';



ReactDOM.render(
<Router>
  <App />
</Router>, document.getElementById('root'));

