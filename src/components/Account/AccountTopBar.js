import { BsFillBellFill } from "react-icons/bs";
import { GiShoppingBag } from "react-icons/gi";
import { HiShoppingCart } from "react-icons/hi";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState } from "react";
import { Link } from "react-router-dom";
const AccountTopBar = () => {
  const [state] = useState({
    image: "assets/reviewUsers/user1.jpg",
  });
  return (
    <>
      <div className="Account__topBar">
        <div className="Account__topBar__wrapper">
          <div className="Account__topBar__left">
            <span className="Account__topBar__left__logo">Account</span>
          </div>
          <div className="Account__topBar__right">
            <Link to="/account/wishList">
              <div className="Account__topBar__right__icons">
                <GiShoppingBag size={30} />
              </div>
            </Link>
            <Link to="/account/cart">
            <div className="Account__topBar__right__icons">
              <HiShoppingCart size={30} />
            </div>
            </Link>
            <div className="Account__topBar__right__icons">
              <BsFillBellFill size={30} />
              <span className="Account__topBar__right__icons__bag">2</span>
            </div>
            <div className="Account__topBar__right__image">
              <LazyLoadImage src={state.image} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountTopBar;
