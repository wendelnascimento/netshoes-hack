import React from 'react';
import { Link } from 'react-router-dom';
import './Breadcrumbs.css';

const Breadcrumbs = ({ detail }) => (
  <ul className="breadcrumbs">
    <li>
      <Link to="/">Home</Link>
    </li>
    {
      detail ?
        <React.Fragment>
          <li>
            <Link to="/">Fitness e Musculação</Link>
          </li>
          <li>
            <Link to="/">Cordas</Link>
          </li>
        </React.Fragment> :
        <li>
          <Link to="/">corda</Link>
        </li>
    }
  </ul>
);

export default Breadcrumbs;
