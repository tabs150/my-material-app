import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import HeroCarousel from './HeroCarousel';

const useStyles = makeStyles((theme) => ({
  heroPost: {
    height: '70vh',
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
    height: '80%',
    margin: 'auto',
  },
  tableCell: {
    display: 'table-cell',
    verticalAlign: 'middle',
  },
  overlay: {
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
}));

export default function Hero(props) {
  const classes = useStyles();
  const { heroposts } = props;
  return (
    <Paper className={classes.heroPost}>
      <Box className={classes.innerGrid}>
        <HeroCarousel posts={heroposts} />
      </Box>
    </Paper>
  );
}

Hero.propTypes = {
  post: PropTypes.object,
};
