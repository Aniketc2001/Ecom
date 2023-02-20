import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./pages/style.css";
import LoginForm from './pages/LoginForm';
import CheckoutPage from './pages/CheckoutPage';
import ProductPage from './pages/ProductPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginForm} />
      
        <Route path="/checkout" component={CheckoutPage} />
        <Route path="/product" component={ProductPage} />
      </Switch>
    </Router>
  );
};

export default App;

