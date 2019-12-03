import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

export default function ConsumerHome (props) {
  const routeToProducts = event => {
    props.history.push('/product-list');
  };
    console.log(routeToProducts)

    const classes = useStyles();

  return (
    <div className='home-wrapper'>
      <img className='home-image'
          src='https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
          alt=''
      />
      <Button 
        onClick={routeToProducts} 
        variant="contained" 
        color="primary" 
        className='shop-button' 
        className={classes.button} >
        Get your Veggies!
      </Button>
      {/* <button onClick={routetoProducts} className='shop-button'>Time to Shop</button> */}
    </div>
  );
}