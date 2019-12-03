export const ADD_TO_CART = "ADD_TO_CART";

export const addItemToCart = item => dispatch => {
  dispatch({ type: ADD_TO_CART, payload: item });
};
