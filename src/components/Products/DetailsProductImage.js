import { useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import BestProductsContext from "../../context/BestProductsContext";
import { OPEN_LIGHTBOX } from "../../context/types/BestProductsTypes";
const DetailsProductImage = ({ product }) => {
  const { dispatch } = useContext(BestProductsContext);

  const openLightBox = (imageObject) => {
    dispatch({ type: OPEN_LIGHTBOX, payload: imageObject });
  };

  return (
    <div className="detailsInfo__img">
      <LazyLoadImage
        src={product.image}
        onClick={() => openLightBox(product)}
        alt={product.image}
      />
    </div>
  );
};

export default DetailsProductImage;
