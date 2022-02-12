import { Link } from "react-router-dom";
const Menu = () => {
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
          <Link to="/shop">Sign In</Link>
        </li>
      </div>
    </div>
  );
};

export default Menu;
