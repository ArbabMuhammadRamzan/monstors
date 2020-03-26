import React from 'react';
import "./search.css";
export const Search = props => (
    <input className="search-box"
        type="search"
        placeholder="Search For Data"
        onChange={props.searchFtn}
    />
)