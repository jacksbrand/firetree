import cartTypes from './cart.types';

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case cartTypes.CART_ADD_ITEM:
      const item = action.payload;

      const itemExists = state.cartItems.find(
        (x) => x.product === item.product
      );

      if (itemExists) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === itemExists ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    default: {
      return state;
    }
  }
};
