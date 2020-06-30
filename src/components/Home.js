import React from 'react';
import { Grid } from '@material-ui/core';
import ProductCard from './ProductCard';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  grid: {
    width: '80%',
    margin: 'auto',
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={2} className={classes.grid}>
      <Grid item xs={6} sm={3} align='center'>
        <ProductCard />
      </Grid>
      <Grid item xs={6} sm={3} align='center'>
        <ProductCard />
      </Grid>
      <Grid item xs={6} sm={3} align='center'>
        <ProductCard />
      </Grid>
      <Grid item xs={6} sm={3} align='center'>
        <ProductCard />
      </Grid>
      <Grid item xs={6} sm={3} align='center'>
        <ProductCard />
      </Grid>
      <Grid item xs={6} sm={3} align='center'>
        <ProductCard />
      </Grid>
      <Grid item xs={6} sm={3} align='center'>
        <ProductCard />
      </Grid>
      <Grid item xs={6} sm={3} align='center'>
        <ProductCard />
      </Grid>
    </Grid>
  );
};

export default Home;
