import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';

import Header from '../../header/Header';
import ConsumerProductCard from './ConsumerProductCard';

export default function ConsumerProductList(props) {
  const [product, setProduct] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://aqueous-ocean-41606.herokuapp.com/api/consumers/shop/categories`,
  //       {
  //         headers: {
  //           authorization: localStorage.getItem('token'),
  //         },
  //       }
  //     )

  //     .then(response => {
  //       const productInfo = response.data;
  //       console.log(productInfo);
  //       setProduct(productInfo);
  //     })

  //     .catch(error => {
  //       console.log('Error, oh to error:', error);
  //     });
  // }, []);

  return (
    <div className='product-list'>
      {product.map(product => (
        <div className='product-card' key={product.id}>
          <Link to={`/product-list/${product.id}`}>
            <img 
              className='product-list-img'
            src={product.imageUrl}
            alt={product.name}
            />
            <p>{product.name}</p>
          </Link>
            <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
  //   <div>
  //     <Header />
  //     <h2>ProductList</h2>
  //     {product.map(attribute => (
  //       <Link to={`/product-list/${attribute.id}`}>
  //         <ConsumerProductCard {...props} key={product.id} item={attribute} />
  //       </Link>
  //     ))}
  //     }
  //     <Route
  //       exact
  //       path="/product-list/:id"
  //       render={props => <ConsumerProductCard {...props} attribute={product} />}
  //     />
  //   </div>
}
