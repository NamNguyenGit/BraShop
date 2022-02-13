import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Menu from "./Menu";
const Header = ({image, heading}) => {
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
            <Menu />
          </div>
        </div>
      </div>
      <div className="header__video">
        {image ? (
          <LazyLoadImage src={image} alt={image} />
        ) : (
          <video
            className="header__video__details"
            src={state.video}
            autoPlay
            loop
            muted
          ></video>
        )}
      </div>
      <div className="header__contents">
        <div className="container">
          <div className="header__contents__text">
            <div className="header__contents__text__child">
              <h1 className="header__contents__text__child__h1">
               {heading}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
