import React from 'react';
import ResultsListHeader from '../ResultsListHeader/ResultsListHeader';
import ResultsListItems from '../ResultsListItems/ResultsListItems';

const ResultsList = ({ products }) => (
  <div>
    <ResultsListHeader />
    <ResultsListItems products={products} />
  </div>
);

export default ResultsList;
