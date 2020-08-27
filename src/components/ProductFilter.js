import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import macbook from '../images/macbook-pro.jpg';
import iphone from '../images/iphone11.jpeg';
import airpods from '../images/airpods.jpeg';
import ProductCard from './ProductCard';

const items = [
  {
    name: 'iPhone 6',
    brand: 'Apple',
    model: 'iPhone 6',
    category: ['all', 'iphone', 'store'],
    type: 'smart-phone',
    price: '399',
    description:
      'This is a wider card with supporting text below as a natural lead-in.',
    image: iphone,
    imageText: 'Image Text',
    bgColor: '#FF6875',
    color: '#ffffff',
  },
  {
    name: 'MacBook Pro',
    brand: 'Apple',
    model: 'MacBook Pro 4',
    category: ['all', 'macbook', 'store'],
    type: 'macbook',
    price: '349',
    description:
      'This is a wider card with supporting text below as a natural lead-in.',
    image: macbook,
    imageText: 'Image Text',
    bgColor: '#F6F7F8',
    color: 'inherit',
  },
  {
    name: 'Airpods 2',
    brand: 'Apple',
    model: 'Airpods 3',
    category: ['all', 'accessories'],
    type: 'earphones',
    price: '29',
    description:
      'This is a wider card with supporting text below as a natural lead-in.',
    image: airpods,
    imageText: 'Image Text',
    bgColor: '#C1C8CE',
    color: 'inherit',
  },
  {
    name: 'iPhone 6s',
    brand: 'Apple',
    model: 'iPhone 6',
    category: ['all', 'iphone', 'store'],
    type: 'smart-phone',
    price: '399',
    description:
      'This is a wider card with supporting text below as a natural lead-in.',
    image: iphone,
    imageText: 'Image Text',
    bgColor: '#FF6875',
    color: '#ffffff',
  },
  {
    name: 'MacBook Pro 11',
    brand: 'Apple',
    model: 'MacBook Pro 11',
    category: ['all', 'macbook', 'store'],
    type: 'macbook',
    price: '349',
    description:
      'This is a wider card with supporting text below as a natural lead-in.',
    image: macbook,
    imageText: 'Image Text',
    bgColor: '#F6F7F8',
    color: 'inherit',
  },
  {
    name: 'Earpods',
    brand: 'Apple',
    model: 'Airpods 3',
    category: ['all', 'accessories'],
    type: 'earphones',
    price: '29',
    description:
      'This is a wider card with supporting text below as a natural lead-in.',
    image: airpods,
    imageText: 'Image Text',
    bgColor: '#C1C8CE',
    color: 'inherit',
  },
  {
    name: 'iPhone X',
    brand: 'Apple',
    model: 'iPhone 6',
    category: ['all', 'iphone', 'store'],
    type: 'smart-phone',
    price: '399',
    description:
      'This is a wider card with supporting text below as a natural lead-in.',
    image: iphone,
    imageText: 'Image Text',
    bgColor: '#FF6875',
    color: '#ffffff',
  },
  {
    name: 'MacBook Air',
    brand: 'Apple',
    model: 'MacBook Pro 4',
    category: ['all', 'macbook', 'store'],
    type: 'macbook',
    price: '349',
    description:
      'This is a wider card with supporting text below as a natural lead-in.',
    image: macbook,
    imageText: 'Image Text',
    bgColor: '#F6F7F8',
    color: 'inherit',
  },
  {
    name: 'Earpods 2',
    brand: 'Apple',
    model: 'Airpods 3',
    category: ['all', 'accessories'],
    type: 'earphones',
    price: '29',
    description:
      'This is a wider card with supporting text below as a natural lead-in.',
    image: airpods,
    imageText: 'Image Text',
    bgColor: '#C1C8CE',
    color: 'inherit',
  },
];

const categories = [
  { title: 'store', url: '/#' },
  { title: 'iphone', url: '/#' },
  { title: 'ipad', url: '/#' },
  { title: 'macbook', url: '/#' },
  { title: 'accessories', url: '/#' },
];

const allCat = 'all';

const useStyles = makeStyles((theme) => ({
  grid: {
    width: '80%',
    margin: 'auto',
  },
  section: {
    padding: theme.spacing(8, 0),
  },
  sectionTitle: {
    flex: 1,
    height: '4rem',
    alignItems: 'center',
    textTransform: 'uppercase',
  },
  toolbarLink: {
    padding: theme.spacing(5),
    textTransform: 'uppercase',
  },
}));

export default function ProductFilter() {
  const classes = useStyles();
  const [filter, setFilter] = useState('all');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(items);
  }, []);

  useEffect(() => {
    setProducts([]);
    const filtered = items.map((item) => ({
      ...item,
      filtered: item.category.includes(filter),
    }));
    setProducts(filtered);
  }, [filter]);
  return (
    <Container>
      <Grid container className={classes.grid}>
        <Grid item xs={12}>
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
        </Grid>
        <Grid item xs={12}>
          <Link
            noWrap
            key={allCat}
            active={(filter === allCat).toString()}
            variant='body1'
            href='/#'
            className={classes.toolbarLink}
            onClick={() => setFilter(allCat)}
          >
            {allCat}
          </Link>
          {categories.map((category) => (
            <Link
              noWrap
              key={category.title}
              active={(filter === category.title).toString()}
              variant='body1'
              href={category.url}
              className={classes.toolbarLink}
              onClick={() => setFilter(category.title)}
            >
              {category.title}
            </Link>
          ))}
        </Grid>
      </Grid>
      <Grid container className={classes.grid}>
        {products.map((item) =>
          item.filtered === true ? (
            <Grid item key={item.name} xs={12} sm={4} md={3}>
              <ProductCard product={item} />
            </Grid>
          ) : (
            ''
          )
        )}
      </Grid>
    </Container>
  );
}
