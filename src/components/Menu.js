import { useContext } from "react";
import ModelContext from "../context/ModelContext";
import { Link } from "react-router-dom";
const Menu = () => {

  const {  dispatch} = useContext(ModelContext);
  

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
        <li>
          <a onClick={() => dispatch({
            type: 'OPEN_MODEL'
          })} >Sign In</a>
        </li>
      </div>
    </div>
  );
};

export default Menu;
