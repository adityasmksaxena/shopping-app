import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import ProductCard from '../../components/ProductCard';

const styles = theme => ({
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
});

const Cart = ({ classes, products }) => (
  <main className={classes.layout}>
    <div className={classes.heroContent}>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        Cart
      </Typography>
    </div>
    <div className={classNames(classes.layout, classes.cardGrid)}>
      <Grid container spacing={40}>
        {products.map(product => (
          <ProductCard key={product._id} id={product._id} />
        ))}
      </Grid>
    </div>
  </main>
);

Cart.propTypes = {
  products: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  products: state.cart.cartItems,
});

const connectedCart = connect(
  mapStateToProps,
  null
)(Cart);

export default withStyles(styles)(connectedCart);
