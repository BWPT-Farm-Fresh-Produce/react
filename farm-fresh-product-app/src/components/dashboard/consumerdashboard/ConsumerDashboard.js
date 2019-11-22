import React, { useState, useEffect } from "react";
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
import Axios from "axios";

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
  const [farms, setFarms] = useState([]);

  const [cartItems, setCartItems] = useState ( [] );

  useEffect(() => {
    Axios
      .get('https://aqueous-ocean-41606.herokuapp.com/api/farms/',{
        headers: {
          authorization: JSON.parse(localStorage.getItem('CUSTOMER_LOGIN_KEY')).token
        }
      } )
      .then(response => {
        console.log(response.data)
        setFarms(response.data)
      })
      .catch(error => {
        console.log('Error, oh to error:',error)
      })
  }, [])

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

      {farms.map(farm => {
        return <Link key={farm.id} to={`/farms/${farm.id}`}>{farm.name}</Link>
      })}
      {/* <Route exact path="/" component={ConsumerHome} />
      <Route
        exact
        path="/product-list"
        render={props => <ConsumerProductList {...props} />}
      />
      <Route
        path="/product-list/:id"
        render={props => <ConsumerProductCard {...props} addToCheckoutCart={addToCheckoutCart} />}
      />
      <Route 
        path='/checkout-cart'
        render={props => <ConsumerCheckoutCart {...props} cartItems={cartItems} /> }
      /> */}
    </div>
    </div>
}

const mapStateToProps = ({ customerShoppingReducer }) => {
  return {
    cart: customerShoppingReducer.cart
  };
};

export default connect(mapStateToProps, { addItemToCart })(ConsumerDashboard);
