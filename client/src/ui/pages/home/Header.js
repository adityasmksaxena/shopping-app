import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  toolbarTitle: {
    flex: 1,
  },
});

const Header = ({ classes, cartSize, cartValue }) => (
  <AppBar position="static" color="default" className={classes.appBar}>
    <Toolbar>
      <Typography
        variant="h6"
        color="inherit"
        noWrap
        className={classes.toolbarTitle}
      >
        Assignment: Shopping Application
      </Typography>
      <Typography variant="button" gutterBottom>
        Cart Value : {cartValue}
      </Typography>
      <Button component={props => <Link to="/products" {...props} />}>
        Products
      </Button>
      <IconButton
        component={props => <Link to="/cart" {...props} />}
        color="primary"
        className={classes.button}
        aria-label="Cart"
      >
        {cartSize ? (
          <Badge
            className={classes.margin}
            badgeContent={cartSize}
            color="primary"
          >
            <AddShoppingCartIcon />
          </Badge>
        ) : (
          <AddShoppingCartIcon />
        )}
      </IconButton>
    </Toolbar>
  </AppBar>
);

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  cartSize: state.cart.cartItems.length,
  cartValue: state.cart.cartItems.reduce((acc, item) => acc + item.price, 0),
});

const connectedHeader = connect(
  mapStateToProps,
  null
)(Header);

export default withStyles(styles)(connectedHeader);
