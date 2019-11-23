import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getAllFarms } from "../../../actions/farmerFarm";
import { Link } from "react-router-dom";
import "../../form/farmer/addproduce.scss";

const Farm = props => {
  useEffect( () => {
    props.getAllFarms();
  },[]);

  return (
    <div className="view-farm">
      <button onClick={props.decrement}>{"<<<"}</button>
       <button onClick={props.increment}>{">>>"}</button> 
      <h3>View farm</h3>
      {props.currentFarm ? (
        <div className="farms">        
          <p>{props.currentFarm.name}</p>
          <p>{props.currentFarm.address}</p>
          <p>{props.currentFarm.bio}</p>
          <p>City ID:{props.currentFarm.city_id}</p>
          <p>State ID:{props.currentFarm.state_id}</p>
          <p>Farmer ID:{props.currentFarm.farmer_id}</p>          
        </div>
      ) : null}
      <Link to={`/farmer-dashboard/produce/${props.id}`}>
        <button className="produce-btn">View Produce Items</button>
      </Link>
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
    newFarms: state.farmFarm.farms,
    error: state.farmFarm.error
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Farm));