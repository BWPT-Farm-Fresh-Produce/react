import React from 'react';
import { Route } from 'react-router-dom';

import ProductList from './Consumer/ProductList';
import ConsumerCart from './Consumer/ConsumerCart';
import './App.css';

export default function App() {
  return (
    <main className="App">
      <h1>This is React.</h1>
      <Route exact path='/' component={ProductList} />
      <Route path='/cart/' component={ConsumerCart} />
    </main>
  );
}

