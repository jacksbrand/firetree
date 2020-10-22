import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

import HomePage from './pages/homepage/homepage.component';
import ProductPage from './pages/product/product.component';
import CartPage from './pages/cart/cart.component';

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/product/:id" component={ProductPage} />
          <Route path="/cart/:id?" component={CartPage} />
          <Route exact path="/" component={HomePage} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
