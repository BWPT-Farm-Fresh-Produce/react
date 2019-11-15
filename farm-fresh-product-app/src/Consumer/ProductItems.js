import React from 'react'

export default function ProductItems ({ item }) {

    return (
        <div>
            <h5>ProductItems page</h5>
            <img src={item.image} />
            <h3>Type of Produce Box: {item.name}</h3>
            <p>Blurb:{item.status}</p>
            <p>Cost:{item.species}</p>
            <p>Producer:{item.origin.name} </p>
        </div>
    )
}