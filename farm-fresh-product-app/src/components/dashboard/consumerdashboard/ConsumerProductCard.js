import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../header/Header';

export default function ConsumerProductCard(props) {
  const [value, setValue] = useState(props.item);

  useEffect(() => {
    const id = props.match.params.id;
    if (!id) {
      return;
    }
    axios
      .get(
        `https://aqueous-ocean-41606.herokuapp.com//api/consumers/shop/:category/:categoryId${id}`
      )

      .then(response => {
        console.log(response);
        setValue(response.data);
      })

      .catch(error => {
        console.log('Error, oh to error:', error);
      });
  }, []);
  if (!value) {
    return null;
  }
  return (
    <div>
      <Header />
      <h3>~from ProductCard~</h3>
      <img src={value.image} />
      <p>Title: {value.name}</p>
      <p>Blurb: {value.status}</p>
      <button>Bring Me This Box</button>
    </div>
  );
}
