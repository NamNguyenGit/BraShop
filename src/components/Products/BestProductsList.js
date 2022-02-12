import { LazyLoadImage } from "react-lazy-load-image-component";

const BestProductsList = ({ product }) => {
  return (
    <div className="col-md-3 p-15 ">
      <div className="bestProducts__card">
        <div className="bestProducts__card__img">
          <LazyLoadImage src={product.image} alt={product.name} />
        </div>
        <div className="bestProducts__card__layer">
          <div className="bestProducts__card__layer__content">
            <div className="bestProducts__card__layer__content__name">
              {product.name}
            </div>
            <div className="bestProducts__card__layer__content__price">
              <span>$</span>
              {product.price}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestProductsList;
