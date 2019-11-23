import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../form/farmer/addproduce.scss";

const Produce = (props) => {
  const [produce, setProduce] = useState([]);
  const farmId = props.match.params.id;
  console.log('farm', farmId)
  useEffect(() => {
    const produceInfo = JSON.parse(localStorage.getItem("FARMER_LOGIN_KEY"));
    console.log("produce" , produceInfo);
    axios
      .get(
        `https://aqueous-ocean-41606.herokuapp.com/api/farmers/produce/${produceInfo}`,
        {
          headers: {
            authorization: produceInfo.token
          }
        }
      )
      .then(response => {
        const info = response.data;
        console.log(response.produce);
        setProduce(info);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <div className="view-produce">
      <h3>View Produce</h3>
      {produce.map(produces => (
        <div className="produces" key={produces.id}>
          <p>{produces.name}</p>
          <p>{produces.quantity}</p>
          <p>{produces.price}</p>
        </div>
      ))}
    </div>
  );
};
export default Produce;