import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    border: 0,
    minHeight: '40vh',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: '50%',
  },
});

export default function LatestNews(props) {
  const classes = useStyles();
  const { product } = props;
  const bgColor = product.bgColor;
  return (
    <Grid item xs={12} md={4}>
      <CardActionArea component='a' href='#'>
        <Card
          className={classes.card}
          style={{ backgroundColor: `${bgColor}` }}
        >
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component='h2' variant='h5'>
                {product.name}
              </Typography>
              <Typography variant='subtitle1' paragraph>
                {product.description}
              </Typography>
              <Typography component='h5' variant='h3'>
                $ {product.price}
              </Typography>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia
              className={classes.cardMedia}
              image={product.image}
              title={product.imageTitle}
            />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

LatestNews.propTypes = {
  post: PropTypes.object,
};
