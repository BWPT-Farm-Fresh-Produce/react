import React from "react";
import { connect } from "react-redux";
import { addItemToCart } from "../../../actions/customerShopping";

function ConsumerDashboard(props) {
  return <div className="consumerDashboard"></div>;
}

const mapStateToProps = ({ customerShoppingReducer }) => {
  return {
    cart: customerShoppingReducer.cart
  };
};

export default connect(mapStateToProps, { addItemToCart })(ConsumerDashboard);
