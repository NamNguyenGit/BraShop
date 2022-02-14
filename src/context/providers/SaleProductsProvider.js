import { useReducer } from "react";
import SaleProductsReducer from "../reducers/SaleProductsReducer";
import SaleProductsContext from "../SaleProductsContext";
import BestProducts from "../../data/BestProducts";

const SaleProductsProvider = (props) => {
  const [SaleProductsData, dispatch] = useReducer(SaleProductsReducer, {
    saleProducts: BestProducts,
  });

  return (
    <SaleProductsContext.Provider value={{ SaleProductsData, dispatch }}>
      {props.children}
    </SaleProductsContext.Provider>
  );
};
export default SaleProductsProvider;
