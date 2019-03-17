import { cart } from '../types';

export const addToCart = product => ({
  type: cart.ADD_TO_CART,
  payload: { product },
});

export const removeFromCart = id => ({
  type: cart.REMOVE_FROM_CART,
  payload: { id },
});
