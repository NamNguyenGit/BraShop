import DetailsProductImage from "./DetailsProductImage";
import DetailsProductsRight from "./DetailsProductsRight";
import { useContext } from "react";
import BestProductsContext from "../../context/BestProductsContext";
import LightBox from "./LightBox";
import Review from "../Reviews/Review";
import RelatedProducts from "./RelatedProducts";

const DetailsProducts = ({ product }) => {
  const {
    BestProductsData: { lightBoxStatus },
  } = useContext(BestProductsContext);

  return (
    <>
      {lightBoxStatus ? <LightBox /> : ""}

      <div className="detailsInfo">
        <div className="container">
          <h2 className="heading headingAnimation">Overview</h2>
          <div className="row">
            <div className="col-md-8">
              <p className="detailsInfo__p animation">{product.description}</p>
            </div>
          </div>
          <h2 className="heading headingAnimation">Details</h2>
          <div className="row">
            <div className="container">
              <div className="row">
                <div className="detailsInfo__details">
                  <div className="col-md-6 animation">
                    <DetailsProductImage key={product.id} product={product} />
                  </div>
                  <div className="col-md-6">
                    <div className="detailsInfo__right ">
                      <DetailsProductsRight
                        key={product.id}
                        product={product}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RelatedProducts />
      <Review />
    </>
  );
};

export default DetailsProducts;
