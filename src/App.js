import React from 'react';
import Home from './components/Home';
import Header from './components/Header';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import { CssBaseline } from '@material-ui/core';
// import GridPaper from './Samples/GridPaper';

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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header title='BOUNCER' sections={sections} />
      <Home />
    </ThemeProvider>
  );
}

export default App;
