import React from 'react';
import './SuggestionsTag.css';

const SuggestionsTag = ({ children }) => (
  <li className="suggestionsTag">
    {children}
  </li>
);

export default SuggestionsTag;