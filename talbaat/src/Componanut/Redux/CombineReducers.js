import { combineReducers } from "redux";
import Reducer from "./CountReducer";
import ShoppingReducer from "./ShoppingReducer";
import PriceReducer from "./../../PriceReducers";
import SearchReducer from "./SearchReducer";

const bothReducers = combineReducers({
  menu: Reducer,
  shopping: ShoppingReducer,
  Price: PriceReducer,
  Search: SearchReducer,
});

export default bothReducers;
