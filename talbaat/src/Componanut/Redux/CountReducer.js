import {
  RES_MENU_REQUEST,
  RES_MENU_LOADED,
  RES_MENU_FAILURE,
} from "./ActionTypes";
const initialState = {
  loading: true,
  menu: {},
  error: "",
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case RES_MENU_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case RES_MENU_LOADED:
      return {
        ...state,
        loading: false,
        menu: action.data,
        error: "",
      };
    case RES_MENU_FAILURE:
      return {
        ...state,
        loading: false,
        menu: {},
        error: action.error,
      };

    default:
      return state;
    //   case INCREASE_COUNT:
    //   return {
    //     ...state,
    //     count: state.count + 1,
    //   };
    // case DECREASE_COUNT:
    //   return {
    //     ...state,
    //     count: state.count - 1,
    //   };
    // case DELETE_COUNT:
    //   return {
    //     ...state,
    //     count: (state.count = 0),
    //   };
  }
};
export default Reducer;
