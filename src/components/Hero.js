import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  heroPost: {
    position: 'relative',
    height: '90vh',
    backgroundColor: theme.palette.red,
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'linear-gradient(45deg, #FF4858, #8F65FF)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  innerGrid: {
    width: '80%',
    height: '100%',
    margin: 'auto',
    display: 'table',
  },
  tableCell: {
    display: 'table-cell',
    verticalAlign: 'middle',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  heroPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

export default function HeroPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Paper className={classes.heroPost}>
      {/* Increase the priority of the hero background image */}
      {
        <img
          style={{ display: 'none' }}
          src={post.image}
          alt={post.imageText}
        />
      }
      <div />
      <Grid container className={classes.innerGrid}>
        <Grid item className={classes.tableCell} md={6}>
          <div className={classes.heroPostContent}>
            <Typography
              component='h1'
              variant='h4'
              color='inherit'
              gutterBottom
            >
              {post.title}
            </Typography>
            <Typography variant='body1' color='inherit' paragraph>
              {post.description}
            </Typography>
            <Link variant='subtitle1' href='#'>
              {post.linkText}
            </Link>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

HeroPost.propTypes = {
  post: PropTypes.object,
};
