import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import ProductListPage from './components/ProductListPage/ProductListPage';
import ProductDetailPage from './components/ProductDetailPage/ProductDetailPage';

import header from './header.png';
import footer from './footer.png';
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <img src={header} alt="header" style={{width: "100%"}} />
        <Router>
          <Switch>
            <Route path="/product/:sku" component={ProductDetailPage} />
            <Route path="/" component={ProductListPage} />
          </Switch>
        </Router>
        <img src={footer} alt="footer" style={{width: "100%", marginTop: 48}} />
      </div>
    );
  }
}

export default App;
