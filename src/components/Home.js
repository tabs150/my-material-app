import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import ProductCard from './ProductCard';
import LatestNews from './LatestNews';
import Feature from './Feature';
import Hero from './Hero';
import Footer from './Footer';
import { makeStyles } from '@material-ui/core/styles';

const heroPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 15',
    description:
      'This is a wider card with supporting text below as a natural lead-in.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    title: 'Latest Newa',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
];

const features = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum.',
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
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <Feature title={features.title} description={features.description} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Feature title={features.title} description={features.description} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Feature title={features.title} description={features.description} />
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        {featuredPosts.map((post) => (
          <LatestNews key={post.title} post={post} />
        ))}
      </Grid>
      <Footer
        title='Footer'
        description='Something here to give the footer a purpose!'
      />
    </>
  );
};

export default Home;
