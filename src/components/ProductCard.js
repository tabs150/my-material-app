import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Rating from './Rating';
import './cardOverlay.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 280,
  },
  media: {
    height: 160,
  },
  contentAlign: {
    textAlign: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(255,255,255,.3)',
  },
});

export default function ProductCard(props) {
  const classes = useStyles();
  const { product } = props;
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.image}
        title='Apple MacBook Pro'
      />
      <div className='projects_btns'>
        <Link variant='subtitle1' className='projects_btn' href='#'>
          <i className='fas fa-eye'></i> Preview
        </Link>
        <Link variant='subtitle1' className='projects_btn' href='#'>
          <i className='fab fa-github'></i> Github
        </Link>
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
