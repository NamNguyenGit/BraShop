import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Menu from "./Menu";
const Header = () => {
  const [state] = useState({
    video: "/assets/video/header.mp4",
    logo: "/assets/image/logo/logo.png",
  });

  
  
  return (
    <div className="header">
      <div className="container pr">
        <div className="header__logo">
          <LazyLoadImage
            className="header__logo__details"
            src={state.logo}
            alt="Logo Shop"
            
          />
          <div className="header__menu">
            {" "}
            <Menu />
          </div>
        </div>
      </div>
      <div className="header__video">
        <video
          className="header__video__details"
          src={state.video}
          autoPlay
          loop
          muted
        ></video>
      </div>
    </div>
  );
};

export default Header;
