import productTypes from './product.types';

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case productTypes.PRODUCT_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case productTypes.PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case productTypes.PRODUCT_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return { ...state };
  }
};

export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case productTypes.PRODUCT_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case productTypes.PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload,
      };
    case productTypes.PRODUCT_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return { ...state };
  }
};
