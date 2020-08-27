import React from 'react';
// import Home from './components/Home';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import { CssBaseline } from '@material-ui/core';
// import ProductGrid from './components/ProductGrid';
// import GridProf from './Samples/GridProf';
// import Portfolio from './Samples/Portfolio';
import ProductFilter from './components/ProductFilter';
// import ProductGrid from './components/ProductGrid';
// import { makeStyles } from '@material-ui/core/styles';
// import GalleryFilter from './MyGalFilter/GalleryFilter';
// import './MyGalFilter/App.scss';
// const useStyles = makeStyles((theme) => ({
//   gridContainer: {
//     display: 'flex',
//     maxWidth: '80%',
//     margin: 'auto',
//   },
// }));

// const sections = [
//   { title: 'Home', url: '#' },
//   { title: 'Store', url: '#' },
//   { title: 'IPhone', url: '#' },
//   { title: 'IPad', url: '#' },
//   { title: 'Macbook', url: '#' },
//   { title: 'Accessories', url: '#' },
// ];

function App() {
  return (
    <>
      {/* <CssBaseline /> */}
      {/* <Header title='BOUNCER' sections={sections} /> */}
      {/* <BrainCarousel /> */}
      <ProductFilter />
      {/* <div className='App'>
        <Portfolio />
      </div> */}
      {/* <Home /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
