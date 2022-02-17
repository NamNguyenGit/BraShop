import { Helmet } from "react-helmet-async";
import { useState } from "react";
import PageContainer from "../components/PageParts/ShopContainer";
import SearchBar from "../components/PageParts/SearchBar";

const Shop = () => {
    const [state] = useState({
        heading: "our products"
    })
  return (
    <>
      <Helmet>
        <title>Shop page</title>
        <meta name="description" content="etsy , bra , shop page">
        </meta>
      </Helmet>
      <PageContainer data={state} > 
      <SearchBar />
      
      </PageContainer>
    </>
  );
};

export default Shop;
