import api from '../../api';
import { products } from '../types';

export const getProducts = () => async dispatch => {
  dispatch({
    type: products.GET_PRODUCTS_PENDING,
  });
  try {
    const payload = await api.noAuth.get('/products');
    dispatch({
      type: products.GET_PRODUCTS_SUCCESS,
      payload,
    });
  } catch (error) {
    dispatch({
      type: products.GET_PRODUCTS_ERROR,
      error,
    });
  }
};
