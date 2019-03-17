import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { getProducts } from '../../redux-store/actions/products.action';
import Cart from './home/Cart';
import Header from './home/Header';
import ProductDetails from './home/ProductDetails';
import Products from './home/Products';

const RedirectToProductsPage = () => <Redirect to="/products" />;

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
});

class Home extends Component {
  componentDidMount() {
    this.props.getProducts();
  }
  render() {
    return (
      <>
        <Header />
        <Route exact path="/" component={RedirectToProductsPage} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={ProductDetails} />
        <Route exact path="/cart" component={Cart} />
      </>
    );
  }
}

Home.propTypes = {
  getProducts: PropTypes.func.isRequired,
};

const connectedHome = connect(
  null,
  { getProducts }
)(Home);

export default withStyles(styles)(connectedHome);
