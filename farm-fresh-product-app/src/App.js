import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FarmerRegister from './components/form/farmer/Register';
import FarmerLogin from './components/form/farmer/Login';
import CurstomerRegister from './components/form/customer/Register';
import CusstomerLogin from './components/form/customer/Login';
import ConsumerProductList from './components/dashboard/consumerdashboard/ConsumerProductList';
import ConsumerProductCard from './components/dashboard/consumerdashboard/ConsumerProductCard';
import FarmerDashboard from './components/dashboard/farmerdashboard/FarmerDashboard';
import PageNotFound from './errors/PageNotFound';
import ServerSideError from './errors/ServerSideError';
import UnauthorizedError from './errors/UnauthorizedError';
import Load from './components/load/Load';
import Feedback from './components/form/feedback/Feedback';
import './App.scss';
import FormikAddProduce from './components/form/farmer/AddProduce';

function App() {
  return (
    <div className="App">
      <h2>Farm App</h2>
      <div className="main-container">
        <Switch>
          <Route exact path="/" component={FarmerRegister} />
          <Route path="/farmer-login" component={FarmerLogin} />
          <Route path="/customer-register" component={CurstomerRegister} />
          <Route path="/customer-login" component={CusstomerLogin} />
          <Route path="/loading" component={Load} />
          <Route path="/farmer-dashboard" component={FarmerDashboard} />
          <Route path="/product-list" component={ConsumerProductList} />
          <Route path="/product-list/:id" component={ConsumerProductCard} />
          <Route path="/server-side-error" component={ServerSideError} />
          <Route path="/page-not-found-error" component={PageNotFound} />
          <Route path="/unauthorized-error" component={UnauthorizedError} />
          <Route path="/farmer-dashboard" component={FarmerDashboard} />
          {/* <Route path="/farmer-dashboard-addfarm" component={Farm} /> */}
          <Route path="/feedback" component={Feedback} />
          <Route path='/add-farm-item/' component={FormikAddProduce}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
