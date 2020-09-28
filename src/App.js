import React, { useState } from 'react';
import { CssBaseline } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { products, sections } from './store';

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (id) => {
    const product = products.find((prod) => prod.id === id);
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (id) => {
    const filteredProducts = cart.filter((prod) => prod.id !== id);
    setCart([filteredProducts]);
  };

  return (
    <>
      <CssBaseline />
      <Header
        title='BOUNCER'
        sections={sections}
        cart={cart}
        handleRemoveFromCart={handleRemoveFromCart}
      />

      <Home onHandleAddToCart={handleAddToCart} />

      {cart.length > 0 ? (
        <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} />
      ) : (
        <Typography component='h2'>Cart is empty</Typography>
      )}

      <Footer />
    </>
  );
}

export default App;
