import { LazyLoadImage } from "react-lazy-load-image-component";
const BestProductsList = ({ product }) => {
  return (
    <>
      <a href={`/details/${product.id}`} className="col-md-3 p-15 ">
        <div className="bestProducts__card animation">
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
      </a>
    </>
  );
};

export default BestProductsList;
