import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
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

class Products extends Component {
  render() {
    const { classes, products, isPending } = this.props;
    if (isPending) return 'Component Loading';
    return (
      <main className={classes.layout}>
        <div className={classes.heroContent}>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Products
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
  }
}

Products.propTypes = {
  isPending: PropTypes.bool.isRequired,
  products: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  isPending: state.products.isPending,
  products: state.products.value,
});

const connectedProducts = connect(
  mapStateToProps,
  null
)(Products);

export default withStyles(styles)(connectedProducts);
