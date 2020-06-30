import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import macbook from '../images/macbookpro.jpg';

const useStyles = makeStyles({
  root: {
    maxWidth: 230,
  },
  media: {
    height: 110,
  },
});

const ProductCard = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={macbook}
        title='Apple MacBook Pro'
      />
      <CardContent>
        <Typography variant='h6' component='h2'>
          Apple MacBook Pro
        </Typography>
        <Typography component='p'>$495</Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
