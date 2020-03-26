import React from 'react';
import "./card-list.css"
import { Cards } from '../card/cards.jsx'
export const CardList = props => (
    <div className="card-list">
        {props.monstors.map(monstor => (<Cards key={monstor.id} monstor={monstor} />))}
    </div>

);