import { LazyLoadImage } from "react-lazy-load-image-component";
import { useContext } from "react";
import BestProductsContext from "../../context/BestProductsContext";
import { CLOSE_LIGHTBOX } from "../../context/types/BestProductsTypes";
const LightBox = () => {
  const {
    BestProductsData: { currentLightBox },
    dispatch,
  } = useContext(BestProductsContext);
  const closeLightBox = (e) => {
    const className = e.target.getAttribute("class");
    if (className === "detailsInfo__lightbox") {
      dispatch({type: CLOSE_LIGHTBOX});
    }
  };
  return (
    <div className="detailsInfo__lightbox" onClick={closeLightBox}>
      <h4>{currentLightBox.name}</h4>
      <div className="detailsInfo__lightbox__card">
        <div className="detailsInfo__lightbox__card__image">
          <LazyLoadImage src={currentLightBox.image} />
        </div>
      </div>
    </div>
  );
};

export default LightBox;
