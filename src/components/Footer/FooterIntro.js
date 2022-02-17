import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const FooterIntro = () => {
  const [state] = useState({
    logo: "/assets/image/logo/logo.png",
    intro:
      "We are one of the most recognizable retailers in the world with unparalleled brand awareness. Our brands are in 72 countries. We have over 900 store locations globally and nearly 80 million followers on Instagram alone.",
  });

  return (
    <div className="footer__intro">
      <div className="footer__intro__img animation">
        <LazyLoadImage src={state.logo} alt={state.logo} />
      </div>
      <div className="footer__intro__msg animation">{state.intro}</div>
    </div>
  );
};
export default FooterIntro;
