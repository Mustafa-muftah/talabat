import { ADD_TO_CART, INCREASE_COUNT } from "./ActionTypes";

const initialState = [];

const ShoppingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newstate = [...state];
      const third = newstate.filter((e) => e.id === action.payload.id);
      console.log(third.length);
      if (newstate.length > 0 && third.length > 0) {
        const item = newstate.find((item) => {
          if (item.id === third[0].id) return item;
        });
        let incre = (item.count += 1);
        console.log(incre);
        const newIncreState = [...newstate];
        newIncreState.map((item) => {
          if (item.id === action.payload.id) {
            item.count = incre;
            return item;
          } else {
            return item;
          }
        });
        return newIncreState;
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
      let StateTwo = [...state];
      StateTwo = state.map((e) => e.id);
      return StateTwo;

    default:
      return state;
  }
};

export default ShoppingReducer;
