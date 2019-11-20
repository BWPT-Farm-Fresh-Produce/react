import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';

import Header from '../header/Header';
import ConsumerProductCard from './ConsumerProductCard';

export default function ConsumerProductList(props) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://farm-fresh-bw.herokuapp.com/api/consumers/shop/categories`,
        {
          headers: {
            authorization: localStorage.getItem('token'),
          },
        }
      )

      .then(response => {
        const productInfo = response.data;
        console.log(productInfo);
        setProduct(productInfo);
      })

      .catch(error => {
        console.log('Error, oh to error:', error);
      });
  }, []);

  return (
    <div>
      <Header />
      <h2>ProductList</h2>
      {product.map(attribute => (
        <Link to={`/product-list/${attribute.id}`}>
          <ConsumerProductCard {...props} key={product.id} item={attribute} />
        </Link>
      ))}
      }
      <Route
        exact
        path="/product-list/:id"
        render={props => <ConsumerProductCard {...props} attribute={product} />}
      />
    </div>
  );
}
