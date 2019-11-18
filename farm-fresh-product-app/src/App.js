import React from 'react';
import { Route } from 'react-router-dom';

import ConsumerProductList from './Consumer/ConsumerProductList'
import ConsumerProductItems from './Consumer/ConsumerProductItems';
import ConsumerCart from './Consumer/ConsumerCart';
import './App.css';

export default function App() {
  return (
    <main className="App">
      <h1>Farm Fresh Produce</h1>
      <Route exact path='/' component={ConsumerProductList} />
      <Route path='/products/:id' component={ConsumerProductItems} />
      <Route path='/cart/' component={ConsumerCart} />
    </main>
  );
}

