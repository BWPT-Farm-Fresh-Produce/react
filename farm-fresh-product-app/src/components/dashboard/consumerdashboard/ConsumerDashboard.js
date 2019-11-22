import React, { useState } from "react";
import { Route, Link } from 'react-router-dom';
import { connect } from "react-redux";
import { addItemToCart } from "../../../actions/customerShopping";

// import { makeStyles } from "@material-ui/core/styles";
// import IconButton from "@material-ui/core/IconButton";
// import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

import ConsumerHome from './ConsumerHome';
import ConsumerProductList from './ConsumerProductList';
import ConsumerProductCard from './ConsumerProductCard';
import ConsumerCheckoutCart from './ConsumerCheckout';

// for Materials UI
// const useStyles = makeStyles(theme => ({
//   button: {
//     margin: theme.spacing(1)
//   },
//   input: {
//     display: "none"
//   }
// }));

function ConsumerDashboard(props) {
  // const classes = useStyles();
  const [item] = useState();

  const [cartItems, setCartItems] = useState ( [] );
  const addToCheckoutCart = item => {
    setCartItems( previousCartItems => [...previousCartItems, item] )
  }

  return <div><div className="consumerDashboard"></div>
  <div className="App">
      <nav>
        <h1 className="header">Farm Fresh Produce</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <br />
          <Link to="/product-list">Produce</Link>
          <br />
          <Link to='/checkout-cart'> Cart
            {/* <IconButton className={classes.button} aria-label="delete">
            <AddShoppingCartIcon />
            </IconButton> */}
          </Link>
          <Link to="/product-list/:id" />
        </div>
      </nav>

      <Route exact path="/" component={ConsumerHome} />
      <Route
        exact
        path="/product-list"
        render={props => <ConsumerProductList {...props} product={item} />}
      />
      <Route
        path="/product-list/:id"
        render={props => <ConsumerProductCard {...props} product={item} addToCheckoutCart={addToCheckoutCart} />}
      />
      <Route 
        path='/checkout-cart'
        render={props => <ConsumerCheckoutCart {...props} cartItems={cartItems} /> }
      />
    </div>
    </div>
}

const mapStateToProps = ({ customerShoppingReducer }) => {
  return {
    cart: customerShoppingReducer.cart
  };
};

export default connect(mapStateToProps, { addItemToCart })(ConsumerDashboard);
