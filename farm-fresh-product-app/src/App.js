import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from './components/Form/Farmer/Register';
import Login from './components/Form/Farmer/Login';
import PageNotFound from './errors/PageNotFound';
import ServerSideError from './errors/ServerSideError';
import UnauthorizedError from './errors/UnauthorizedError';
import './App.scss';
import FarmerDashboard from './components/Dashboard/FarmerDashboard';

function App() {
  return (
    <div className="App">
      <h2>Farm App</h2>
      <div className="main-container">
         <Switch>
           <Route exact path="/" component={Register} />
           <Route path="/login" component={Login} />
           <Route  path="/server-side-error" component={ServerSideError} />
           <Route  path="/page-not-found-error" component={PageNotFound} />
           <Route  path="/unauthorized-error" component={UnauthorizedError} />
           <Route path="/farmer-dashboard" component={FarmerDashboard}/>
         </Switch>
      </div>
    </div>
  );
}

export default App;
