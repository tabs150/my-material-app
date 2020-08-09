import React from 'react';
// import Home from './components/Home';
import Header from './components/Header';

import { CssBaseline } from '@material-ui/core';
// import AltHead from './components/AltHead';
import Swipeable from './Samples/Swipeable';

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
      <Swipeable />
    </>
  );
}

export default App;
