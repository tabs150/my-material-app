import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { BookmarkBorderOutlined } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  featureBox: {
    padding: theme.spacing(4),
    minHeight: '300px',
    textAlign: 'center',
  },
}));

export default function Feature(props) {
  const classes = useStyles();
  const { description, title } = props;

  return (
    <Paper className={classes.featureBox}>
      <IconButton>
        <BookmarkBorderOutlined />
      </IconButton>
      <Typography variant='h6' gutterBottom>
        {title}
      </Typography>
      <Typography>{description}</Typography>
    </Paper>
  );
}
