import { Helmet } from "react-helmet-async";
import { useState } from "react";
import PageContainer from "../components/PageContainer"
const Shop = () => {
    const [state] = useState({
        heading: "our product"
    })
  return (
    <>
      <Helmet>
        <title>Shop page</title>
        <meta name="description" content="etsy , bra , shop page">
        </meta>
      </Helmet>
      <PageContainer data={state} />
    </>
  );
};

export default Shop;
