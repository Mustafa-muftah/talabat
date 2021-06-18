import {
  INCREASE_COUNT,
  // DECREASE_COUNT,
  // DELETE_COUNT,
  ADD_TO_CART,
  RES_MENU_REQUEST,
  RES_MENU_LOADED,
  RES_MENU_FAILURE,
} from "./ActionTypes";
import axios from "axios";

export const get_Menu = (id) => {
  return (dispatch) => {
    dispatch(menuRequest);
    axios
      .get(`http://localhost:3005/menus/${id}`)
      .then((response) => {
        const data = response.data;
        dispatch(menuLoaded(data));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(menuFailed(errorMsg));
      });
  };
};
export const add_to_cart = (payload) => {
  return (dispatch) => {
    dispatch(addToCart(payload));
  };
};
export const IncreaseItem = () => {
  return (dispatch) => {
    dispatch(Increment());
  };
};

export const menuRequest = () => {
  return {
    type: RES_MENU_REQUEST,
  };
};

export const menuLoaded = (data) => {
  return {
    type: RES_MENU_LOADED,
    data: data,
  };
};
export const menuFailed = (error) => {
  return {
    type: RES_MENU_FAILURE,
    error: error,
  };
};

export const addToCart = (payload) => {
  return {
    type: ADD_TO_CART,
    payload: payload,
  };
};
export const Increment = () => {
  return {
    type: INCREASE_COUNT,
  };
};

// const Decrement = () => {
//   return {
//     type: DECREASE_COUNT,
//   };
// };
// const Delete = () => {
//   return {
//     type: DELETE_COUNT,
//   };
// };
