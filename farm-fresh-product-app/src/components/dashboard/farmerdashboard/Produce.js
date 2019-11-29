import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../form/farmer/addproduce.scss";

const Produce = (props) => {
  const defaultProduce = {name:'', quantity:'', price:''};
  const [produce, setProduce] = useState(defaultProduce);
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
        console.log(response)
        const info = response.data.current_stock[0]
        console.log("produce",info);
        setProduce({...produce, ...info});
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  console.log(produce)
  // if(!produce.name) {
  //   return <h4>There are no produce at this time.</h4>
  // }
  return (
    <>
    { produce.name  ?
    (<div className="view-produce">      
      <h3>View Produce</h3>
      <p>Produce Name: {produce.name}</p>
      <p>Quantity: {produce.quantity}</p>
      <p>Price: {produce.price}</p>
    </div>) : 
    (<div className="view-produce">      
       <h4>There are not produce at this time.</h4>
    </div>)
    }
    </>
  );
}
export default Produce;