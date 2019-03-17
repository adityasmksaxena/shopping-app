import { products } from '../types';

const INITIAL_STATE = {
  isPending: false,
  value: [],
  error: '',
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case products.GET_PRODUCTS_PENDING: {
      return { ...state, isPending: true };
    }
    case products.GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        isPending: false,
        value: action.payload.data.products,
      };
    }
    case products.GET_PRODUCTS_ERROR: {
      return {
        ...state,
        isPending: false,
        error: action.error,
      };
    }
    default:
      return state;
  }
};

export default productsReducer;
