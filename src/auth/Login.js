import { useState } from "react";


const Login = () => {
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
        <button type="submit" className="btn btn-lg btn-dark" value="Login">
          Login
        </button>
        <span> Create new account?</span>
      </div>
    </form>
     );
}
 
export default Login;