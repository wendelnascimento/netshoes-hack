import React from 'react';
import SuggestionsTag from '../SuggestionsTag/SuggestionsTag';

import './Suggestions.css';

const Suggestions = () => (
  <div className="suggestions">
    <span className="suggestionsTitle">Sugestões de consulta:</span>
    <ul className="suggestionsTagList">
      <SuggestionsTag>corda importado</SuggestionsTag>
      <SuggestionsTag>corda nautika</SuggestionsTag>
      <SuggestionsTag>corda rebook</SuggestionsTag>
      <SuggestionsTag>corda polimet</SuggestionsTag>
      <SuggestionsTag>corda de pular</SuggestionsTag>
      <SuggestionsTag>corda acte sports</SuggestionsTag>
    </ul>
  </div>
);

export default Suggestions;
