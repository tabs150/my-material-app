import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import ProductCard from './ProductCard';
import ProductBox from './ProductBox';
import LatestNews from './LatestNews';
import Feature from './Feature';
import Hero from './Hero';
import Heroine from './Heroine';
import Footer from './Footer';
import { makeStyles } from '@material-ui/core/styles';
import macbook from '../images/macbookpro.jpg';
import iphone from '../images/iPhone-5.png';

const heroPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: macbook,
  imgText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 15',
    description:
      'This is a wider card with supporting text below as a natural lead-in.',
    image: macbook,
    imageText: 'Image Text',
  },
  {
    title: 'Latest News',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in.',
    image: macbook,
    imageText: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in.',
    image: macbook,
    imageText: 'Image Text',
  },
];
const topProducts = [
  {
    name: 'iPhone 6',
    brand: 'Apple',
    model: 'iPhone 6',
    category: 'iphone',
    type: 'smart-phone',
    price: '399',
    description:
      'This is a wider card with supporting text below as a natural lead-in.',
    image: iphone,
    imageText: 'Image Text',
    bgColor: '#FF6875',
  },
  {
    name: 'Oculus Rift',
    brand: 'Oculus',
    model: 'Rift 4',
    category: 'accessories',
    type: 'accessories',
    price: '349',
    description:
      'This is a wider card with supporting text below as a natural lead-in.',
    image: macbook,
    imageText: 'Image Text',
    bgColor: '#F6F7F8',
  },
  {
    name: 'GoPro 6',
    brand: 'GoPro',
    model: 'Hero 6',
    category: 'Camera',
    type: 'camera',
    price: '299',
    description:
      'This is a wider card with supporting text below as a natural lead-in.',
    image: macbook,
    imageText: 'Image Text',
    bgColor: '#C1C8CE',
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
  topProducts: {
    width: '80%',
    margin: '-100px auto auto',
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Hero post={heroPost} />

      <Grid container spacing={0} className={classes.topProducts}>
        {topProducts.map((product) => (
          <ProductBox key={product.name} product={product} />
        ))}
      </Grid>

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

      <Heroine post={heroPost} />

      <Grid container spacing={4} className={classes.grid}>
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

      <Grid container spacing={4} className={classes.grid}>
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
