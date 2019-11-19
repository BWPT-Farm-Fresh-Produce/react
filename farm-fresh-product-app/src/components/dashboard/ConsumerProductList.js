import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';

import ProductCard from './ProductCard';

export default function ConsumerProductList (props) {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios
            .get(`https://farm-fresh-bw.herokuapp.com/api/consumers/shop/categories`)

            .then(response => {
                const productInfo = response.data;
                console.log(productInfo);
                setProduct(productInfo);
            })

            .catch(error => {
                console.log('Error, oh to error:', error)
            })
    }, [])

    return (
        <div>
            <h2>ProductList</h2>
            {product.map(attribute => (
                <Link to={`/product-list/${attribute.id}`}><ProductCard {...props} key={product.id} item = {attribute} />
                </Link>
                )
            )}}
        
        <Route 
            exact path='/product-list/:id'
            render={props => <ProductCard {...props} attribute ={product} />}
        />
        </div>
    )
}