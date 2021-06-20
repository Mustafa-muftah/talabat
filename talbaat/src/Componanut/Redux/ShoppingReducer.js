import {
  ADD_TO_CART,
  DECREASE_COUNT,
  DELETE_ITEM,
  INCREASE_COUNT,
} from "./ActionTypes";

const initialState = [];

const ShoppingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newstate = [...state];
      if (
        newstate.length > 0 &&
        newstate.filter((e) => e.id === action.payload.id).length > 0
      ) {
        newstate.map((item) => {
          if (item.id === action.payload.id) {
            item.count += 1;
            return item;
          } else {
            return item;
          }
        });
        return newstate;
      } else {
        const newState = [
          ...newstate,
          {
            id: action.payload.id,
            name: action.payload.dishname,
            price: action.payload.price,
            count: 0,
          },
        ];
        return newState;
      }

    case INCREASE_COUNT:
      let newState = [...state];
      newState.map((e) => {
        if (e.id === action.payload.id) {
          e.count += 1;
          return e;
        }
      });
      return newState;

    case DECREASE_COUNT:
      let decreaseState = [...state];
      decreaseState.map((e) => {
        if (e.id === action.payload.id && e.count > 0) {
          e.count -= 1;
          return e;
        }
      });
      return decreaseState;

    case DELETE_ITEM:
      const filteredState = [...state];
      const filtered = filteredState.filter((e) => e.id !== action.payload.id);
      console.log(filteredState);
      return filtered;

    default:
      return state;
  }
};

export default ShoppingReducer;
