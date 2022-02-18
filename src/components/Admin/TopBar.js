import { BsFillBellFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { MdOutlineLanguage } from "react-icons/md";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useState } from "react";
const TopBar = () => {
  const [state] = useState({
    image: "assets/reviewUsers/user1.jpg",
  });
  return (
    <>
      <div className="topBar">
        <div className="topBar__wrapper">
          <div className="topBar__left">
            <span className="topBar__left__logo">Admin</span>
          </div>
          <div className="topBar__right">
            <div className="topBar__right__icons">
              <AiFillSetting size={30} />
            </div>
            <div className="topBar__right__icons">
              <MdOutlineLanguage size={30} />
            </div>
            <div className="topBar__right__icons">
              <BsFillBellFill size={30} />
              <span className="topBar__right__icons__bag">2</span>
            </div>
            <div className="topBar__right__image">
              <LazyLoadImage src={state.image} alt={state.image} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
