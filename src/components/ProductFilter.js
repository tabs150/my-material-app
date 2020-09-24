import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Typography, Box } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import macbook from '../images/macbook-pro.jpg';
import macbookAir from '../images/macbook-air.jpeg';
import iphone from '../images/iphone-cat.jpg';
// import iphone6 from '../images/iphone6.jpeg';
import iphone6s from '../images/iphone6s.jpg';
import iphoneX from '../images/iphone-x.jfif';
import airpods from '../images/airpods.jpeg';
import earpods from '../images/earpods.jpg';
// import cables from '../images/cables.jpeg';
// import ipad from '../images/ipad.jpg';
import ipadAir from '../images/ipad-air.jpg';
import ipad2 from '../images/ipad2.jpeg';
import imac from '../images/iMac.jfif';
// import imac2 from '../images/imac-back.jpg';
// import imacMini from '../images/imac-mini.webp';
import wlCharger from '../images/wireless-charger.webp';
import kbdCombo from '../images/imac-keyboard-combo.jpg';
import ProductCard from './ProductCard';

const items = [
  {
    name: 'iPhone 6',
    brand: 'Apple',
    model: 'iPhone 6',
    category: ['all', 'iphone', 'store'],
    type: 'smart-phone',
    price: 399,
    description:
      'This is a wider card with supporting text below as a natural lead-in.',
    image: iphone,
    imageText: 'Image Text',
    rating: 4,
    bgColor: '#FF6875',
    color: '#ffffff',
  },
  {
    name: 'MacBook Pro',
    brand: 'Apple',
    model: 'MacBook Pro 4',
    category: ['all', 'macbook', 'store'],
    type: 'macbook',
    price: 349,
    description:
      'This is a wider card with supporting text below as a natural lead-in.',
    image: macbookAir,
    imageText: 'Image Text',
    rating: 3,
    bgColor: '#F6F7F8',
    color: 'inherit',
  },
  {
    name: 'Airpods 2',
    brand: 'Apple',
    model: 'Airpods 3',
    category: ['all', 'accessories'],
    type: 'earphones',
    price: 29,
    description:
      'This is a wider card with supporting text below as a natural lead-in.',
    image: airpods,
    imageText: 'Image Text',
    rating: 1,
    bgColor: '#C1C8CE',
    color: 'inherit',
  },
  {
    name: 'iPhone 6s',
    brand: 'Apple',
    model: 'iPhone 6',
    category: ['all', 'iphone', 'store'],
    type: 'smart-phone',
    price: 399,
    description:
      'This is a wider card with supporting text below as a natural lead-in.',
    image: iphone6s,
    imageText: 'Image Text',
    rating: 4,
    bgColor: '#FF6875',
    color: '#ffffff',
  },
  {
    name: 'MacBook Pro 11',
    brand: 'Apple',
    model: 'MacBook Pro 11',
    category: ['all', 'macbook', 'store'],
    type: 'macbook',
    price: 349,
    description:
      'This is a wider card with supporting text below as a natural lead-in.',
    image: macbook,
    imageText: 'Image Text',
    rating: 3,
    bgColor: '#F6F7F8',
    color: 'inherit',
  },
  {
    name: 'Earpods',
    brand: 'Apple',
    model: 'Airpods 3',
    category: ['all', 'accessories'],
    type: 'earphones',
    price: 29,
    description:
      'This is a wider card with supporting text below as a natural lead-in.',
    image: earpods,
    imageText: 'Image Text',
    rating: 4,
    bgColor: '#C1C8CE',
    color: 'inherit',
  },
  {
    name: 'iPhone X',
    brand: 'Apple',
    model: 'iPhone X',
    category: ['all', 'iphone', 'store'],
    type: 'smart-phone',
    price: 399,
    description:
      'This is a wider card with supporting text below as a natural lead-in.',
    image: iphoneX,
    imageText: 'Image Text',
    rating: 4,
    bgColor: '#FF6875',
    color: '#ffffff',
  },
  {
    name: 'Ipad Air',
    brand: 'Apple',
    model: 'Ipad Pro 4',
    category: ['all', 'ipad', 'store'],
    type: 'ipad',
    price: 349,
    description:
      'This is a wider card with supporting text below as a natural lead-in.',
    image: ipadAir,
    imageText: 'Image Text',
    rating: 5,
    bgColor: '#F6F7F8',
    color: 'inherit',
  },
  {
    name: 'Wireless Charger',
    brand: 'Apple',
    model: 'Airpods 3',
    category: ['all', 'accessories'],
    type: 'wireless charger',
    price: 29,
    description:
      'This is a wider card with supporting text below as a natural lead-in.',
    image: wlCharger,
    imageText: 'Image Text',
    rating: 3,
    bgColor: '#C1C8CE',
    color: 'inherit',
  },
  {
    name: 'iPad X',
    brand: 'Apple',
    model: 'iPad 6',
    category: ['all', 'ipad', 'store'],
    type: 'smart-phone',
    price: 399,
    description:
      'This is a wider card with supporting text below as a natural lead-in.',
    image: ipad2,
    imageText: 'Image Text',
    rating: 2,
    bgColor: '#FF6875',
    color: '#ffffff',
  },
  {
    name: 'iMac',
    brand: 'Apple',
    model: 'iMac Pro',
    category: ['all', 'macbook', 'store'],
    type: 'macbook',
    price: 399,
    description:
      'This is a wider card with supporting text below as a natural lead-in.',
    image: imac,
    imageText: 'Image Text',
    rating: 5,
    bgColor: '#F6F7F8',
    color: 'inherit',
  },
  {
    name: 'Keyboard Combo',
    brand: 'Apple',
    model: 'Airpods 3',
    category: ['all', 'accessories'],
    type: 'keyboard',
    price: 229,
    description:
      'This is a wider card with supporting text below as a natural lead-in.',
    image: kbdCombo,
    imageText: 'Image Text',
    rating: 3,
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
