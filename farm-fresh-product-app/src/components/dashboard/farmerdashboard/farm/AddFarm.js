import React, { useState } from "react";
import { connect } from "react-redux";
import { addFarmerFarm } from "../../../../actions/farmerFarm";

function AddFarm(props) {
  const defaultFarm = {
    name: "",
    address: "",
    year_founded: "",
    bio: "",
    city_id: "",
    state_id: ""
  };
  const [farm, setFarm] = useState(defaultFarm);
  const handleChange = event => {
    setFarm({ ...farm, [event.target.name]: event.target.value });
  };
  const handleSubmit = event => {
    event.preventDefault();
    console.log(farm);
    props.addFarmerFarm(farm);
    setFarm(defaultFarm);
  };
  console.log(props.addFarmerFarm);
  return (
    <div>
      <h4>Add a New Farm</h4>
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
          placeholder="bio"
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
        <button type="submit">Add Farm</button>
      </form>
    </div>
  );
}

const mapDispatchToProps = {
  addFarmerFarm
};
function mapStateToProps(state) {
  return {
    isAddingFarm: state.farmFarm.isAddingFarm,
    isFarmAdded: state.farmFarm.isFarmAdded,
    farms: state.farmFarm.farms,
    error: state.farmFarm.error
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(AddFarm);
