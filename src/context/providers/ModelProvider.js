import { useReducer } from "react";
import ModelReducer from "../reducers/ModelReducer";
import ModelContext from "../ModelContext";


const ModelProvider = (props) => {
  const [state, dispatchModel] = useReducer(ModelReducer, {
    modelStatus: false ,
    current: '',
  });

  return (
    <ModelContext.Provider value={{ state, dispatchModel }}>
      {props.children}
    </ModelContext.Provider>
  );
};

export default ModelProvider;
