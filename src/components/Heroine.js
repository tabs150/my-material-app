import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  heroPost: {
    position: 'relative',
    height: '70vh',
    backgroundColor: '#2E90E5',
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    overflowY: 'hidden',
  },
  innerGrid: {
    width: '80%',
    margin: 'auto',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  heroPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  heroPostImage: {
    position: 'relative',
    top: '-100px',
  },
}));

export default function Heroine(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Paper className={classes.heroPost}>
      <div className={classes.overlay} />
      <Container maxWidth='lg' mx='auto'>
        <Grid container>
          <Grid item md={6}>
            <div className={classes.heroPostContent}>
              <Typography
                component='h1'
                variant='h3'
                color='inherit'
                gutterBottom
              >
                {post.title}
              </Typography>
              <Typography variant='h5' color='inherit' paragraph>
                {post.description}
              </Typography>
              <Link variant='subtitle1' href='#'>
                {post.linkText}
              </Link>
            </div>
          </Grid>
          <Grid item md={6}>
            <img
              className={classes.heroPostImage}
              src={post.image}
              alt={post.imageText}
            />
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}

Heroine.propTypes = {
  post: PropTypes.object,
};
