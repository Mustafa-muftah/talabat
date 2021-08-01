import {
  SEARCH_FOR_ITEM,
  FILTER_BY_CUSIENS,
  FILTER_BY_PRICE,
  FILTER_BY_LOCATION,
} from "./ActionTypes";

const initialState = [];

const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_FOR_ITEM:
      const newState = [...state, action.payload];
      return newState;
    case FILTER_BY_CUSIENS:
      state = [];
      const newstate = [...state, action.payload];
      return newstate;
    case FILTER_BY_PRICE:
      const newPricestate = [...state, action.payload];
      return newPricestate;
    case FILTER_BY_LOCATION:
      state = [];
      const newAreastate = [...state, action.payload];
      return newAreastate;

    default:
      return state;
  }
};

export default SearchReducer;
