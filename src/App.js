import React from 'react';
import Home from './components/Home';
import Header from './components/Header';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import { CssBaseline } from '@material-ui/core';
// import GridPaper from './Samples/GridPaper';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Home />
    </ThemeProvider>
  );
}

export default App;
