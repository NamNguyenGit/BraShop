import { useReducer } from "react";
import ColorReducer from "../reducers/ColorsReducer";
import ColorsContext from "../ColorsContext";
import Color from "../../data/Color";

const ColorsProvider = (props) => {
  const [ColorsData, dispatch] = useReducer(ColorReducer, {
    color: Color,
  });

  return (
    <ColorsContext.Provider value={{ ColorsData, dispatch }}>
      {props.children}
    </ColorsContext.Provider>
  );
};
export default ColorsProvider;
