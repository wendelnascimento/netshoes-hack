import React from 'react';
import ListItem from '../ListItem/ListItem';
import './ResultsListItems.css';

const ResultsListItems = ({ products }) => (
  <div className="resultsListItems">
    {
      products.map(p => <ListItem product={p} key={p.code} />)
    }
  </div>
);

export default ResultsListItems;
