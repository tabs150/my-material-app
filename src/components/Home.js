import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import ProductCard from './ProductCard';
import Hero from './Hero';
import { makeStyles } from '@material-ui/core/styles';

const heroPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
  linkText: 'Continue reading…',
};

const useStyles = makeStyles((theme) => ({
  grid: {
    width: '80%',
    margin: 'auto',
  },
  sectionTitle: {
    flex: 1,
    height: '4rem',
    alignItems: 'center',
    textTransform: 'uppercase',
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Hero post={heroPost} />
      <Typography
        component='h2'
        variant='h5'
        color='inherit'
        align='center'
        noWrap
        className={classes.sectionTitle}
      >
        Best Seller
      </Typography>
      <Grid container spacing={2} className={classes.grid}>
        <Grid item xs={6} sm={3}>
          <ProductCard />
        </Grid>
        <Grid item xs={6} sm={3}>
          <ProductCard />
        </Grid>
        <Grid item xs={6} sm={3}>
          <ProductCard />
        </Grid>
        <Grid item xs={6} sm={3}>
          <ProductCard />
        </Grid>
        <Grid item xs={6} sm={3}>
          <ProductCard />
        </Grid>
        <Grid item xs={6} sm={3}>
          <ProductCard />
        </Grid>
        <Grid item xs={6} sm={3}>
          <ProductCard />
        </Grid>
        <Grid item xs={6} sm={3}>
          <ProductCard />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
