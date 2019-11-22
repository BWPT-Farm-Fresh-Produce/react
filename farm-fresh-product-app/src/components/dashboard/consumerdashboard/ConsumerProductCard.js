import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../header/Header';
import ProductForm from './ConsumerProductForm';

export default function ConsumerProductCard({item}) {
  const [value, setValue] = useState(item);

  // useEffect(() => {
  //   const id = props.match.params.id;
  //   if (!id) {
  //     return;
  //   }
  //   axios
  //     .get(
  //       `https://aqueous-ocean-41606.herokuapp.com//api/consumers/shop/:category/:categoryId${id}`
  //     )

  //     .then(response => {
  //       console.log(response);
  //       setValue(response.data);
  //     })

  //     .catch(error => {
  //       console.log('Error, oh to error:', error);
  //     });
  // }, []);
  // if (!value) {
  //   return null;
  // }
  return (
    <div className='item-wrap'>
      <div className='item-header'>
        <div className='image-wrap'>
          <img src={item.imageUrl} alt={item.name} />
        </div>
        <div className='item-title-wrap'>
          <h2>{item.name}</h2>
          <h3>Farm: {item.farm_name}</h3>
          <h4>Price: ${item.price}</h4>
          <ProductForm />
          <button 
            className="Product-buy-button" 
            onClick= {() => item.addToCheckoutCart (item)}>Add to cart</button>
        </div>
      </div>
    </div>
  );
    // <div>
    //   <Header />
    //   <h3>~from ProductCard~</h3>
    //   <img src={value.image} />
    //   <p>Title: {value.name}</p>
    //   <p>Blurb: {value.status}</p>
    //   <button>Bring Me This Box</button>
    // </div>
}
