import { useState,useContext } from "react";
import ModelContext from "../context/ModelContext";
import { OPEN_MODEL } from "../context/types/ModelTypes";


const Login = (props) => {
  const {dispatch} = useContext(ModelContext);
    const [state , setState] = useState({
        email:'',
        password:''
    })
    const SendLogin = (e) => {
        e.preventDefault();
        console.log(state);
    }


    return ( 
        <form onSubmit={SendLogin}>
      <div className="model__heading">
        <h3>Login</h3>
      </div>
      <div className="group">
        <input
          type="email"
          className="group__control"
          placeholder="Enter your email"
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
          placeholder="Enter your password"
          name=""
          onChange={(e) => {
            setState({
              ...state,
              password: e.target.value,
            });
          }}
        />
      </div>
      <div className="group">
        <button type="submit" className="button-dark" value="Login">
          Login
        </button>
        <span onClick={() => dispatch({type: OPEN_MODEL, payload: props.currentModel})}> Create new account?</span>
      </div>
    </form>
     );
}
 
export default Login;