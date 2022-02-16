import { useReducer } from "react";
import ServiceContext from "../ServiceContext";
import ServicesReducer from "../reducers/ServicesReducer";
import services from "../../data/services";

const ServicesProvider = (props) => {
  const { ServiceData, dispatch } = useReducer(ServicesReducer, {
    services,
  });

  return (
    <ServiceContext.Provider value={{ ServiceData, dispatch }}>
      {props.children}
    </ServiceContext.Provider>
  );
};

export default ServicesProvider;
