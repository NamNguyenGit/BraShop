import { LazyLoadImage } from "react-lazy-load-image-component";
const SaleProductsList = ({ saleProducts }) => {
  return (
    <>
      <a href={`/details/${saleProducts.id}`} className="col-md-3 p-15 ">
        <div className="saleProducts__card animation">
          <div className="saleProducts__card__img">
            <LazyLoadImage src={saleProducts.image} alt={saleProducts.name} />
            <div
              className={
                saleProducts.status === "Sale"
                  ? "sale"
                  : saleProducts.status === "Sold out"
                  ? "sold"
                  : ""
              }
            >
              {saleProducts.status}
            </div>
          </div>

          <div className="saleProducts__card__layer">
            <div className="saleProducts__card__layer__content">
              <div className="saleProducts__card__layer__content__name">
                {saleProducts.name}
              </div>
              <div className="saleProducts__card__layer__content__price">
                <span>$</span>
                {saleProducts.price}
              </div>
            </div>
          </div>

          <div className="saleProducts__card__info">
            <div className="saleProducts__card__info__text">
              <span>$</span>
              {saleProducts.sale_price}
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default SaleProductsList;
