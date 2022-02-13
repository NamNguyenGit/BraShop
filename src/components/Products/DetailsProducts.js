import { LazyLoadImage } from "react-lazy-load-image-component";
import DetailsProductsRight from "./DetailsProductsRight";

const DetailsProducts = ({ product }) => {
  return (
    <div className="detailsInfo">
      <div className="container">
        <h2 className="heading">Overview</h2>
        <div className="row">
          <div className="col-md-8">
            <p className="detailsInfo__p">{product.description}</p>
          </div>
        </div>
        <h2 className="heading">Details</h2>
        <div className="row">
         
            <div className="container">
              <div className="row">
                
                <div className="col-md-6">
                  <div className="detailsInfo__img">
                    <LazyLoadImage src={product.image} alt={product.image} />
                  </div>
                </div>
                <div className="col-md-6">
                    <div className="detailsInfo__right">
                        <DetailsProductsRight product={product} />
                    </div>
                </div>
              </div>
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default DetailsProducts;
