import { combineReducers } from "redux";
import Reducer from "./CountReducer";
import ShoppingReducer from "./ShoppingReducer";
import PriceReducer from "./../../PriceReducers";

const bothReducers = combineReducers({
  menu: Reducer,
  shopping: ShoppingReducer,
  Price: PriceReducer,
});

export default bothReducers;
