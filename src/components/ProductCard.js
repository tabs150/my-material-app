import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
// import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { makeStyles } from '@material-ui/core/styles';
import Rating from './Rating';
// import './cardOverlay.css';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 280,
    position: 'relative',
  },
  media: {
    height: 160,
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
  },
  contentAlign: {
    textAlign: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    height: 160,
    width: '100%',
    zIndex: 1,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    textAlign: 'center',
    padding: theme.spacing(4),
    backgroundColor: 'rgba(255,255,255,.8)',
    opacity: 0,
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      top: 0,
      opacity: 0.9,
    },
  },
  iconRoot: {
    display: 'flex',
    flexDirection: 'column',
    width: 'auto',
    borderWidth: '2px',
    borderStyle: 'solid',
  },
}));

export default function ProductCard({ product, onAddToCart }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.image}
        title={product.name}
      />
      <div className={classes.overlay}>
        <IconButton className={classes.iconRoot} size='small' color='primary'>
          <FavoriteBorderOutlinedIcon />
        </IconButton>
        <IconButton
          className={classes.iconRoot}
          size='small'
          color='primary'
          onClick={() => onAddToCart(product.id)}
        >
          <ShoppingCartOutlinedIcon />
        </IconButton>
      </div>
      <CardContent className={classes.contentAlign}>
        <Typography variant='h6' component='h2'>
          {product.name}
        </Typography>
        <Rating rating={product.rating} />
        <Typography component='p'>${product.price}</Typography>
      </CardContent>
    </Card>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object,
};
