import Header from "../Header";
import Footer from "../Footer/Footer";
import AllProducts from "./AllProducts";
import BestProductsContext from "../../context/BestProductsContext";
import { useContext, useState } from "react";
const PageContainer = ({ data, children }) => {
    const [state] = useState({
        title: "New Products",
        title2: "All Products",
      });
  const {
    BestProductsData: { bestProducts },
  } = useContext(BestProductsContext);

  return (
    <>
      <Header heading={data.heading} />
      <div className="page">
        <div className="container">
          <div className="row">
            <div className="page__content animation">{children}</div>
          </div>
          
          <div className="row">
          <div className="col-md-6">
            <div className="page__heading headingAnimation">{state.title2}</div>
          </div>
        </div>

          <div className="page__block">
            <div className="row">
              {bestProducts.map((bestProduct) => (
                <AllProducts product={bestProduct} key={bestProduct.id} />
              ))}
            </div>
            <div className="row">
              {bestProducts.map((bestProduct) => (
                <AllProducts product={bestProduct} key={bestProduct.id} />
              ))}
            </div>
          </div>
          <div className="row">
          <div className="col-md-6">
            <div className="page__heading headingAnimation">{state.title}</div>
          </div>
        </div>

          <div className="page__block">
            <div className="row">
              {bestProducts.map((bestProduct) => (
                <AllProducts product={bestProduct} key={bestProduct.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PageContainer;
