import {
  DETAILS,
  OPEN_LIGHTBOX,
  CLOSE_LIGHTBOX,
} from "../types/BestProductsTypes";

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
  } else if (type === OPEN_LIGHTBOX) {
    return {
      ...state,
      lightBoxStatus: true,
      currentLightBox: action.payload,
    };
  } else if (type === CLOSE_LIGHTBOX) {
    return {
      ...state,
      lightBoxStatus: false,
      currentLightBox: {},
    };
  } else {
    return state;
  }
};
export default BestProductsReducer;
