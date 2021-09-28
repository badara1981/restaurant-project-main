import React from 'react';
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';

import Home from './components/Home';
import Products from './components/Products/Products';
import { pizzaMenu, salatMenu, getränkeMenu } from './components/Products/data';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Home />
      <Products heading='Pizzas'    data={pizzaMenu} />
      <Products heading='Salat'     data={salatMenu} />
      <Products heading='Gentränke' data={getränkeMenu} />
      <Footer />
    </Router>
  );
}

export default App;
