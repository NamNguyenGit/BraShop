import { useContext, useState } from "react";
import ServiceContext from "../../context/ServiceContext";
import ServiceLeft from "./ServicesLeft";
import ServicesList from "./ServicesList";
const Services = () => {
  const {
    ServiceData : {services}
  } = useContext(ServiceContext);
  
  const [state] = useState({
    heading:
      "Our motto: Our greatest asset is the customer! Treat each customer as if they are the only one! ",
    subHeading:
      "Etsy is the #1 lingerie brand in the United States and a leading specialty retailer of women’s bra. We understand our customers and inspire them with beautiful products and experiences for every moment in their life.",
  });
  return (
    <div className="services">
      <div className="services__contents">
        <div className="container">
          <div className="row services__contents__container">
            <div className="col-md-6 responsiveClass">
              <ServiceLeft
                heading={state.heading}
                subHeading={state.subHeading}
              />
            </div>
            <div className="col-md-6">
                <ServicesList services={services} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
