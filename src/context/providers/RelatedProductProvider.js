import { useReducer } from "react";
import RelatedProductsContext from "../RelatedProductsContext";
import RelatedProductReducer from "../reducers/RelatedProductReducer";
import RelatedProduct from "../../data/RelatedProducts";

const RelatedProductsProvider = (props) => {
    const {RelatedData, dispatch} = useReducer(RelatedProductReducer,{
        related : RelatedProduct,
    });

    return (
        <RelatedProductsContext.Provider value={{RelatedData, dispatch}}>
                {props.children}
        </RelatedProductsContext.Provider>
      );
}
 
export default RelatedProductsProvider;