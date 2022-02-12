import { LazyLoadImage } from "react-lazy-load-image-component";

const BestProductsList = ({ product }) => {
  return (
    <div className="col-md-3">
      <div className="BestProducts__card">
        <div className="BestProducts__card__img">
          <LazyLoadImage src={product.image} alt={product.name} />
        </div>
        <div className="BestProducts__card__layer">
          <div className="BestProducts__card__layer__content">
            <div className="BestProducts__card__layer__content__name">
              {product.name}
            </div>
          </div>
        </div>
        <div className="BestProducts__card__info">
          <div className="BestProducts__card__info__text">Explore</div>
        </div>
      </div>
    </div>
  );
};

export default BestProductsList;
