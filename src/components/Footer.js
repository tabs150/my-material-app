import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/List';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Divider from '@material-ui/core/Divider';

function FooterTop() {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={4}>
          <Typography
            component='h2'
            variant='h4'
            color='textSecondary'
            noWrap
            className={classes.toolbarTitle}
          >
            BOUNCER
          </Typography>
          <Typography variant='body2' gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant='h5' className={classes.footerTopTitle}>
            List Title
          </Typography>
          <Typography variant='body2' gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur unde suscipit.
          </Typography>
          <FacebookIcon className={classes.socialIcon} />
          <TwitterIcon className={classes.socialIcon} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant='h5' className={classes.footerTopTitle}>
            List Title
          </Typography>
          <Typography variant='body2' gutterBottom>
            My Company, 4578 Marmora Road, Glasgow <br />
            DD4 89GR <br />
            Call us nou: 0123-456-789 <br />
            Email: support@whatever.com
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

function FooterNavList() {
  return (
    <>
      <Typography variant='h5' gutterBottom>
        List Title
      </Typography>
      <List>
        <ListItem>Home</ListItem>
        <ListItem>About</ListItem>
        <ListItem>Shop</ListItem>
        <ListItem>Blog</ListItem>
        <ListItem>Contact</ListItem>
        <ListItem>Privacy Policy</ListItem>
        <ListItem>Terms & Conditions</ListItem>
      </List>
    </>
  );
}

function Copyright() {
  return (
    <Typography variant='body1'>
      {'Copyright © '}
      <Link color='inherit' href='https://www.bisenbaev.com/'>
        Ecommerce theme by www.bisenbaev.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function FooterBottom() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={8}>
        <Copyright />
      </Grid>
      <Grid item xs={12} sm={4}>
        <Typography>Payment Icons</Typography>
      </Grid>
    </Grid>
  );
}
const navItems = [1, 2, 3, 4, 5, 6];

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(4, 0),
  },
  toolbarTitle: {
    height: '4rem',
    fontWeight: '700',
    letterSpacing: '0.25em',
  },
  socialIcon: {
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  footerTopTitle: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  footerDivider: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  footerNavList: {
    marginTop: theme.spacing(8),
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container>
        <FooterTop />
        <Divider variant='middle' className={classes.footerDivider} />
        <Grid container spacing={2} className={classes.footerNavList}>
          {navItems.map((item) => (
            <Grid item key={item} xs={12} sm={2}>
              <FooterNavList />
            </Grid>
          ))}
        </Grid>
        <Divider variant='fullWidth' className={classes.footerDivider} />
        <FooterBottom />
      </Container>
    </footer>
  );
}
