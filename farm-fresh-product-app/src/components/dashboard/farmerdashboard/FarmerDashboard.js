import React, { useEffect, useState } from "react";
import { Route, NavLink } from "react-router-dom";
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
import Feedback from '../../form/feedback/Feedback';

const FarmerDashboard = props => {
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
          <Route path="/farmer-dashboard/add-farm" component={AddFarm} />
          <Route
            path="/farmer-dashboard/edit-farm"
            render={props => <EditFarm {...props} currentFarm={currentFarm} />}
          />
          <Route path="/farmer-dashboard/add-item" component={AddProduce} />
          <Route path="/farmer-dashboard/edit-item" component={EditProduce} />
          {/* <Route path='/farmer-dashboard/view-farm' component={Farm}/> */}
          <Route path="/farmer-dashboard/feedback" component={Feedback} />
          <Route path="/farmer-dashboard/produce/:id" component={Produce} />
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
