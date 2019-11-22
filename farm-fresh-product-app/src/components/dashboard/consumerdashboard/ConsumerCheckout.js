import React from 'react';

export default function ConsumerCheckoutCart ({ cartItems }) {
  console.log(cartItems)
  return (
    <div className='checkout-cart'>
      <h3>Your Cart:</h3>
      {cartItems.map(item => (
        <span className='saved-item'>{item.name}</span>
      ))}
    </div>
  )
}