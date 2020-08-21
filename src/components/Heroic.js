import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import BrainCarousel from '../Samples/BrainCarousel';
// import SlickCarousel from '../Samples/SlickCarousel';

const useStyles = makeStyles((theme) => ({
  heroPost: {
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

export default function Heroic() {
  const classes = useStyles();

  return (
    <Paper className={classes.heroPost}>
      <BrainCarousel />
    </Paper>
  );
}
