import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    width: 400,
  },
  wrapper: {
    display: 'flex',
  },
  textField: {
    flex: 1,
  },
}));

export default function SearchBlock() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: 'Marko',
  });

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <FormControl className={classes.container}>
      <Box mx='auto' className={classes.wrapper}>
        <TextField
          id='standard-name'
          variant='outlined'
          className={classes.textField}
          value={values.name}
          onChange={handleChange('name')}
        />
        <Button
          size='large'
          variant='contained'
          color='primary'
          style={{ alignSelf: 'flex-end', marginBottom: 8 }}
        >
          Search
        </Button>
      </Box>
    </FormControl>
  );
}
