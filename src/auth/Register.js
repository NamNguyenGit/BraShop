import { useState, useContext } from "react";
import ModelContext from "../context/ModelContext";
import { OPEN_MODEL } from "../context/types/ModelTypes";
const Register = (props) => {
  const {dispatchModel} = useContext(ModelContext)
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const SendRegister = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <form onSubmit={SendRegister}>
      <div className="model__heading">
        <h3>Create new account</h3>
      </div>
      <div className="group">
        <input
          type="text"
          className="group__control"
          placeholder="Your name eg. Nam"
          name=""
          onChange={(e) => {
            setState({
              ...state,
              name: e.target.value,
            });
          }}
        />
      </div>
      <div className="group">
        <input
          type="email"
          className="group__control"
          placeholder="Your email eg. Nam@gmail.com"
          name=""
          onChange={(e) => {
            setState({
              ...state,
              email: e.target.value,
            });
          }}
        />
      </div>
      <div className="group">
        <input
          type="password"
          className="group__control"
          placeholder="Create your password"
          name=""
          onChange={(e) => {
            setState({
              ...state,
              password: e.target.value,
            });
          }}
        />
      </div>
      <div className="group model__row" >
        <button type="submit" className="button-dark" value="Register">
          Register
        </button>
        <span onClick={() => dispatchModel({type: OPEN_MODEL, payload:props.currentModel })}> Already have an account?</span>
      </div>
    </form>
  );
};

export default Register;
