import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import ModelContext from "../context/ModelContext";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { OPEN_MODEL } from "../context/types/ModelTypes";
import Model from "../components/Model";
import Register from "../auth/Register";
import Login from "../auth/Login";
const Menu = () => {
  const [state] = useState({
    logo: "/assets/image/logo/logo.png",
  });
  const { dispatch } = useContext(ModelContext);
  const [registerMode] = useState("registerModel");
  const [loginMode] = useState("registerLogin");
  const { push } = useHistory();
  const goHome = () => {
    push('/');
  };
  return (
    <div className="menu">
      <div className="menu__contents">
        <div className="menu__contents__logo">
          <LazyLoadImage
            className="menu__contents__logo__details"
            src={state.logo}
            alt="Logo Shop"
            onClick={goHome}
          />
        </div>
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
        <li>
          <Link
            to={{}}
            onClick={() =>
              dispatch({ type: OPEN_MODEL, payload: registerMode })
            }
          >
            Sign In
          </Link>
        </li>
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
