import { useState, useContext } from "react";
import SaleProductsContext from "../../context/SaleProductsContext";
import Countdown from "../Countdown/Countdown";
import SaleProductsList from "./SaleProductsList";

const SaleProducts = () => {
  const [state] = useState({
    title: "Sales",
  });
  const {
    SaleProductsData: { saleProducts },
  } = useContext(SaleProductsContext);

  return (
    <div className="saleProducts">
      <div className="saleProducts__contents">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="saleProducts__contents__heading ">
                {state.title}
              </div>
            </div>
            <div className="col-md-6">
              <div className="countdown animation">
                <Countdown />
              </div>
            </div>
          </div>
          <div className="saleProducts__blocks">
            <div className="row">
              {saleProducts.map((saleProduct) => (
                <SaleProductsList
                  saleProducts={saleProduct}
                  key={saleProduct.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleProducts;
