import { createStore, applyMiddleware } from "redux";
import Reducer from "../Componanut/Redux/CountReducer";
import { logger } from "redux-logger";
import thunk from "redux-thunk";
import bothReducers from "./Redux/CombineReducers";

const store = createStore(bothReducers, applyMiddleware(logger, thunk));

export default store;
