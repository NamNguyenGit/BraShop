import { useContext, useState } from "react";
import ModelContext from "../context/ModelContext";
import { Link } from "react-router-dom";
import { OPEN_MODEL } from "../context/types/ModelTypes";
import Model from "../components/Model";
import Register from "../auth/Register";
import Login from "../auth/Login";
const Menu = () => {
  const { dispatch } = useContext(ModelContext);
  const [registerMode] = useState("registerModel");
  const [loginMode] = useState("registerLogin");
  return (
    <div className="menu">
      <div className="menu__contents">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/shop">Contact</Link>
        </li>

        <div
          onClick={() => dispatch({ type: OPEN_MODEL, payload: registerMode })}
          className="button-black"
        >
          Sign In
        </div>
      </div>
      <Model current={registerMode}>
        <Register currentModel={loginMode} />
      </Model>
      <Model current={loginMode}>
        <Login currentModel={registerMode} />
      </Model>
    </div>
  );
};

export default Menu;
