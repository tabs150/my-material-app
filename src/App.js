import React from 'react';
// import Home from './components/Home';
import Header from './components/Header';

import { CssBaseline } from '@material-ui/core';
import ProductGrid from './components/ProductGrid';
// import Swipeable from './Samples/Swipeable';
import BrainCarousel from './Samples/BrainCarousel';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   gridContainer: {
//     display: 'flex',
//     maxWidth: '80%',
//     margin: 'auto',
//   },
// }));

const sections = [
  { title: 'Home', url: '#' },
  { title: 'Store', url: '#' },
  { title: 'IPhone', url: '#' },
  { title: 'IPad', url: '#' },
  { title: 'Macbook', url: '#' },
  { title: 'Accessories', url: '#' },
];

function App() {
  return (
    <>
      <CssBaseline />
      <Header title='BOUNCER' sections={sections} />
      <BrainCarousel />
      <ProductGrid />
    </>
  );
}

export default App;
