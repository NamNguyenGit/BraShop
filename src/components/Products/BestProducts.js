import { useState, useContext } from "react";
import BestProductsContext from "../../context/BestProductsContext";
import BestProductsList from "./BestProductsList";
const BestProducts = () => {
  const [state] = useState({
    title: "Best Products",
  });
  const {
    BestProductsData: { bestProducts },
  } = useContext(BestProductsContext);
  
  return (
    <div className="bestProducts">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="bestProducts__heading">{state.title}</div>
          </div>
        </div>
        <div className="bestProducts__blocks">
          <div className="row">
            {bestProducts.map((bestProduct) => (
              <BestProductsList product={bestProduct}  key={bestProduct.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestProducts;
