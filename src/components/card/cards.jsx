import React from 'react';
import "./cards.css"
export const Cards = props => (
    <div className="card-container">
        <img src={`https://robohash.org/${props.monstor.id}?set=set2&size=180x180`} />
        <h1>{props.monstor.name}</h1>
        <p>{props.monstor.email}</p>
    </div>
);