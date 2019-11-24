import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getAllFarms } from "../../../actions/farmerFarm";
import { Link } from "react-router-dom";
// import "../../form/farmer/addproduce.scss";

const Farm = props => {
  useEffect( () => {
    props.getAllFarms();
  },[]);
 
  console.log(props);
  return (
    <div className="view-farm">
      <button className="decrement" onClick={props.decrement}>{"<<<"}</button>
       <button className="increment" onClick={props.increment}>{">>>"}</button> 
      <h3>View farm</h3>
      {props.currentFarm ? (
        <div className="farms">        
          <p>Name: {props.currentFarm.name}</p>
          <p>Address: {props.currentFarm.address}</p>
          <p>Bio: {props.currentFarm.bio}</p>
          <p>City ID:
          {props.currentFarm.city_id}</p>
          <p>State ID: {props.currentFarm.state_id}</p>
          <p>Farmer ID: {props.currentFarm.farmer_id}</p>    
          <p>Farm ID: {props.currentFarm.id}</p>      
        </div>
      ) : null}
      
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