import { MdOutlineLanguage } from "react-icons/md";
import { SiGoogleanalytics } from "react-icons/si";
import {GiShoppingBag} from "react-icons/gi";
import { FaHistory } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <div className="Account__sideBar">
        <div className="Account__sideBar__wrapper">
          <div className="Account__sideBar__menu">
            <div className="Account__sideBar__menu__title">
              Dashboard
              <ul className="Account__sideBar__menu__list">
                <Link style={{ textDecoration: "none" }} to="/account">
                  <li className="Account__sideBar__menu__list__item active ">
                    <ImProfile size={25} className="mr-5" />
                    Profile
                  </li>
                </Link>
                <Link style={{ textDecoration: "none" }} to="/account/address">
                  <li className="Account__sideBar__menu__list__item">
                    <AiFillHome size={25} className="mr-5" />
                    Address
                  </li>
                </Link>
                <Link style={{ textDecoration: "none" }} to="/account/orderHistory">
                <li className="Account__sideBar__menu__list__item">
                  <FaHistory size={25} className="mr-5" />
                  Order History
                </li>
                </Link>
                <Link style={{ textDecoration: "none" }} to="/account/wishList">
                <li className="Account__sideBar__menu__list__item">
                  <GiShoppingBag size={25} className="mr-5" />
                  WishList
                </li>
                </Link>
                <li className="Account__sideBar__menu__list__item">
                  <MdOutlineLanguage size={25} className="mr-5" />
                  Language
                </li>
                <li className="Account__sideBar__menu__list__item">
                  <SiGoogleanalytics size={25} className="mr-5" />
                  Analytics
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
