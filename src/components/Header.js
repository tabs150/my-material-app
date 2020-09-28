import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
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
import Grid from '@material-ui/core/Grid';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Cart from './Cart';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  topBar: {
    marginBottom: '2rem',
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarBox: {
    width: '80%',
    margin: 'auto',
  },
  toolbarNav: {
    flex: 1,
    padding: theme.spacing(2),
  },
  toolbarTitle: {
    flex: 1,
    height: '4rem',
    alignItems: 'center',
    color: '#FF4252',
    fontWeight: '700',
    letterSpacing: '0.25em',
  },
  toolbarSecondary: {
    textAlign: 'center',
  },
  toolbarLink: {
    padding: theme.spacing(5),
    textTransform: 'uppercase',
  },
  formControl: {
    margin: theme.spacing(1),
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Header({
  sections,
  title,
  cart,
  handleRemoveFromCart,
}) {
  const classes = useStyles();
  const [lang, setLang] = useState('English');
  const [currency, setCurrency] = useState('USD');
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLangChange = (event) => {
    setLang(event.target.value);
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleCartTotals = (cart) => {
    let total = 0;
    cart.forEach((element) => {
      total += element.price;
    });
    return total;
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const renderDialog = (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{'Shopping Cart'}</DialogTitle>
        <DialogContent>
          {cart.length > 0 ? (
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} />
          ) : (
            <Typography component='h2'>Cart is empty</Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Disagree
          </Button>
          <Button onClick={handleClose} color='primary' autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );

  return (
    <>
      <AppBar
        position='static'
        className={classes.topBar}
        elevation={0}
        color='transparent'
      >
        <Toolbar variant='dense' className={classes.toolbarBox}>
          <FormControl className={classes.formControl}>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={lang}
              onChange={handleLangChange}
              disableUnderline
            >
              <MenuItem value={'English'}>EN</MenuItem>
              <MenuItem value={'French'}>FR</MenuItem>
              <MenuItem value={'Spanish'}>ES</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <Select
              labelId='demo-simple-select-Currency'
              id='select-currency'
              value={currency}
              onChange={handleCurrencyChange}
              disableUnderline
            >
              <MenuItem value={'USD'}>USD</MenuItem>
              <MenuItem value={'GBP'}>GBP</MenuItem>
              <MenuItem value={'EUR'}>EUR</MenuItem>
            </Select>
          </FormControl>

          <Box ml='auto'>
            <IconButton
              size='small'
              edge='end'
              aria-label='account of current user'
              aria-controls={menuId}
              aria-haspopup='true'
              onClick={handleProfileMenuOpen}
              color='inherit'
            >
              <AccountCircleOutlined />
            </IconButton>
            <Button size='small'>My Profile</Button>
            <IconButton size='small'>
              <ShoppingBasketOutlined />
            </IconButton>
            <Button
              size='small'
              onClick={handleClickOpen}
            >{`${cart.length} items`}</Button>
            <Button size='small'>
              ${cart.length > 0 ? handleCartTotals(cart) : '0.00'}
            </Button>
            <IconButton>
              <SearchIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
      {renderDialog}
      <Box className={classes.toolbarBox}>
        <Toolbar
          component='nav'
          variant='dense'
          className={classes.toolbarSecondary}
        >
          <Grid container>
            <Grid item xs={12}>
              <Typography
                component='h1'
                variant='h4'
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
                  variant='body1'
                  href={section.url}
                  className={classes.toolbarLink}
                  gutterBottom
                >
                  {section.title}
                </Link>
              ))}
            </Grid>
          </Grid>
        </Toolbar>
      </Box>
    </>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
