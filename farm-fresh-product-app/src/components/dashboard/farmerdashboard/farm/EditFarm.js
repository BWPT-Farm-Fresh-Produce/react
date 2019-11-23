<<<<<<< HEAD
import React,{useState, useEffect} from 'react';
import { connect} from 'react-redux';
import { editFarmerFarm } from '../../../../actions/farmerFarm';
import { FARMER_LOGIN_KEY } from '../../../../constants/Constant';

function EditFarm(props) {
  const defaultFarm = { name: "", address: "", year_founded: "", bio: "", city_id: "", state_id: ""};    
  const farmArray = props.newFarms    
  const {id, name, address, year_founded, bio, city_id, state_id} = farmArray || defaultFarm;  
  const [farm,setFarm] = useState(defaultFarm);
   const handleChange = (event) => {
      setFarm({...farm, [event.target.name]:event.target.value});
  }
 
  const handleSubmit = (event) => {
     event.preventDefault();   
     const farmerId = JSON.parse(localStorage.getItem(FARMER_LOGIN_KEY)).id;  
     const newFarm = {...farm, id, farmer_id: farmerId};
     console.log("line14",newFarm);
     console.log('id',id);         
     props.editFarmerFarm(id, newFarm);
     setFarm(defaultFarm);
  }
//   console.log(props)
//   console.log(props.newFarms);
//   console.log(farmArray)
  console.log('Line 28', id);
=======
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { editFarmerFarm } from "../../../../actions/farmerFarm";
import { FARMER_LOGIN_KEY } from "../../../../constants/Constant";

function EditFarm(props) {
  const defaultFarm = {
    id: "",
    name: "",
    address: "",
    year_founded: "",
    bio: "",
    city_id: "",
    state_id: ""
  };
  const [farm, setFarm] = useState(props.currentFarm || defaultFarm);
  useEffect(() => {
    if (!props.currentFarm) return;
    setFarm(props.currentFarm);
  }, [props.currentFarm]);
  const handleChange = event => {
    setFarm({ ...farm, [event.target.name]: event.target.value });
  };
  const handleSubmit = event => {
    const farmerId = JSON.parse(localStorage.getItem(FARMER_LOGIN_KEY)).id;
    const newFarm = { ...farm, farmer_id: farmerId };
    event.preventDefault();
    props.editFarmerFarm(newFarm);
    setFarm(defaultFarm);
  };
>>>>>>> master
  return (
    <div>
      <h4>update Your Farm</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={farm.name}
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />

        <input
          type="text"
          value={farm.address}
          name="address"
          placeholder="Address"
          onChange={handleChange}
        />
        <input
          type="text"
          value={farm.year_founded}
          name="year_founded"
          placeholder="Year Founded"
          onChange={handleChange}
        />

        <input
          type="text"
          value={farm.bio}
          name="bio"
          placeholder="Bio"
          onChange={handleChange}
        />

        <input
          type="text"
          value={farm.city_id}
          name="city_id"
          placeholder="City ID"
          onChange={handleChange}
        />

        <input
          type="text"
          value={farm.state_id}
          name="state_id"
          placeholder="State ID"
          onChange={handleChange}
        />
        <button type="submit">Update Farm</button>
      </form>
    </div>
  );
}
const mapDispatchToProps = {
  editFarmerFarm
};
function mapStateToprops(state) {
  return {
    newFarms: state.farmFarm.farms[0]
  };
}
export default connect(mapStateToprops, mapDispatchToProps)(EditFarm);
