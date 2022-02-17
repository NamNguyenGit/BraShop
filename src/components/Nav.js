import { useContext, useState } from "react";
import NavContext from "../context/NavContext";
import { CLOSE_TOGGLE } from "../context/types/NavTypes";
import { OPEN_MODEL } from "../context/types/ModelTypes";
import Model from "../components/Model";
import Register from "../auth/Register";
import Login from "../auth/Login";
import ModelContext from "../context/ModelContext";
import { Link } from "react-router-dom";
const Nav = () => {
  
  const { dispatchModel } = useContext(ModelContext);
  const { state, dispatch } = useContext(NavContext);
  const navClose = (e) => {
    const className = e.target.getAttribute("class");
    if (className === "navLayer") {
      dispatch({ type: CLOSE_TOGGLE });
    }
  };
  const [registerModel] = useState("registerModel");
  const [loginModel] = useState("loginModel");
  return (
    <>
    <Model current={registerModel}>
        <Register currentModel={loginModel} />
      </Model>
      <Model current={loginModel}>
        <Login currentModel={registerModel} />
      </Model>
      {state ? <div className="navLayer" onClick={navClose}></div> : ""}

      <div className={state ? "nav nav--open" : "nav nav--close"}>
        <div className="nav__content">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/manager">Manager</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link  to={{}}
            onClick={() =>
              dispatchModel({ type: OPEN_MODEL, payload: registerModel })
            }
          >
            Sign In</Link>
          </li>
        </div>
      </div>
    </>
  );
};

export default Nav;
