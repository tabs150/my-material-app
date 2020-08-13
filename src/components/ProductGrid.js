import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ProductCard from './ProductCard';

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    maxWidth: '80%',
    margin: 'auto',
  },
  grid: {
    width: '960px',
    margin: 'auto',
  },
}));

function ProductGrid() {
  const classes = useStyles();
  return (
    <div className={classes.gridContainer}>
      <Grid container spacing={3} className={classes.grid}>
        <Grid item xs={12} sm={6} md={3}>
          <ProductCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ProductCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ProductCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ProductCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ProductCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ProductCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ProductCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ProductCard />
        </Grid>
      </Grid>
    </div>
  );
}

export default ProductGrid;
