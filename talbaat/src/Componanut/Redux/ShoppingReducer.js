import { ADD_TO_CART, INCREASE_COUNT } from "./ActionTypes";

const initialState = [];

const ShoppingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newSatate = [...state, action.payload];
      console.log(newSatate);
      return newSatate;
    // [...state].push(action.payload),
    default:
      return state;
  }
};

export default ShoppingReducer;
