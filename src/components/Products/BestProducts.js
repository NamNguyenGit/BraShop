import { useState } from "react";

const BestProducts = () => {
  const [state] = useState({
    title: "Best Products",
  });

  return (
    <div className="bestProducts">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
              <div className="bestProducts__heading">
                  {state.title}
              </div>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </div>
  );
};

export default BestProducts;
