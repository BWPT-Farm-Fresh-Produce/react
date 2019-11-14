import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PageNotFound from './errors/PageNotFound';
import ServerSideError from './errors/ServerSideError';
import UnauthorizedError from './errors/UnauthorizedError';
import './App.scss';

function App() {
  return (
    <div className="App">
      <h1>Farm App</h1>
      <div className="main-container">
         <Switch>
           <Route path="/server-side-error" component={ServerSideError} />
           <Route path="/page-not-found-error" component={PageNotFound} />
           <Route path="/unauthorized-error" component={UnauthorizedError} />
         </Switch>
      </div>
    </div>
  );
}

export default App;
