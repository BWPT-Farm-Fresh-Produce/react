import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../form/farmer/addproduce.scss";

const Produce = (props) => {
  const [produce, setProduce] = useState([]);
  // const farmId = props.match.params.id;
  // console.log('farm', farmId)
  console.log('props',props)
  useEffect(() => {
    const produceInfo = JSON.parse(localStorage.getItem("FARMER_LOGIN_KEY"));
    console.log("produce" , produceInfo);
    axios
      .get(
        `https://aqueous-ocean-41606.herokuapp.com/api/farmers/produce/${props.id}`,
        {
          headers: {
            authorization: produceInfo.token
          }
        }
      )
      .then(response => {
        const info = response.data.current_stock[0]
        console.log("produce",info);
        setProduce(info);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <div className="view-produce">
      <h3>View Produce</h3>
      <p>Produce Name: {produce.name}</p>
      <p>Quantity: {produce.quantity}</p>
      <p>Price: {produce.price}</p>
      
    </div>
  );
      }
export default Produce;