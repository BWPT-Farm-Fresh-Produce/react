import React, { useEffect, useState } from "react";
import { Route, NavLink, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import Header from "../../header/Header";
import "./farmerdashboard.scss";
import SideMenu from "../farmerdashboard/SideMenu";
import AddFarm from "./farm/AddFarm";
import EditFarm from "./farm/EditFarm";
import { getAllFarms } from "../../../actions/farmerFarm";
import AddProduce from "../../form/farmer/AddProduce";
import EditProduce from "../../form/farmer/EditProduce";
import "./farmerdashboard.scss";
import FarmProduceCard from "./FarmProduceCard";
import Produce from "./Produce";
import Farm from "./Farm";
import Load from "../../load/Load";
import Feedback from '../../form/feedback/Feedback';
import Welcome from './welcome/Welcome';

const FarmerDashboard = props => {
  const {path} = props.match;
  const [index, setIndex] = useState(0);
  const currentFarm = props.farms[index];
  useEffect(() => {
    props.getAllFarms();
  }, []);
  const increment = () => {
    if (index === props.farms.length - 1) {
      setIndex(0);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  };
  const decrement = () => {
    if (index === 0) {
      setIndex(props.farms.length - 1);
    } else {
      setIndex(prevIndex => prevIndex - 1);
    }
  };
  if(!currentFarm ) {
      return <Load />;
  }
  console.log("Line Number 20", props.farms);
  return (
    <div className="dashboard">
      <Header />
      <h1 className="farmdTitle">Farmer's Dashboard</h1>
      <div className="farmcontainer">
        <SideMenu />
        <Farm
          currentFarm={currentFarm}
          increment={increment}
          decrement={decrement}
        />
        <div className="farmerproduce">
          <Route path={`${path}`} render={() => <Redirect to={`${path}/welcome`}/>} />
          <Route path={`${path}/welcome`} component={Welcome} />
          <Route path={`${path}/add-farm`} component={AddFarm} />
          <Route
            path={`${path}/edit-farm`}
            render={props => <EditFarm {...props} currentFarm={currentFarm} />}
          />
          {/* <Route path="/farmer-dashboard/add-item" currentFarm={currentFarm} component={AddProduce} /> */}
          <Route path={`${path}/add-item`} render={ (props) => <AddProduce {...props} id={currentFarm.id}/> } />
          <Route path={`${path}/edit-item`} component={EditProduce} />
          {/* <Route path='/farmer-dashboard/view-farm' component={Farm}/> */}
          <Route path={`${path}/feedback`} component={Feedback} />
          {/* <Route path="/farmer-dashboard/produce/:id" component={Produce} /> */}
          <Route path={`${path}/get-produce`} render={(props) => <Produce {...props}  id={currentFarm.id}/>} />
        </div>
      </div>     
    </div>
  );
};

const mapDispatchToProps = {
  getAllFarms
};

function mapStateToProps(state) {
  return {
    isLoadingFarm: state.farmFarm.isLoadingFarm,
    isFarmLoaded: state.farmFarm.isFarmLoaded,
    farms: state.farmFarm.farms,
    error: state.farmFarm.error
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(FarmerDashboard);
