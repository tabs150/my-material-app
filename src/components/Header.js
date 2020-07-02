import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import {
  AccountCircleOutlined,
  ShoppingBasketOutlined,
} from '@material-ui/icons';

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
    padding: theme.spacing(2),
  },
  toolbar: {
    marginBottom: '2rem',
    borderBottom: `1px solid ${theme.palette.divider}`,
    textTransform: 'uppercase',
  },
  toolbarTitle: {
    flex: 1,
    height: '4rem',
    alignItems: 'center',
    color: '#FF4252',
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
        <Button size='small'>EN USD</Button>

        <Box ml='auto'>
          <IconButton size='small'>
            <AccountCircleOutlined /> My Profile
          </IconButton>
          <IconButton size='small'>
            <ShoppingBasketOutlined /> 0 items $0.00
          </IconButton>
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Box>
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
