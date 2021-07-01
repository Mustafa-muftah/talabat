import { TOTAL_PRICE } from "./Componanut/Redux/ActionTypes";

const initalState = [];

const PriceReducer = (state = initalState, action) => {
  switch (action.type) {
    case TOTAL_PRICE:
      let totalPriceState = [...action.payload];
      const price = totalPriceState.map((e) => {
        const itemPrice = Number(e.price);
        const itemNum = e.count;
        const price = itemPrice * itemNum;
        return price;
      });

      const TotalPrice = price.reduce((a, b) => a + b, 0);

      return (totalPriceState = {
        totalPrice: TotalPrice,
      });

    default:
      return state;
  }
};
export default PriceReducer;
