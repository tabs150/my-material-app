import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  toolbarBox: {
    width: '80%',
    margin: 'auto',
  },
  toolbarNav: {
    flex: 1,
  },
  toolbar: {
    justifyContent: 'space-between',
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    textAlign: 'center',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    textTransform: 'uppercase',
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections, title } = props;

  return (
    <Box className={classes.toolbarBox}>
      <Toolbar className={classes.toolbar}>
        <Button size='small'>Subscribe</Button>

        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant='outlined' size='small'>
          Sign up
        </Button>
      </Toolbar>
      <Toolbar
        component='nav'
        variant='dense'
        className={classes.toolbarSecondary}
      >
        <Grid container>
          <Grid item xs={12}>
            <Typography
              component='h2'
              variant='h5'
              color='inherit'
              align='center'
              noWrap
              className={classes.toolbarTitle}
            >
              {title}
            </Typography>
          </Grid>
          <Grid item className={classes.toolbarNav}>
            {sections.map((section) => (
              <Link
                color='inherit'
                noWrap
                key={section.title}
                variant='body2'
                href={section.url}
                className={classes.toolbarLink}
              >
                {section.title}
              </Link>
            ))}
          </Grid>
        </Grid>
      </Toolbar>
    </Box>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
