import { useContext } from "react";
import Register from "../auth/Register";
import ModelContext from "../context/ModelContext";
import { CLOSE_MODEL } from "../context/types/ModelTypes";

const Model = () => {
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
        <Register />
      </div>
    </div>
  ) : (
    ""
  );
};

export default Model;
