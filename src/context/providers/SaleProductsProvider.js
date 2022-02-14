import { useReducer } from "react";
import SaleProductsReducer from "../reducers/SaleProductsReducer";
import SaleProductsContext from "../SaleProductsContext";
import SaleProducts from "../../data/SaleProducts";

const SaleProductsProvider = (props) => {
  const [SaleProductsData, dispatch] = useReducer(SaleProductsReducer, {
    saleProducts: SaleProducts,
  });

  return (
    <SaleProductsContext.Provider value={{ SaleProductsData, dispatch }}>
      {props.children}
    </SaleProductsContext.Provider>
  );
};
export default SaleProductsProvider;
