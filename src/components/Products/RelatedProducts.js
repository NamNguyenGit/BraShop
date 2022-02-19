import { LazyLoadImage } from "react-lazy-load-image-component";
const RelatedProducts = ({ relatedProducts }) => {
  return (
    <>
      <a href={`/details/${relatedProducts.id}`} className="col-md-3 p-15 ">
        <div className="bestProducts__card animation">
          <div className="bestProducts__card__img">
            <LazyLoadImage src={relatedProducts.image} alt={relatedProducts.name} />
          </div>
          <div className="bestProducts__card__layer">
            <div className="bestProducts__card__layer__content">
              <div className="bestProducts__card__layer__content__name">
                {relatedProducts.name}
              </div>
              <div className="bestProducts__card__layer__content__price">
                <span>$</span>
                {relatedProducts.price}
              </div>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default RelatedProducts;
