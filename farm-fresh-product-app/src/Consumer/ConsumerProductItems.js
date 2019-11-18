import React from 'react'

export default function ConsumerProductItems ({ item }) {

    return (
        <div>
            <h3>Type of Produce Box: {item.name}</h3>
            <img src={item.image} />
            <p>Blurb:{item.status}</p>
            <button>Send me this Box</button>
        </div>
    )
}