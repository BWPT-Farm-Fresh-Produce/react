import { ADD_TO_CART } from "../actions/customerShopping";

const initialState = {
  cart: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] };
    default:
      return state;
  }
}
