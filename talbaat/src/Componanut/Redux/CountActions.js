import {
  INCREASE_COUNT,
  // DELETE_COUNT,
  ADD_TO_CART,
  RES_MENU_REQUEST,
  RES_MENU_LOADED,
  RES_MENU_FAILURE,
  DECREASE_COUNT,
  DELETE_ITEM,
  REMOVE_FROM_CART,
  TOTAL_PRICE,
  FILTER_BY_PRICE,
  FILTER_BY_LOCATION,
  SEARCH_FOR_ITEM,
  FILTER_BY_CUSIENS,
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
export const SearchForItem = (payload) => {
  return (dispatch) => {
    const restRequest = axios.get(`http://localhost:3005/Restaruant`);
    const menuRequest = axios.get(`http://localhost:3005/menus`);
    axios.all([restRequest, menuRequest]).then(
      axios.spread((...res) => {
        const resdata = res[0].data;
        const menudata = res[1].data;
        const maindishes = menudata.map((item) => {
          return item.mainDishes;
        });
        const dishname = [];
        for (let i = 0; i < maindishes.length; i++) {
          for (let j = 0; j < maindishes[i].length; j++) {
            dishname.push(maindishes[i][j]);
          }
        }
        const allData = [...resdata, ...dishname];

        console.log(allData);
        // if (allData.length > 0) {
        //   const searchedData = allData.filter((item) => {
        //     item.name.includes(payload);
        //   });
        // } else {
        //   console.log("false");
        // }

        // dispatch(search(allData));
      })
    );
  };
};

export const search = (payload) => {
  return {
    type: SEARCH_FOR_ITEM,
    payload: payload,
  };
};

export const FilterCusinie = (payload) => {
  return (dispatch) => {
    axios.get(`http://localhost:3005/Restaruant`).then((response) => {
      const data = response.data;
      const restOfCus = data.filter((rest) => {
        return rest.cusisines === payload;
      });
      dispatch(filterCus(restOfCus));
    });
  };
};
export const FilterArea = (payload) => {
  return (dispatch) => {
    axios.get(`http://localhost:3005/Restaruant`).then((response) => {
      const data = response.data;
      const restOfarea = data.filter((rest) => {
        return rest.area === payload;
      });
      dispatch(filterarea(restOfarea));
    });
  };
};
export const FilterPrice = (payload) => {
  return (dispatch) => {
    axios.get(`http://localhost:3005/menus`).then((response) => {
      const data = response.data;
      const menuOfPrice = data.map((item) => {
        return item.mainDishes;
      });
      const dishname = [];
      for (let i = 0; i < menuOfPrice.length; i++) {
        for (let j = 0; j < menuOfPrice[i].length; j++) {
          dishname.push(menuOfPrice[i][j]);
        }
      }
      const filterPriced = dishname.filter((dish) => {
        return Number(dish.price) <= payload;
      });
      dispatch(filterprice(filterPriced));
    });
  };
};
export const filterCus = (payload) => {
  return {
    type: FILTER_BY_CUSIENS,
    payload: payload,
  };
};
export const filterarea = (payload) => {
  return {
    type: FILTER_BY_LOCATION,
    payload: payload,
  };
};
export const filterprice = (payload) => {
  return {
    type: FILTER_BY_PRICE,
    payload: payload,
  };
};
export const add_to_cart = (payload) => {
  return (dispatch) => {
    dispatch(addToCart(payload));
  };
};
export const IncreaseItem = (payload) => {
  return (dispatch) => {
    dispatch(Increment(payload));
  };
};
export const decreaseItem = (payload) => {
  return (dispatch) => {
    dispatch(decrement(payload));
  };
};

export const deleteItem = (payload) => {
  return (dispatch) => {
    dispatch(Delete(payload));
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
export const Increment = (e) => {
  return {
    type: INCREASE_COUNT,
    payload: e,
  };
};
export const decrement = (e) => {
  return {
    type: DECREASE_COUNT,
    payload: e,
  };
};
export const Delete = (e) => {
  return {
    type: DELETE_ITEM,
    payload: e,
  };
};

export const remove = (payload) => {
  return {
    type: REMOVE_FROM_CART,
    payload: payload,
  };
};

export const removeFormCart = (payload) => {
  return (dispatch) => {
    dispatch(remove(payload));
  };
};

export const totalprice = (e) => {
  return {
    type: TOTAL_PRICE,
    payload: e,
  };
};

export const total_price = (payload) => {
  return (dispatch) => {
    dispatch(totalprice(payload));
  };
};

export const FilterByPrice = () => {
  return {
    type: FILTER_BY_PRICE,
  };
};
export const FilterByCusines = () => {
  return {
    type: FILTER_BY_CUSIENS,
  };
};
export const FilterByLocation = () => {
  return {
    type: FILTER_BY_LOCATION,
  };
};
