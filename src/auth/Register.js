import { useState } from "react";

const Register = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const Sendregister = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <form onSubmit={Sendregister}>
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
      <div className="group">
        <button type="submit" className="btn btn-primary" value="Register">
          Register
        </button>
        <span> Already have an account?</span>
      </div>
    </form>
  );
};

export default Register;
