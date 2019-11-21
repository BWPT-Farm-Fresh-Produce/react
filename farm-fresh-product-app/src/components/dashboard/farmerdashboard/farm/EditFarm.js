import React,{useState} from 'react';

function EditFarm() {
  const defaultFarm = {
    name: "",
    address: "",
    year_founded: "",
    bio: "",
    city_id: "",
    state_id: ""
}
  const [farm,setFarm] = useState(defaultFarm);
  const handleChange = (event) => {
      setFarm({...farm, [event.target.name]:event.target.value});
  }
  const handleSubmit = (event) => {
     event.preventDefault();

  }
  return (
    <div>
     <h4>update Your Farm</h4>
     <form>
        <input type="text"
              value={farm.name}
              name="name" placeholder="Name"
              onChange={handleChange}             
        />

        <input type="text" 
              value={farm.address} 
              name="address" placeholder="Address" 
              onChange={handleChange}               
        />
        <input type="text" 
              value={farm.year_founded} 
              name="year_founded" placeholder="Year Founded" 
              onChange={handleChange}               
        />

        <input type="text" 
              value={farm.bio} 
              name="bio" placeholder="bio" 
              onChange={handleChange}               
        />

        <input type="text" 
              value={farm.city_id} 
              name="city_id" placeholder="City ID" 
              onChange={handleChange}               
        />

        <input type="text" 
              value={farm.state_id} 
              name="state_id" placeholder="State ID" 
              onChange={handleChange}               
        /> 
        <button type="submit">Update Farm</button>       
      </form>
    </div>
  )
}

export default EditFarm;
