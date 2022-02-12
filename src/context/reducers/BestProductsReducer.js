import { DETAILS } from "../types/BestProductsTypes";

const BestProductsReducer = (state, action) => {
  const { type, payload } = action;
  if (type === DETAILS) {
    const product = state.bestProducts.find(
      (product) => product.id === parseInt(payload)
    );
    return {
      ...state,
      details: product,
    };
  } else {
    return state;
  }
};
export default BestProductsReducer;
