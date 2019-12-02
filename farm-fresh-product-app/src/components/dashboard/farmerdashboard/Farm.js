import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getAllFarms, deleteFarm } from "../../../actions/farmerFarm";
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
          <div className="edit-delete" style={{display:'flex', justifyContent:'flex-end'}}>    
            {/* <div style={{color:'red', display:'flex', justifyContent:'flex-end', marginRight:'20px', cursor:'pointer'}}
                onClick={() => props.deleteFarm(props.currentFarm)}>  
                 <Link to="/farmer-dashboard/edit-farm">               
                  <FontAwesomeIcon icon="edit" style={{ color: 'red' }} />
                </Link> 
            </div>  */}
            <div style={{color:'red', display:'flex', justifyContent:'flex-end', margin:'3px 20px 0px 0px', cursor:'pointer'}}
                onClick={() => props.deleteFarm(props.currentFarm)}>    
                  <FontAwesomeIcon icon="trash-alt" style={{ color: 'red' }} />
            </div> 
          </div>
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
  getAllFarms,
  deleteFarm
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