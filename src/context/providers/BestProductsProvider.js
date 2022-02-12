import { useReducer } from "react";
import BestProductsReducer from "../reducers/BestProductsReducer";
import BestProductsContext from "../../context/BestProductsContext";
import BestProducts from "../../data/BestProducts";

const BestProductsProvider = (props) => {
  const [BestProductsData, dispatch] = useReducer(BestProductsReducer, {
    bestProducts: BestProducts,
  });

  return (
    <BestProductsContext.Provider value={{ BestProductsData, dispatch }}>
      {props.children}
    </BestProductsContext.Provider>
  );
};

export default BestProductsProvider;