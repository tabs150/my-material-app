import React, { useState } from 'react';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { CssBaseline } from '@material-ui/core';
import { products } from './store';

const sections = [
  { title: 'Home', url: '#' },
  { title: 'Store', url: '#' },
  { title: 'IPhone', url: '#' },
  { title: 'IPad', url: '#' },
  { title: 'Macbook', url: '#' },
  { title: 'Accessories', url: '#' },
];

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (id) => {
    const product = products.find((prod) => prod.id === id);
    setCart([...cart, product]);
  };
  return (
    <>
      <CssBaseline />
      <Header title='BOUNCER' sections={sections} cart={cart} />

      <Home onHandleAddToCart={handleAddToCart} />
      <Footer />
    </>
  );
}

export default App;
