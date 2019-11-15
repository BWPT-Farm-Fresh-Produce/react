import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import ProductItems from './ProductItems';

import axios from 'axios';

export default function ProductList () {
    const [product, setProduct] = useState ([]);

    useEffect(() => {
        axios
            .get(`https://rickandmortyapi.com/api/character/`)
            .then(response => {
                const itemInfo = response.data.results;
                console.log(itemInfo);
                setProduct(itemInfo)
            })
            .catch(error => {
                console.log('Error, oh to error.', error)
            })
    }, [])

    //how to add LINK to 
    return (
        <div className='product-list'>
            <h2>Customizable Produce & Grocery Boxes</h2>
            {product.map(item => {return (<ProductItems item={item}/>)})}  
        </div>
        
    )
}