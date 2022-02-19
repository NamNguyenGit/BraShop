import DetailsProductImage from "./DetailsProductImage";
import DetailsProductsRight from "./DetailsProductsRight";
import { useContext,useState } from "react";
import BestProductsContext from "../../context/BestProductsContext";
import LightBox from "./LightBox";
import Review from "../Reviews/Review";
import RelatedProducts from "./RelatedProducts";

const DetailsProducts = ({ product }) => {
  const [state] = useState({
    title: "Maybe You Like",
  });
  const {
    BestProductsData: { lightBoxStatus,relatedProducts },
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
      
      <Review />
      <div className="container">
        <div className="row">
        <div className="col-md-6">
            <div className="bestProducts__heading headingAnimation">{state.title}</div>
          </div>
        </div>
        <div className="row mt-5">
        {relatedProducts.map((relatedProduct) => (
                <RelatedProducts
                  relatedProducts={relatedProduct}
                  key={relatedProduct.id}
                />
        ))}
        </div>
      </div>
      
    </>
  );
};

export default DetailsProducts;
