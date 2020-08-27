import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 230,
  },
  media: {
    height: 110,
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
      <CardContent>
        <Typography variant='h6' component='h2'>
          {product.name}
        </Typography>
        <Typography component='p'>${product.price}</Typography>
      </CardContent>
    </Card>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object,
};
