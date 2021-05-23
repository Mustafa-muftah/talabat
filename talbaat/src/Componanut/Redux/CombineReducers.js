import { combineReducers } from "redux";
import Reducer from "./CountReducer";
import ShoppingReducer from "./ShoppingReducer";

const bothReducers = combineReducers({
  menu: Reducer,
  shopping: ShoppingReducer,
});

export default bothReducers;
