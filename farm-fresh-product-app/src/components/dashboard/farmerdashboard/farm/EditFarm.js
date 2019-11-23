import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { editFarmerFarm } from "../../../../actions/farmerFarm";
import { FARMER_LOGIN_KEY } from "../../../../constants/Constant";
import './Farm.scss';

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
  console.log(props);
  return (
    <div>
      
      <form onSubmit={handleSubmit}>      
       <div className="container">
       <h4>Update Your Farm</h4>
        <input
          type="text"
          value={farm.name}
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="input"
        />

        <input
          type="text"
          value={farm.address}
          name="address"
          placeholder="Address"
          onChange={handleChange}
          className="input"
        />
        <input
          type="text"
          value={farm.year_founded}
          name="year_founded"
          placeholder="Year Founded"
          onChange={handleChange}
          className="input"
        />

        <input
          type="text"
          value={farm.bio}
          name="bio"
          placeholder="Bio"
          onChange={handleChange}
          className="input"
        />

        <input
          type="text"
          value={farm.city_id}
          name="city_id"
          placeholder="City ID"
          onChange={handleChange}
          className="input"
        />

        <input
          type="text"
          value={farm.state_id}
          name="state_id"
          placeholder="State ID"
          onChange={handleChange}
          className="input"
        />
        <button type="submit" className='edit-farm'>Update Farm</button>
        </div>
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
