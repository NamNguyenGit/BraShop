import { useContext } from "react";
import Login from "../auth/Login";
import Register from "../auth/Register";
import ModelContext from "../context/ModelContext";
import { CLOSE_MODEL } from "../context/types/ModelTypes";

const Model = (props) => {
  const { state, dispatch } = useContext(ModelContext);

  const close = (e) => {
    const positionClick = e.target.getAttribute('class');
    if(positionClick === 'model' ){
      dispatch({ type: CLOSE_MODEL })
    }
  }
  return state.modelStatus ? (
    <div className="model" onClick={close}>
      <div className="model__body">
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default Model;