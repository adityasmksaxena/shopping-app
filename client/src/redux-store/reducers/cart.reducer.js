import { cart } from '../types';

const INITIAL_STATE = {
  cartItems: [],
  cartTotalValue: 0,
};
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cart.ADD_TO_CART: {
      const { product } = action.payload;
      const cartItems = [...state.cartItems, product];
      return { ...state, cartItems };
    }
    case cart.REMOVE_FROM_CART: {
      const { id } = action.payload;
      const cartItems = state.cartItems.filter(item => item._id !== id);
      return { ...state, cartItems };
    }
    default:
      return state;
  }
};

export default cartReducer;
