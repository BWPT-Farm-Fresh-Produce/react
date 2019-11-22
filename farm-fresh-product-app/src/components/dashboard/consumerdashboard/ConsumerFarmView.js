import React, { useState, useEffect } from "react";
import Axios from "axios";
import Load from "../../load/Load";

export default function ConsumerFarmView(props) {
  const [farmInfo, setFarmInfo] = useState(null);
  const farmId = props.match.params.id;

  const [cartItems, setCartItems] = useState ( [] );
  const addToCheckoutCart = item => {
    setCartItems( previousCartItems => [...previousCartItems, item] )
  }

  useEffect(() => {
    Axios.get(
      `https://aqueous-ocean-41606.herokuapp.com/api/farmers/produce/${farmId}`,
      {
        headers: {
          authorization: JSON.parse(localStorage.getItem("CUSTOMER_LOGIN_KEY"))
            .token
        }
      }
    )
      .then(response => {
        console.log(response);
        setFarmInfo(response.data.current_stock);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return farmInfo ? (
    <div>
      {farmInfo.map(item => {
        return (
          <div>
            <p>Product:{item.name}</p>
            <p># Available:{item.quantity}</p>
            <p>${item.price.toFixed(2)}</p>
            <button onClick= {() => addToCheckoutCart(item)}>Add to Cart</button>
          </div>
        );
      })}
    </div>
  ) : (
    <Load />
  );
}
