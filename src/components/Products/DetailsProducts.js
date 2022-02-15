import DetailsProductImage from "./DetailsProductImage";
import DetailsProductsRight from "./DetailsProductsRight";
import { useContext } from "react";
import BestProductsContext from "../../context/BestProductsContext";
import LightBox from "./LightBox";

const DetailsProducts = ({ product }) => {
  const {
    BestProductsData: {  lightBoxStatus },
  } = useContext(BestProductsContext);
  


  return (

    <>
      {lightBoxStatus ? <LightBox /> : ''}
      
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
                <div className="detailsInfo__details">
                  <div className="col-md-6">
                    <DetailsProductImage key={product.id} product={product} />
                  </div>
                  <div className="col-md-6">
                    <div className="detailsInfo__right">
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
      <div className="detailsInfo__reviewProduct">
      
      </div>
    

    </>
  );
};

export default DetailsProducts;
