import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Cart({ cart, handleRemoveFromCart }) {
  const classes = useStyles();

  return (
    <List dense className={classes.root}>
      {cart.map((product) => {
        const labelId = `checkbox-list-secondary-label-${product.id}`;
        return (
          <ListItem key={product.id} button>
            <ListItemAvatar>
              <Avatar alt={`Avatar n°${product.name}`} src={product.image} />
            </ListItemAvatar>
            <ListItemText id={labelId} primary={product.name} />
            <ListItemText
              id={`${labelId}-price`}
              primary={`$ ${product.price}`}
            />

            <ListItemSecondaryAction>
              <IconButton
                edge='end'
                aria-label='delete'
                onClick={() => handleRemoveFromCart(product.id)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}
