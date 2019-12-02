import React, { useEffect, useState } from "react";
import {connect} from 'react-redux';
import axios from "axios";
import Load from '../../load/Load';
import {getFarmerProduce} from '../../../actions/farmerProduce';
import "../../form/farmer/addproduce.scss";

const Produce = (props) => {
  const defaultProduce = {name:'No Produce!!!', quantity:'No Produce!!!', price:'No Produce!!!'};
  const [produce, setProduce] = useState(defaultProduce);
  const [isLoading, setIsLoading] = useState(false)
  // const farmId = props.match.params.id;
  // console.log('farm', farmId)
  console.log('props',props)
  useEffect(() => {
    props.getFarmerProduce(props.id);
    // const produceInfo = JSON.parse(localStorage.getItem("FARMER_LOGIN_KEY"));
    // console.log("produce" , produceInfo);
    // axios
    //   .get(
    //     `https://aqueous-ocean-41606.herokuapp.com/api/farmers/produce/${props.id}`,
    //     {
    //       headers: {
    //         authorization: produceInfo.token
    //       }
    //     }
    //   )
    //   .then(response => {
    //     console.log(response)
    //     const info = response.data.current_stock[0]
    //     console.log("produce",info);       
    //       setProduce({...produce, ...info});
    //       setIsLoading(true);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  }, []);
  console.log('produce.js>>>>>>>>>>>', props)
  if(!props.isLoadingProduce && !props.isProduceLoaded) {
    return <Load />
  }
  return (
    <>
    {typeof props.produce === 'undefined' ?
    (<div className="view-produce">      
      <h3>View Produce</h3>
      <p>Produce Name: {produce.name}</p>
      <p>Quantity: {produce.quantity}</p>
      <p>Price: {produce.price}</p>
    </div>) 
    : (
      <div className="view-produce">      
      <h3>View Produce</h3>
      <p>Produce Name: {props.produce.name}</p>
      <p>Quantity: {props.produce.quantity}</p>
      <p>Price: {props.produce.price}</p>
      <p>Category ID: {props.produce.category_id}</p>
    </div>
    )}    
    </>
  );
}
const mapDispatchToProps = {
  getFarmerProduce
}
function mapStateToProps(state) {
    return {
      produce: state.farmProduce.produceItems,
      isLoadingProduce:state.farmProduce.isLoadingProduce, 
      isProduceLoaded:state.farmProduce.isProduceLoaded
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Produce);