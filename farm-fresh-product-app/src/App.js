import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from './components/Form/Farmer/Register';
import Login from './components/Form/Farmer/Login';
import FarmerDashboard from './components/Dashboard/FarmerDashboard';
import PageNotFound from './errors/PageNotFound';
import ServerSideError from './errors/ServerSideError';
import UnauthorizedError from './errors/UnauthorizedError';
import Load from './components/Load/Load';
import './App.scss';

function App() {
  return (
    <div className="App">
      <h2>Farm App</h2>
      <div className="main-container">
         <Switch>
           <Route exact path="/" component={Register} />
           <Route path="/login" component={Login} />
           <Route path="/loading" component={Load} />
           <Route path="/farmer-dashboard" component={FarmerDashboard} />
           <Route  path="/server-side-error" component={ServerSideError} />
           <Route  path="/page-not-found-error" component={PageNotFound} />
           <Route  path="/unauthorized-error" component={UnauthorizedError} />
         </Switch>
      </div>
    </div>
  );
}

export default App;
