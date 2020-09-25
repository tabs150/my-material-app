import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Typography, Box } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import ProductCard from './ProductCard';
import { products as items } from '../store';

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
    padding: theme.spacing(3, 0),
  },
  sectionTitle: {
    flex: 1,
    height: '4rem',
    alignItems: 'center',
    textTransform: 'uppercase',
  },
  toolbarLink: {
    padding: theme.spacing(2),
  },
  boxCenter: {
    textAlign: 'center',
    textTransform: 'capitalize',
  },
}));

export default function ProductFilter({ addToCart }) {
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
      <Grid container>
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
          <Box py={5} className={classes.boxCenter}>
            <Link
              noWrap
              key={allCat}
              active={(filter === allCat).toString()}
              variant='body1'
              href='/#product-filter'
              className={classes.toolbarLink}
              onClick={() => setFilter(allCat)}
              gutterBottom
            >
              {allCat}
            </Link>
            {categories.map((category) => (
              <Link
                noWrap
                key={category.title}
                active={(filter === category.title).toString()}
                variant='body1'
                href='/#product-filter'
                className={classes.toolbarLink}
                onClick={() => setFilter(category.title)}
              >
                {category.title}
              </Link>
            ))}
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        {products.map((item) =>
          item.filtered === true ? (
            <Grid item key={item.name} xs={12} sm={4} md={3}>
              <ProductCard product={item} onAddToCart={addToCart} />
            </Grid>
          ) : (
            ''
          )
        )}
      </Grid>
    </Container>
  );
}
